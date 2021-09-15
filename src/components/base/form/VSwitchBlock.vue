<script lang="ts">
let instances = 0
</script>

<script setup lang="ts">
export type VSwitchBlockColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export interface VSwitchBlockEmits {
  (e: 'update:modelValue', value: boolean): void
}
export interface VSwitchBlockProps {
  modelValue?: boolean
  label?: string
  color?: VSwitchBlockColor
  thin?: boolean
}

const emit = defineEmits<VSwitchBlockEmits>()
const props = withDefaults(defineProps<VSwitchBlockProps>(), {
  modelValue: false,
  label: undefined,
  color: undefined,
})

const blockSwitchId = `block-switch-${++instances}`
</script>

<template inherit-attrs="false">
  <div
    :class="[
      props.label && 'switch-block',
      props.thin && props.label && 'thin-switch-block',
    ]"
  >
    <template v-if="props.thin">
      <label
        :for="blockSwitchId"
        class="thin-switch"
        :class="[props.color && `is-${props.color}`]"
      >
        <input
          :id="blockSwitchId"
          :checked="props.modelValue"
          class="input"
          type="checkbox"
          v-bind="$attrs"
          @change="emit('update:modelValue', !props.modelValue)"
        />
        <div class="slider"></div>
      </label>
    </template>
    <template v-else>
      <label
        :for="blockSwitchId"
        class="form-switch"
        :class="[props.color && `is-${props.color}`]"
      >
        <input
          :id="blockSwitchId"
          :checked="props.modelValue"
          type="checkbox"
          class="is-switch"
          v-bind="$attrs"
          @change="emit('update:modelValue', !props.modelValue)"
        />
        <i aria-hidden="true"></i>
      </label>
    </template>

    <div v-if="props.label" class="text">
      <label :for="blockSwitchId">
        <span>{{ props.label }}</span>
      </label>
    </div>
  </div>
</template>
