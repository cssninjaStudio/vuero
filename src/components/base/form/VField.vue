<script setup lang="ts">
export type VFieldProps = {
  label?: string
  addons?: boolean
  textaddon?: boolean
  grouped?: boolean
  multiline?: boolean
  horizontal?: boolean
}

const props = withDefaults(defineProps<VFieldProps>(), {
  label: undefined,
})
</script>

<template>
  <div
    class="field"
    :class="[
      props.addons && 'has-addons',
      props.textaddon && 'has-textarea-addon',
      props.grouped && 'is-grouped',
      props.grouped && props.multiline && 'is-grouped-multiline',
      props.horizontal && 'is-horizontal',
    ]"
  >
    <template v-if="typeof props.label === 'string' && props.horizontal">
      <div class="field-label is-normal">
        <label class="label">{{ props.label }}</label>
      </div>
      <div class="field-body">
        <slot></slot>
      </div>
    </template>
    <template v-else-if="typeof props.label === 'string'">
      <label class="label">
        {{ props.label }}
      </label>

      <slot></slot>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
