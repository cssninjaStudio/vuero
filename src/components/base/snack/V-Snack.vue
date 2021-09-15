<script setup lang="ts">
import { computed } from 'vue'

export type VSnackColor = 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type VSnackSize = 'small'
export interface VSnackProps {
  title: string
  icon?: string
  image?: string
  placeholder?: string
  color?: VSnackColor
  size?: VSnackSize
  solid?: boolean
  white?: boolean
}

const props = withDefaults(defineProps<VSnackProps>(), {
  icon: undefined,
  image: undefined,
  color: undefined,
  size: undefined,
  placeholder: 'https://via.placeholder.com/50x50',
})

function placeholderHandler(event: Event) {
  const target = event.target as HTMLImageElement
  target.src = props.placeholder
}

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <div
    class="snack"
    :class="[props.white && 'is-white', props.size && `is-${props.size}`]"
  >
    <div
      v-if="props.icon"
      class="snack-media is-icon"
      :class="[props.color && `is-${props.color}`, props.solid && `is-solid`]"
    >
      <i
        v-if="isIconify"
        aria-hidden="true"
        class="iconify snack-icon"
        :data-icon="icon"
      ></i>
      <i v-else aria-hidden="true" class="snack-icon" :class="props.icon"></i>
    </div>
    <div v-else-if="props.image" class="snack-media">
      <img
        class="avatar"
        :src="props.image"
        alt=""
        @error.once="placeholderHandler"
      />
    </div>
    <span class="snack-text">{{ props.title }}</span>
    <span class="snack-action">
      <slot></slot>
    </span>
  </div>
</template>
