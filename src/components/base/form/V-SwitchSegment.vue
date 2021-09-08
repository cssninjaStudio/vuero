<script lang="ts">
let instances = 0
</script>

<script setup lang="ts">
export type SwitchSegmentColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    labelTrue?: string
    labelFalse?: string
    color?: SwitchSegmentColor
  }>(),
  {
    modelValue: false,
    labelTrue: undefined,
    labelFalse: undefined,
    color: undefined,
  }
)
</script>

<template inherit-attrs="false">
  <div class="switch-segment">
    <label v-if="labelFalse" class="is-label" :for="blockSwitchId">
      {{ labelFalse }}
    </label>
    <label
      :for="blockSwitchId"
      class="form-switch"
      :class="[color && `is-${color}`]"
    >
      <input
        :id="blockSwitchId"
        :checked="modelValue"
        v-bind="$attrs"
        type="checkbox"
        class="is-switch"
        @change="emit('update:modelValue', !modelValue)"
      />
      <i aria-hidden="true"></i>
    </label>
    <label v-if="labelTrue" class="is-label" :for="blockSwitchId">
      {{ labelTrue }}
    </label>
  </div>
</template>
