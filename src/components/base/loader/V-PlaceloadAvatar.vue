<script lang="ts">
const CssUnitRe =
  /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/
</script>

<script setup lang="ts">
import type { PropType } from 'vue'

type PlaceloadAvatarSize =
  | undefined
  | 'small'
  | 'medium'
  | 'large'
  | 'big'
  | 'xl'
type PlaceloadRoundedSize = 'full' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = defineProps({
  size: {
    type: String as PropType<PlaceloadAvatarSize>,
    default: undefined,
    validator: (value: PlaceloadAvatarSize) => {
      // The value must match one of these strings
      if (
        [undefined, 'small', 'medium', 'large', 'big', 'xl'].indexOf(value) ===
        -1
      ) {
        console.warn(
          `V-PlaceloadAvatar: invalid "${value}" size. Should be small, medium, large, big, xl or undefined`
        )
        return false
      }

      return true
    },
  },
  rounded: {
    type: String as PropType<PlaceloadRoundedSize>,
    default: 'full',
    validator: (value: PlaceloadRoundedSize) => {
      // The value must match one of these strings
      if (['full', 'xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) === -1) {
        console.warn(
          `V-PlaceloadAvatar: invalid "${value}" rounded. Should be xs, sm, md, lg, xl or full`
        )
        return false
      }

      return true
    },
  },
  centered: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
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
