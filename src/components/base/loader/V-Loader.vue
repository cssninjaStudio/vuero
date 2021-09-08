<script setup lang="ts">
export type LoaderSize = 'small' | 'large' | 'xl'
export type LoaderWrapperRadius = 'regular' | 'smooth' | 'rounded'

const props = withDefaults(
  defineProps<{
    size?: LoaderSize
    card?: LoaderWrapperRadius
    active?: boolean
    grey?: boolean
    translucent?: boolean
  }>(),
  {
    size: undefined,
    card: undefined,
  }
)
</script>

<template>
  <div class="has-loader" :class="[active && 'has-loader-active']">
    <div
      v-if="active"
      class="v-loader-wrapper is-active"
      :class="[
        grey && 'is-grey',
        translucent && 'is-translucent',
        card === 'regular' && 's-card',
        card === 'smooth' && 'r-card',
        card === 'rounded' && 'l-card',
      ]"
    >
      <div class="loader is-loading" :class="[size && `is-${size}`]"></div>
    </div>

    <slot></slot>
  </div>
</template>
