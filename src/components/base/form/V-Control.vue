<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: undefined,
  },
  isValid: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  textaddon: {
    type: Boolean,
    default: false,
  },
  nogrow: {
    type: Boolean,
    default: false,
  },
  subcontrol: {
    type: Boolean,
    default: false,
  },
})

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <div
    class="control"
    :class="[
      icon && 'has-icon',
      loading && 'is-loading',
      expanded && 'is-expanded',
      nogrow && 'is-nogrow',
      textaddon && 'is-textarea-addon',
      isValid && 'has-validation has-success',
      hasError && 'has-validation has-error',
      subcontrol && 'subcontrol',
    ]"
  >
    <slot></slot>
    <div v-if="icon" class="form-icon">
      <i
        v-if="isIconify"
        aria-hidden="true"
        class="iconify"
        :data-icon="icon"
      ></i>
      <i v-else aria-hidden="true" :class="icon"></i>
    </div>
    <div v-if="isValid" class="validation-icon is-success">
      <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
    </div>
    <div v-else-if="hasError" class="validation-icon is-error">
      <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
    </div>
    <slot name="extra"></slot>
  </div>
</template>

<style lang="scss" scoped>
.is-nogrow {
  flex-grow: 0 !important;
}
</style>
