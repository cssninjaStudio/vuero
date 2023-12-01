<script setup lang="ts">
export type VCardAdvancedRadius = 'regular' | 'smooth' | 'rounded'
export interface VCardAdvancedProps {
  radius?: VCardAdvancedRadius
}

const props = withDefaults(defineProps<VCardAdvancedProps>(), {
  radius: 'regular',
})
</script>

<template>
  <div
    :class="[
      props.radius === 'regular' && 's-card-advanced',
      props.radius === 'smooth' && 'r-card-advanced',
      props.radius === 'rounded' && 'l-card-advanced',
    ]"
  >
    <div class="card-head">
      <div class="left">
        <slot name="header-left" />
      </div>
      <div class="right">
        <slot name="header-right" />
      </div>
    </div>
    <div class="card-body">
      <slot name="content" />
    </div>
    <div class="card-foot">
      <div class="left">
        <slot name="footer-left" />
      </div>
      <div class="right">
        <slot name="footer-right" />
      </div>
    </div>
  </div>
</template>
