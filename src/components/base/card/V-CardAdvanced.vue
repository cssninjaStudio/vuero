<script setup lang="ts">
export type CardRadius = 'regular' | 'smooth' | 'rounded'

const props = withDefaults(
  defineProps<{
    radius?: CardRadius
  }>(),
  {
    radius: 'regular',
  }
)
</script>

<template>
  <div
    :class="[
      radius === 'regular' && 's-card-advanced',
      radius === 'smooth' && 'r-card-advanced',
      radius === 'rounded' && 'l-card-advanced',
    ]"
  >
    <div class="card-head">
      <div class="left">
        <slot name="header-left"></slot>
      </div>
      <div class="right">
        <slot name="header-right"></slot>
      </div>
    </div>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
    <div class="card-foot">
      <div class="left">
        <slot name="footer-left"></slot>
      </div>
      <div class="right">
        <slot name="footer-right"></slot>
      </div>
    </div>
  </div>
</template>
