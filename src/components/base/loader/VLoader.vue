<script setup lang="ts">
export type VLoaderSize = 'small' | 'large' | 'xl'
export type VLoaderWrapperRadius = 'regular' | 'smooth' | 'rounded'
export interface VLoaderProps {
  size?: VLoaderSize
  card?: VLoaderWrapperRadius
  active?: boolean
  grey?: boolean
  translucent?: boolean
}

const props = withDefaults(defineProps<VLoaderProps>(), {
  size: undefined,
  card: undefined,
})
</script>

<template>
  <div class="has-loader" :class="[props.active && 'has-loader-active']">
    <div
      v-if="props.active"
      class="v-loader-wrapper is-active"
      :class="[
        grey && 'is-grey',
        translucent && 'is-translucent',
        card === 'regular' && 's-card',
        card === 'smooth' && 'r-card',
        card === 'rounded' && 'l-card',
      ]"
    >
      <div
        class="loader is-loading"
        :class="[props.size && `is-${props.size}`]"
      ></div>
    </div>

    <slot></slot>
  </div>
</template>
