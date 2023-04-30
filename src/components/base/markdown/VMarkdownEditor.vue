<script setup lang="ts">
import type {
  BUILT_IN_COMMANDS,
  CommandTrigger,
  TextareaMarkdownOptions,
  Command,
} from 'textarea-markdown-editor/dist/esm/types'
import type { Cursor } from 'textarea-markdown-editor/dist/esm/Cursor.new'
import { bootstrapTextareaMarkdown } from 'textarea-markdown-editor/dist/esm/bootstrap'
import { useVFieldContext } from '/@src/composable/useVFieldContext'

type VMarkdownEditorAction = (typeof BUILT_IN_COMMANDS)[number]
type VMarkdownEditorContext = {
  textarea: HTMLTextAreaElement
  cursor: Cursor
  trigger: CommandTrigger
  value: string
}
type VMarkdownEditorCommandAction = {
  icon: string
  tooltip?: string
  label?: string
  action: VMarkdownEditorAction | ((ctx: VMarkdownEditorContext) => void | Promise<void>)
}
type VMarkdownEditorCommandGroup = {
  icon: string
  tooltip?: string
  vertical?: boolean
  label?: string
  children: Record<string, VMarkdownEditorCommandAction>
}

type VMarkdownEditorToolbar = Record<
  string,
  VMarkdownEditorCommandAction | VMarkdownEditorCommandGroup
>

const emits = defineEmits<{
  (event: 'update:modelValue', value?: any): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: string
    autogrow?: boolean
    options?: Partial<TextareaMarkdownOptions>
    commands?: Command[]
    toolbar?: VMarkdownEditorToolbar
  }>(),
  {
    modelValue: '',
    options: () => ({
      enableIndentExtension: true,
      enableLinkPasteExtension: true,
      enableOrderedListAutoCorrectExtension: true,
      enablePrefixWrappingExtension: true,
      enableProperLineRemoveBehaviorExtension: true,
    }),
    commands: () => [],
    toolbar: () => ({
      bold: {
        icon: 'ci:bold',
        tooltip: 'Bold (Ctrl + B)',
        action: 'bold',
      },
      italic: {
        icon: 'ci:italic',
        tooltip: 'Italic (Ctrl + I)',
        action: 'italic',
      },
      'strike-through': {
        icon: 'ci:strikethrough',
        tooltip: 'Strike Through (Ctrl + Shift + X)',
        action: 'strike-through',
      },
      headings: {
        icon: 'ci:heading',
        tooltip: 'Headings',
        children: {
          h1: {
            icon: 'ci:heading-h1',
            tooltip: 'H1',
            action: 'h1',
          },
          h2: {
            icon: 'ci:heading-h2',
            tooltip: 'H2',
            action: 'h2',
          },
          h3: {
            icon: 'ci:heading-h3',
            tooltip: 'H3',
            action: 'h3',
          },
          h4: {
            icon: 'ci:heading-h4',
            tooltip: 'H4',
            action: 'h4',
          },
          h5: {
            icon: 'ci:heading-h5',
            tooltip: 'H5',
            action: 'h5',
          },
          h6: {
            icon: 'ci:heading-h6',
            tooltip: 'H6',
            action: 'h6',
          },
        },
      },
      'unordered-list': {
        icon: 'ci:list-ul',
        tooltip: 'Unordered List',
        action: 'unordered-list',
      },
      'ordered-list': {
        icon: 'ci:list-ol',
        tooltip: 'Ordered List',
        action: 'ordered-list',
      },
      'code-block': {
        icon: 'ci:terminal',
        tooltip: 'Code Block',
        action: 'code-block',
      },
      'code-inline': {
        icon: 'ci:code',
        tooltip: 'Code Inline',
        action: 'code-inline',
      },
      // code: {
      //   icon: 'ci:code',
      //   tooltip: 'Code',
      // },
      link: {
        icon: 'ci:link',
        tooltip: 'Link',
        action: 'link',
      },
      image: {
        icon: 'ci:image',
        tooltip: 'Image',
        action: 'image',
      },
      'block-quotes': {
        icon: 'ci:double-quotes-l',
        tooltip: 'Block Quotes',
        action: 'block-quotes',
      },
    }),
  }
)

const vFieldContext = reactive(
  useVFieldContext({
    help: 'VMarkdownEditor',
  })
)

const textareaRef = ref<HTMLTextAreaElement>()
const mode = ref<'write' | 'preview'>('write')
const trigger = shallowRef<CommandTrigger>()
const cursor = shallowRef<Cursor>()
const value = ref((vFieldContext?.field?.value as undefined | string) ?? props.modelValue)

watch(value, () => {
  emits('update:modelValue', value.value)
})
watch(
  () => props.modelValue,
  () => {
    value.value = props.modelValue
  }
)

function fitSize() {
  if (!textareaRef.value) {
    return
  }

  if (props.autogrow) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
  }
}

function triggerAction(
  action: VMarkdownEditorAction | ((ctx: VMarkdownEditorContext) => void | Promise<void>)
) {
  if (typeof action === 'function') {
    action({
      textarea: textareaRef.value!,
      cursor: cursor.value!,
      trigger: trigger.value!,
      value: value.value,
    })
  } else {
    trigger.value?.(action)
  }
}

watchEffect((cleanup) => {
  if (textareaRef.value) {
    const mde = bootstrapTextareaMarkdown(textareaRef.value, {
      options: props.options, // optional options config
      commands: [], // optional commands configs
    })

    trigger.value = mde.trigger
    cursor.value = mde.cursor

    fitSize()

    cleanup(mde.dispose)
  }
})
</script>

