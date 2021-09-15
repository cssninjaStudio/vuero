<script setup lang="ts">
export type VPlaceloadAvatarSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type VPlaceloadAvatarRounded = 'full' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export interface VPlaceloadAvatarProps {
  size?: VPlaceloadAvatarSize
  rounded?: VPlaceloadAvatarRounded
  centered?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<VPlaceloadAvatarProps>(), {
  size: undefined,
  rounded: 'full',
})
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
