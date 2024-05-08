<script setup lang="ts">
// @ts-ignore
import { ColorPicker } from 'vue-accessible-color-picker'
import 'vue-accessible-color-picker/styles'

const props = withDefaults(
  defineProps<{
    color: string
    shrink?: boolean
  }>(),
  {},
)
const colorVarName = computed(() => `--${props.color}`)
const colorSnippet = computed(() => `${colorVarName.value}: ${colorVar.value}`)

const { isDark } = useDarkmode()

let initialValue: string
const internal = ref('')
const contrast = ref(false)
const colorVar = computed({
  get() {
    return internal.value
  },
  set(value) {
    internal.value = value
    document.documentElement.style.setProperty(colorVarName.value, value)
  },
})
watch([
  colorVarName,
  isDark,
], () => {
  internal.value = window.getComputedStyle(window?.document?.documentElement).getPropertyValue(colorVarName.value)?.trim()
  if (!initialValue) {
    initialValue = internal.value
  }
}, { immediate: true })

useMutationObserver(window?.document?.documentElement, () => {
  internal.value = window.getComputedStyle(window?.document?.documentElement).getPropertyValue(colorVarName.value)?.trim()
}, {
  attributeFilter: ['style', 'class'],
})

const { text, copy, copied } = useClipboard()

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
function updateColor({ colors }: any) {
  colorVar.value = colors.hex
  contrast.value = colors.hsl.l > 70
}

function reset() {
  colorVar.value = initialValue
}
</script>

<template>
  <div class="color-card">
    <div v-if="!props.shrink" class="color-card-header">
      <a
        role="button"
        tabindex="-1"
        class="color-card-header-meta"
        @keydown.enter.prevent="toggle"
        @click="toggle"
      >
        <div
          class="color-dot is-primary"
          :class="{
            'is-contrasted': contrast,
          }"
        >
          <VIcon
            icon="lucide:paint-bucket"
            class="is-size-5"
          />
        </div>
        <div class="meta">
          <span>
            var({{ colorVarName }})
            <VIcon
              v-if="isOpen"
              class="is-size-7"
              icon="lucide:chevron-up"
            />
            <VIcon
              v-else
              class="is-size-7"
              icon="lucide:chevron-down"
            />
          </span>
          <span>{{ colorVar }}</span>
        </div>
      </a>
      <div class="actions">
        <VAction
          v-if="initialValue && colorVar !== initialValue"
          tabindex="0"
          class="mr-2"
          @keydown.enter.prevent="reset"
          @click="reset"
        >
          <VIcon icon="ph:arrow-counter-clockwise-fill" class="is-size-5" />
        </VAction>
      </div>
    </div>
    <div v-show="isOpen || props.shrink">
      <div v-if="!props.shrink" class="is-divider" />
      <div class="color-picker">
        <ColorPicker
          :id="props.color"
          class="hide-alpha hide-copy"
          :color="colorVar"
          @color-change="updateColor"
        >
          <template #hue-range-input-label>
            <span class="sr-only">Hue</span>
          </template>

          <template #alpha-range-input-label>
            <span class="sr-only">Alpha</span>
          </template>
          <template #format-switch-button>
            <span class="sr-only">Switch format</span>

            <VIcon
              class="rem-120 is-clickable"

              icon="fluent:chevron-up-down-20-filled"
            />
          </template>
        </ColorPicker>
      </div>
      <div>
        <VButton
          fullwidth
          tabindex="0"
          @keydown.enter.prevent="copy(colorSnippet)"
          @click="copy(colorSnippet)"
        >
          <Transition
            name="fade-fast"
            mode="out-in"
          >
            <span
              v-if="copied && text === colorSnippet"
              class="is-copied"
            >
              Copied!
            </span>
            <span v-else> Copy snippet color </span>
          </Transition>
        </VButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/@src/scss/abstracts/all';

.color-picker {
  margin: 0 auto;
}

.color-card {
  @include vuero-s-card;

  .color-card-header {
    display: flex;
    align-items: center;
  }

  .is-divider {
    border-top-color: color-mix(in oklab, var(--widget-grey), black 8%);
  }

  dl {
    font: var(--font);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      border-bottom: solid 1px color-mix(in oklab, var(--widget-grey), black 4%);
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  dd {
    font: var(--font-alt);
  }

  dt {
    display: flex;
    flex-direction: column;
  }

  .color-dot {
    height: 40px;
    width: 40px;
    border-radius: var(--radius-rounded);
    background-color: v-bind(colorVar);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffA;
    transition: color 0.2s;

    &.is-contrasted {
      color: #0007;
    }
  }

  .color-card-header-meta {
    display: flex;
    align-items: center;
    flex-grow: 1;

    &:hover {
      .color-dot {
        color: #fff;

        &.is-contrasted {
          color: #000A;
        }
      }
    }
  }

  .meta {
    margin-inline-start: 12px;
    flex-grow: 1;

    span {
      display: block;
      font-family: var(--font-alt);

      &:first-child {
        color: var(--dark-text);
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 0.9rem;
        color: var(--light-text);
      }
    }
  }
}

.is-dark {
  .color-card {
    @include vuero-card--dark;

    .is-divider {
      border-top-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
    }

    dl {
      &:not(:last-child) {
        border-bottom: solid 1px color-mix(in oklab, var(--dark-sidebar), white 16%);
      }
    }

    .meta {
      span {
        &:first-child {
          color: var(--dark-dark-text);
        }
      }
    }
  }
}
</style>
