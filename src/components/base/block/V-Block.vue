<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  infratitle: {
    type: String,
    default: undefined,
  },
  center: {
    type: Boolean,
    default: false,
  },
  lighter: {
    type: Boolean,
    default: false,
  },
  narrow: {
    type: Boolean,
    default: false,
  },
  mResponsive: {
    type: Boolean,
    default: false,
  },
  tResponsive: {
    type: Boolean,
    default: false,
  },
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
