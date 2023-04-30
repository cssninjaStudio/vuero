<script setup lang="ts">
import { version } from '../../../../package.json'
import { useDarkmode } from '/@src/stores/darkmode'
const slots = useSlots()
const route = useRoute()

const darkmode = useDarkmode()
const hasCodeSample = computed(() => !!slots.code?.())
const hasExample = computed(() => !!slots.example?.())
const hasDefault = computed(() => !!slots.default?.())

const props = withDefaults(
  defineProps<{
    frontmatter?: any
    sourceMeta?: {
      relativePath: string
      basename: string
      path?: string
      editProtocol?: string
    }
  }>(),
  {
    frontmatter: () => ({}),
    sourceMeta: undefined,
  }
)

const displayCode = ref(false)
const hasSlimscroll = computed(() => props.frontmatter?.slimscroll ?? false)

const githubIssueUrl = computed(() => {
  if (!props.sourceMeta?.relativePath || !props.sourceMeta?.basename) {
    return ''
  }

  const issuePath = `https://github.com/cssninjaStudio/vuero/issues/new`
  const sourceUrl = `https://github.com/cssninjaStudio/vuero/tree/main${props.sourceMeta.relativePath}`
  const labels = ['documentation needed']

  const title = `Issue with ${props.sourceMeta.basename}`
  const body = [
    `## Describe the bug`,
    ``,
    `<!-- Describe the issue that you're seeing. -->`,
    ``,
    `## Expected behavior`,
    ``,
    `<!-- If applicable, describe what you expected to happen. -->`,
    ``,
    `## Additional context`,
    ``,
    `* Demo url:      https://vuero.cssninja.io${route.fullPath}`,
    `* Demo source:   [\`${props.sourceMeta.relativePath}\`](${sourceUrl})`,
    `* Version:       \`${version}\``,
    `* Theme:         \`${darkmode.isDark ? 'dark' : 'light'}\``,
    ``,
  ].join('\n')

  return `${issuePath}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(
    body
  )}&labels=${encodeURIComponent(labels.join(','))}`
})
</script>

<template>
  <DocumentationDemoCard>
    <div class="demo-title" :class="[hasSlimscroll && 'has-slimscroll-x']">
      <div v-if="hasDefault" class="content">
        <slot></slot>
      </div>

      <div class="demo-actions">
        <a
          v-if="props.sourceMeta?.editProtocol && props.sourceMeta.path"
          v-tooltip.rounded="`Open with VS Code (dev mode)`"
          class="code-edit"
          :href="`${props.sourceMeta.editProtocol}${props.sourceMeta.path}:1:1`"
        >
          <VIcon style="height: 16px" icon="logos:visual-studio-code" />
        </a>
        <a
          v-if="githubIssueUrl"
          v-tooltip.rounded="`Report issue on GitHub`"
          class="report-issue"
          :href="githubIssueUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VIcon style="height: 16px" icon="carbon:logo-github" />
        </a>
        <span
          v-if="hasCodeSample"
          v-tooltip.rounded="displayCode ? 'Hide source code' : `View source code`"
          ><a
            class="code-trigger"
            role="button"
            tabindex="0"
            :class="[displayCode && 'is-active']"
            @keydown.space.prevent="displayCode = !displayCode"
            @click="displayCode = !displayCode"
          >
            <VIcon v-show="!displayCode" style="height: 16px" icon="feather:code" />
            <VIcon v-show="displayCode" style="height: 16px" icon="feather:x" /> </a
        ></span>
      </div>
    </div>
    <div v-if="(hasCodeSample && displayCode) || hasExample" class="card-inner">
      <div v-if="hasExample" class="demo-example">
        <slot name="example"></slot>
      </div>

      <div v-if="hasCodeSample && displayCode" class="demo-code-wrapper">
        <div class="demo-code">
          <slot name="code"></slot>
        </div>
        <div v-if="props.frontmatter.state" class="demo-state">
          <pre>{{ props.frontmatter.state }}</pre>
        </div>
      </div>
    </div>
  </DocumentationDemoCard>
</template>

<style lang="scss" scoped>
.demo-code-wrapper {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 2rem;
  overflow-x: auto;

  .demo-code {
    flex-grow: 1;
  }

  :deep(.shiki) {
    border-radius: var(--radius-large);

    code {
      counter-reset: step;
      counter-increment: step 0;
    }

    code .line::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-inline-end: 1.5rem;
      display: inline-block;
      text-align: inset-inline-end;
      color: #898d98;
    }
  }

  .demo-state {
    // flex-grow: 1;
    position: relative;
    margin-bottom: 1.5rem;
    max-width: 100%;

    &::before {
      position: absolute;
      top: 0.6em;
      inset-inline-end: 1em;
      z-index: 2;
      font-size: 0.8rem;
      color: #888;
      content: 'state';
    }
  }
}

.is-dark {
  .demo-state {
    pre {
      background: #1a1a1f;
      border-radius: 0.75rem;
      color: #c0c0d1;
    }
  }

  .content {
    &::v-deep(code) {
      background: var(--background-gray);
    }
  }
}

// Adjustments
.demo-example {
  > .v-avatar {
    margin: 0 0.15rem;
  }
}
</style>
