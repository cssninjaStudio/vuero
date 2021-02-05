<script setup lang="ts">
import { defineProps, ref } from 'vue'

defineProps({
  frontmatter: {
    type: Object,
  },
  componentData: {
    type: Array,
    required: false,
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
        v-if="!frontmatter.disable_code"
        class="code-trigger"
        :class="[displayCode && 'is-active']"
        @click="displayCode = !displayCode"
      >
        <V-Icon v-if="!displayCode" icon="feather:code" />
        <V-Icon v-else icon="feather:x" />
      </a>
    </div>
    <div
      v-if="!frontmatter.disable_code || !frontmatter.disable_example"
      class="card-inner"
    >
      <div v-if="!frontmatter.disable_code" class="demo-example">
        <slot name="example"></slot>
      </div>

      <div
        v-if="!frontmatter.disable_code && displayCode"
        class="demo-code-wrapper"
      >
        <div class="demo-code">
          <slot name="code"></slot>
        </div>
        <div v-if="frontmatter.state" class="demo-state">
          <pre>{{ frontmatter.state }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/abstracts/_variables.scss';
@import '../../../assets/scss/abstracts/_mixins.scss';

// .demo-card {
//   .demo-title {
//     ::v-deep(h3) {
//       font-family: $font-alt;
//       font-size: 1.25rem;
//       font-weight: 300;
//       margin-bottom: 0.75rem;
//       color: $dark-text;
//       line-height: 1.125;
//     }
//   }
// }

// .is-dark {
//   .demo-card {
//     .demo-title {
//       ::v-deep(h3) {
//         color: $dark-dark-text;
//       }

//       ::v-deep(code) {
//         background: lighten($dark-sidebar, 6%) !important;
//         color: $primary;
//       }

//       ::v-deep(strong) {
//         color: $white;
//         font-weight: 400;
//       }
//     }
//   }
// }

.demo-code-wrapper {
  display: flex;
  margin-top: 2rem;

  .demo-code {
    flex-grow: 1;
  }
  .demo-state {
    flex-grow: 1;
    position: relative;
    margin-left: 1.5rem;
    max-width: 300px;

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

  .icon-boxes {
    display: flex;
    align-items: flex-end;

    .v-icon {
      margin: 0 0.15rem;
    }
  }
}
</style>
