<script lang="ts">
let instances = 0
</script>

<script setup lang="ts">
import type { PropType } from 'vue'

type SwitchSegmentColor =
  | undefined
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

const blockSwitchId = `segment-switch-${++instances}`
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  labelTrue: {
    type: String,
    default: undefined,
  },
  labelFalse: {
    type: String,
    default: undefined,
  },
  color: {
    type: String as PropType<SwitchSegmentColor>,
    default: undefined,
    validator: (value: SwitchSegmentColor) => {
      // The value must match one of these strings
      if (
        [undefined, 'primary', 'info', 'success', 'warning', 'danger'].indexOf(
          value
        ) === -1
      ) {
        console.warn(
          `V-SwitchSegment: invalid "${value}" color. Should be primary, info, success, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
})

const emit = defineEmits(['update:modelValue'])
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
