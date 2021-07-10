<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  frontmatter: {
    type: Object,
    default: () => ({}),
  },
  componentData: {
    type: Array,
    default: () => [],
  },
})

const displayCode = ref(false)
</script>

<template>
  <div class="demo-card">
    <div class="demo-title">
      <div class="content">
        <slot></slot>
      </div>

      <a
        v-if="!props.frontmatter.disable_code"
        class="code-trigger"
        :class="[displayCode && 'is-active']"
        @click="displayCode = !displayCode"
      >
        <V-Icon v-if="!displayCode" style="height: 16px" icon="feather:code" />
        <V-Icon v-else style="height: 16px" icon="feather:x" />
      </a>
    </div>
    <div
      v-if="
        !props.frontmatter.disable_code || !props.frontmatter.disable_example
      "
      class="card-inner"
    >
      <div v-if="!props.frontmatter.disable_code" class="demo-example">
        <slot name="example"></slot>
      </div>

      <div
        v-if="!props.frontmatter.disable_code && displayCode"
        class="demo-code-wrapper"
      >
        <div class="demo-code">
          <slot name="code"></slot>
        </div>
        <div v-if="props.frontmatter.state" class="demo-state">
          <pre>{{ props.frontmatter.state }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';

.demo-code-wrapper {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 2rem;
  overflow-x: auto;

  .demo-code {
    flex-grow: 1;
  }
  .demo-state {
    //flex-grow: 1;
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
}

//Adjustments
.demo-example {
  > .v-avatar {
    margin: 0 0.15rem;
  }
}
</style>
