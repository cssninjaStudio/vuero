<script setup lang="ts">
import { onUpdated, ref, useSlots } from 'vue'

export type VCardActionRadius = 'regular' | 'smooth' | 'rounded'
export interface VCardActionProps {
  title: string
  subtitle?: string
  avatar?: string
  badge?: string
  content?: string
  radius?: VCardActionRadius
}

const props = withDefaults(defineProps<VCardActionProps>(), {
  subtitle: undefined,
  avatar: undefined,
  badge: undefined,
  content: undefined,
  radius: 'regular',
})

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
      props.radius === 'regular' && 's-card',
      props.radius === 'smooth' && 'r-card',
      props.radius === 'rounded' && 'l-card',
    ]"
  >
    <div class="card-head">
      <VBlock :title="props.title" :subtitle="props.subtitle" center>
        <template #icon>
          <VAvatar :picture="props.avatar" :badge="props.badge" />
        </template>
        <template #action><slot name="action"></slot></template>
      </VBlock>
    </div>
    <div v-if="hasDefaultSlot" class="card-inner">
      <slot></slot>
    </div>
  </div>
</template>
