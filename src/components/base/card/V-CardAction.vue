<script setup lang="ts">
import { onUpdated, ref, useSlots } from 'vue'

export type MediaCardRadius = 'regular' | 'smooth' | 'rounded'

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    avatar?: string
    badge?: string
    content?: string
    radius?: MediaCardRadius
  }>(),
  {
    subtitle: undefined,
    avatar: undefined,
    badge: undefined,
    content: undefined,
    radius: 'regular',
  }
)

const slots = useSlots()
const hasDefaultSlot = ref(!!slots.default?.())

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
