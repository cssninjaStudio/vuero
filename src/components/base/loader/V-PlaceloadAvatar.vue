<script setup lang="ts">
export type PlaceloadAvatarSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type PlaceloadRoundedSize = 'full' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    size?: PlaceloadAvatarSize
    rounded?: PlaceloadRoundedSize
    centered?: boolean
    disabled?: boolean
  }>(),
  {
    size: undefined,
    rounded: 'full',
  }
)
</script>

<template>
  <div
    class="placeload-avatar"
    :class="[
      !props.disabled && `loads`,
      props.size && `is-${props.size}`,
      props.centered && `is-centered`,
      props.rounded && `is-rounded-${props.rounded}`,
    ]"
  ></div>
</template>
