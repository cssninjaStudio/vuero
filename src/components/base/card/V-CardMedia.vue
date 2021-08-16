<script setup lang="ts">
import type { PropType } from 'vue'
import { ref, onUpdated, useSlots } from 'vue'

type MediaFormat = '4by3' | '16by9'

const slots = useSlots()

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
  image: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: 'https://via.placeholder.com/1280x960',
  },
  format: {
    type: String as PropType<MediaFormat>,
    default: '4by3',
    validator: (value: MediaFormat) => {
      // The value must match one of these strings
      if (['4by3', '16by9'].indexOf(value) === -1) {
        console.warn(
          `V-CardMedia: invalid "${value}" format. Should be 16by9 or 4by3`
        )
        return false
      }

      return true
    },
  },
  avatar: {
    type: String,
    default: undefined,
  },
  badge: {
    type: String,
    default: undefined,
  },
})

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
