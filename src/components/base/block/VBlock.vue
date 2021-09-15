<script setup lang="ts">
export interface VBlockProps {
  title: string
  subtitle?: string
  infratitle?: string
  center?: boolean
  lighter?: boolean
  narrow?: boolean
  mResponsive?: boolean
  tResponsive?: boolean
}

const props = withDefaults(defineProps<VBlockProps>(), {
  subtitle: undefined,
  infratitle: undefined,
})
</script>

<template>
  <div
    :class="[
      !props.center && 'media-flex',
      props.center && 'media-flex-center',
      props.narrow && 'no-margin',
      props.mResponsive && 'is-responsive-mobile',
      props.tResponsive && 'is-responsive-tablet-p',
    ]"
  >
    <slot name="icon"></slot>
    <div class="flex-meta" :class="[props.lighter && 'is-lighter']">
      <span>{{ props.title }}</span>
      <span v-if="props.subtitle">{{ props.subtitle }}</span>
      <span v-if="props.infratitle">{{ props.infratitle }}</span>
      <slot></slot>
    </div>
    <div class="flex-end">
      <slot name="action"></slot>
    </div>
  </div>
</template>
