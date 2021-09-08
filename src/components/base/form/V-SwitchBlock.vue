<script lang="ts">
let instances = 0
</script>

<script setup lang="ts">
export type SwitchBlockColor =
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
    label?: string
    color?: SwitchBlockColor
    thin?: boolean
  }>(),
  {
    modelValue: false,
    label: undefined,
    color: undefined,
  }
)

const blockSwitchId = `block-switch-${++instances}`
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
