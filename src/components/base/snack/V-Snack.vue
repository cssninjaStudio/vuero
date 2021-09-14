<script setup lang="ts">
import { computed } from 'vue'

export type SnackColor = 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type SnackSize = 'small'

const props = withDefaults(
  defineProps<{
    title: string
    icon?: string
    image?: string
    placeholder?: string
    color?: SnackColor
    size?: SnackSize
    solid?: boolean
    white?: boolean
  }>(),
  {
    icon: undefined,
    image: undefined,
    color: undefined,
    size: undefined,
    placeholder: 'https://via.placeholder.com/50x50',
  }
)

function placeholderHandler(event: Event) {
  const target = event.target as HTMLImageElement
  target.src = props.placeholder
}

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
})
</script>

<template>
  <div class="snack" :class="[white && 'is-white', size && `is-${size}`]">
    <div
      v-if="icon"
      class="snack-media is-icon"
      :class="[color && `is-${color}`, solid && `is-solid`]"
    >
      <i
        v-if="isIconify"
        aria-hidden="true"
        class="iconify snack-icon"
        :data-icon="icon"
      ></i>
      <i v-else aria-hidden="true" class="snack-icon" :class="icon"></i>
    </div>
    <div v-else-if="image" class="snack-media">
      <img
        class="avatar"
        :src="image"
        alt=""
        @error.once="placeholderHandler"
      />
    </div>
    <span class="snack-text">{{ title }}</span>
    <span class="snack-action">
      <slot></slot>
    </span>
  </div>
</template>
