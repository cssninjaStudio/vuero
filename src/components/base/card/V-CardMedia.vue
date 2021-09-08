<script setup lang="ts">
import { ref, onUpdated, useSlots } from 'vue'

export type MediaFormat = '4by3' | '16by9'

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    image?: string
    avatar?: string
    badge?: string
    placeholder?: string
    format?: MediaFormat
  }>(),
  {
    subtitle: undefined,
    image: undefined,
    avatar: undefined,
    badge: undefined,
    placeholder: 'https://via.placeholder.com/1280x960',
    format: '4by3',
  }
)

const slots = useSlots()
const hasDefaultSlot = ref(!!slots.default?.())

onUpdated(() => {
  hasDefaultSlot.value = !!slots.default?.()
})
</script>

<template>
  <div class="card v-card">
    <div v-if="props.image" class="card-image">
      <figure
        class="image is-4by3"
        :class="[props.format && `is-${props.format}`]"
      >
        <img
          :src="image"
          alt=""
          @error.once="$event.target.src = props.placeholder"
        />
      </figure>
    </div>
    <div class="card-content">
      <V-Block :title="props.title" :subtitle="props.subtitle" center narrow>
        <template #icon>
          <V-Avatar
            v-if="props.avatar"
            :picture="props.avatar"
            :badge="props.badge"
            size="medium"
          />
        </template>
      </V-Block>

      <div v-if="hasDefaultSlot" class="inner-content pt-5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
