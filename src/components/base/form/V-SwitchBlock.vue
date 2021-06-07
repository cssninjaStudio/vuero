<script lang="ts">
let instances = 0
</script>

<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, defineEmit } from 'vue'

type SwitchBlockColor =
  | undefined
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

const blockSwitchId = `block-switch-${++instances}`
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: undefined,
  },
  color: {
    type: String as PropType<SwitchBlockColor>,
    default: undefined,
    validator: (value: SwitchBlockColor) => {
      // The value must match one of these strings
      if (
        [undefined, 'primary', 'info', 'success', 'warning', 'danger'].indexOf(
          value
        ) === -1
      ) {
        console.warn(
          `V-SwitchBlock: invalid "${value}" color. Should be primary, info, success, warning, danger or undefined`
        )
        return false
      }

      return true
    },
  },
  thin: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmit(['update:modelValue'])
</script>

<template inherit-attrs="false">
  <div :class="[label && 'switch-block', thin && label && 'thin-switch-block']">
    <template v-if="thin">
      <label
        :for="blockSwitchId"
        class="thin-switch"
        :class="[color && `is-${color}`]"
      >
        <input
          :id="blockSwitchId"
          :checked="modelValue"
          class="input"
          type="checkbox"
          v-bind="$attrs"
          @change="emit('update:modelValue', !modelValue)"
        />
        <div class="slider"></div>
      </label>
    </template>
    <template v-else>
      <label
        :for="blockSwitchId"
        class="form-switch"
        :class="[color && `is-${color}`]"
      >
        <input
          :id="blockSwitchId"
          :checked="modelValue"
          type="checkbox"
          class="is-switch"
          v-bind="$attrs"
          @change="emit('update:modelValue', !modelValue)"
        />
        <i aria-hidden="true"></i>
      </label>
    </template>

    <div v-if="label" class="text">
      <label :for="blockSwitchId">
        <span>{{ label }}</span>
      </label>
    </div>
  </div>
</template>
