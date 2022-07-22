<script setup lang="ts">
const slots = useSlots()

const hasCodeSample = computed(() => !!slots.code?.())
const hasExample = computed(() => !!slots.example?.())
const hasDefault = computed(() => !!slots.default?.())

const props = withDefaults(
  defineProps<{
    componentData?: any[]
    frontmatter?: any
  }>(),
  {
    componentData: () => [],
    frontmatter: () => ({}),
  }
)

const displayCode = ref(false)
const hasSlimscroll = computed(() => props.frontmatter?.slimscroll ?? false)
</script>

<template>
  <DocumentationDemoCard>
    <div class="demo-title" :class="[hasSlimscroll && 'has-slimscroll-x']">
      <div v-if="hasDefault" class="content">
        <slot></slot>
      </div>

      <a
        v-if="hasCodeSample"
        aria-label="Toggle code example"
        class="code-trigger"
        tabindex="0"
        :class="[displayCode && 'is-active']"
        @keydown.space.prevent="displayCode = !displayCode"
        @click="displayCode = !displayCode"
      >
        <VIcon v-if="!displayCode" style="height: 16px" icon="feather:code" />
        <VIcon v-else style="height: 16px" icon="feather:x" />
      </a>
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

  .demo-state {
    // flex-grow: 1;
    position: relative;
    margin-bottom: 1.5rem;
    max-width: 100%;

    &::before {
      position: absolute;
      top: 0.6em;
      right: 1em;
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