<template>
  <div class="markdown-editor">
    <VFlex justify-content="space-between" class="toolbar">
      <VFlexItem class="toolbar-mode">
        <VButtons addons>
          <VAction dark="2" :active="mode === 'write'" @click="mode = 'write'">
            <VIcon icon="feather:edit-3" />
            <span>Write</span>
          </VAction>
          <VAction
            dark="2"
            :disabled="!value"
            :active="mode === 'preview'"
            @click="mode = 'preview'"
          >
            <VIcon icon="feather:eye" />
            <span>Preview</span>
          </VAction>
        </VButtons>
      </VFlexItem>
      <VFlexItem class="toolbar-actions">
        <!-- toolbar -->
        <VButtons v-if="mode === 'write'" addons>
          <div v-for="(command, key) in props.toolbar" :key="key" class="toolbar-item">
            <VAction
              v-if="'action' in command"
              v-tooltip.rounded="command.tooltip"
              dark="2"
              class="toolbar-action"
              @click.prevent="() => triggerAction(command.action)"
            >
              <VIcon v-if="command.icon" :icon="command.icon" />
              <span v-if="command.label">{{ command.label }}</span>
            </VAction>
            <VDropdown
              v-else
              class="toolbar-dropdown"
              :class="[command.vertical && 'is-vertical']"
            >
              <template #button="dropdown">
                <VAction
                  v-tooltip.rounded="command.tooltip"
                  dark="2"
                  :active="dropdown.isOpen"
                  class="toolbar-dropdown-trigger"
                  @keydown.space.prevent="dropdown.toggle"
                  @click="dropdown.toggle"
                >
                  <VIcon v-if="command.icon" :icon="command.icon" />
                  <span v-if="command.label">{{ command.label }}</span>
                </VAction>
              </template>

              <template #content>
                <VButtons class="mt-1" addons>
                  <VAction
                    v-for="(sub, subkey) in command.children"
                    :key="`action-${subkey}`"
                    v-tooltip.rounded="sub.tooltip"
                    class="toolbar-dropdown-action"
                    dark="2"
                    @click.prevent="() => triggerAction(sub.action)"
                  >
                    <VIcon v-if="sub.icon" :icon="sub.icon" />
                    <span v-if="sub.label">{{ sub.label }}</span>
                  </VAction>
                </VButtons>
              </template>
            </VDropdown>
          </div>
        </VButtons>
      </VFlexItem>
    </VFlex>

    <!-- textarea input -->
    <slot v-if="mode === 'write'" name="before-textarea"></slot>
    <textarea
      v-show="mode === 'write'"
      ref="textareaRef"
      v-model="value"
      v-bind="$attrs"
      class="textarea mt-0"
      autocomplete="no"
      rows="10"
      @input="fitSize"
    ></textarea>
    <slot v-if="mode === 'write'" name="after-textarea"></slot>

    <slot v-if="mode === 'preview'" name="preview" v-bind="{ value }">
      <VCard radius="smooth">
        <VMarkdownPreview :source="value" />
      </VCard>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.markdown-editor {
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;

  .toolbar {
    margin-bottom: 0.5rem;
    --primary-box-shadow: none;

    .buttons {
      margin-bottom: 0;
    }

    .button {
      margin-bottom: 0;
    }
  }

  .toolbar-actions {
    .buttons {
      .button {
        padding: 0 8px;
        height: 31px;
        border-radius: 0;

        :deep(.iconify) {
          font-size: 1.2rem;
        }
      }
    }
  }

  .textarea {
    max-height: 500px;
    font-family: var(--font-monospace);
    font-size: 0.9rem;
  }

  :deep(.dropdown-menu) {
    padding: 0;
    min-width: 0;

    .dropdown-content {
      padding: 0;

      .buttons {
        flex-wrap: nowrap;

        .button {
          margin-bottom: 0;
        }
      }
    }
  }

  .toolbar-dropdown-action.button {
    &:first-of-type {
      border-start-start-radius: 3px;
      border-start-end-radius: 0;
      border-end-start-radius: 3px;
      border-end-end-radius: 0;
    }

    &:last-of-type {
      border-start-start-radius: 0;
      border-start-end-radius: 3px;
      border-end-start-radius: 0;
      border-end-end-radius: 3px;
    }
  }

  .toolbar-item {
    &:first-of-type {
      .toolbar-action {
        border-start-start-radius: 3px;
        border-end-start-radius: 3px;
      }

      .toolbar-dropdown-trigger {
        border-start-start-radius: 3px;
        border-end-start-radius: 3px;
      }
    }

    &:last-of-type {
      .toolbar-action {
        border-start-end-radius: 3px;
        border-end-end-radius: 3px;
      }

      .toolbar-dropdown-trigger {
        border-start-end-radius: 3px;
        border-end-end-radius: 3px;
      }
    }

    // &:not(:last-of-type) {
    //   margin-inline-start: -1px;
    // }

    ~ .toolbar-item {
      margin-inline-start: -1px;
    }
  }

  .toolbar-dropdown {
    &.is-vertical {
      .buttons {
        align-items: stretch;

        .button {
          place-content: normal;
        }
      }

      .toolbar-dropdown-action.button {
        &:first-of-type {
          border-start-start-radius: 3px;
          border-start-end-radius: 3px;
          border-end-start-radius: 0;
          border-end-end-radius: 0;
        }

        &:last-of-type {
          border-start-start-radius: 0;
          border-start-end-radius: 0;
          border-end-start-radius: 3px;
          border-end-end-radius: 3px;
        }
      }

      .buttons {
        flex-direction: column;

        .toolbar-dropdown-action {
          margin-bottom: -1px;
          margin-inline-end: 0;
        }
      }
    }
  }
}
</style>
