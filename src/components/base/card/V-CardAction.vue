<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, onUpdated, ref, useContext } from 'vue'

type MediaCardRadius = 'regular' | 'smooth' | 'rounded'

const { slots } = useContext()

const hasDefaultSlot = ref(!!slots.default?.())

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: undefined,
  },
  avatar: {
    type: String,
    default: undefined,
  },
  badge: {
    type: String,
    default: undefined,
  },
  content: {
    type: String,
    default: undefined,
  },
  radius: {
    type: String as PropType<MediaCardRadius>,
    default: 'regular',
    validator: (value: MediaCardRadius) => {
      // The value must match one of these strings
      if (['regular', 'smooth', 'rounded'].indexOf(value) === -1) {
        console.warn(
          `V-CardAction: invalid "${value}" radius. Should be regular, smooth or rounded`
        )
        return false
      }

      return true
    },
  },
})

onUpdated(() => {
  hasDefaultSlot.value = !!slots.default?.()
})
</script>

<template>
  <div
    class="is-raised"
    :class="[
      radius === 'regular' && 's-card',
      radius === 'smooth' && 'r-card',
      radius === 'rounded' && 'l-card',
    ]"
  >
    <div class="card-head">
      <V-Block :title="title" :subtitle="subtitle" center>
        <template #icon>
          <V-Avatar :picture="avatar" :badge="badge" />
        </template>
        <template #action><slot name="action"></slot></template>
      </V-Block>
    </div>
    <div v-if="hasDefaultSlot" class="card-inner">
      <slot></slot>
    </div>
  </div>
</template>
