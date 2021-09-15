<script lang="ts">
let instances = 0
</script>

<script setup lang="ts">
export type VSwitchSegmentColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export interface VSwitchSegmentEmits {
  (e: 'update:modelValue', value: boolean): void
}
export interface VSwitchSegmentProps {
  modelValue?: boolean
  labelTrue?: string
  labelFalse?: string
  color?: VSwitchSegmentColor
}

const emit = defineEmits<VSwitchSegmentEmits>()
const props = withDefaults(defineProps<VSwitchSegmentProps>(), {
  modelValue: false,
  labelTrue: undefined,
  labelFalse: undefined,
  color: undefined,
})
const blockSwitchId = `segment-switch-${++instances}`
</script>

<template inherit-attrs="false">
  <div class="switch-segment">
    <label v-if="props.labelFalse" class="is-label" :for="blockSwitchId">
      {{ props.labelFalse }}
    </label>
    <label
      :for="blockSwitchId"
      class="form-switch"
      :class="[props.color && `is-${props.color}`]"
    >
      <input
        :id="blockSwitchId"
        :checked="props.modelValue"
        v-bind="$attrs"
        type="checkbox"
        class="is-switch"
        @change="emit('update:modelValue', !props.modelValue)"
      />
      <i aria-hidden="true"></i>
    </label>
    <label v-if="props.labelTrue" class="is-label" :for="blockSwitchId">
      {{ props.labelTrue }}
    </label>
  </div>
</template>
