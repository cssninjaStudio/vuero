<script setup lang="ts">
export interface DocumentationDividerProps {
  title: string
  id: string
}

const props = withDefaults(defineProps<DocumentationDividerProps>(), {})
</script>

<template>
  <a :id="props.id" :name="props.id" class="is-invisible is-block zero-height">
    {{ props.title }}
  </a>
  <div class="is-divider" :data-content="props.title"></div>
</template>

<style lang="scss" scoped>
.is-divider {
  &::after {
    background: var(--background-grey);
  }
}

.is-dark {
  .is-divider {
    &::after {
      background: var(--dark-sidebar-light-10);
    }
  }
}
</style>
