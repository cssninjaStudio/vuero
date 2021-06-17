<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  logo: {
    type: String,
  },
  name: {
    type: String,
  },
  openingCount: {
    type: String,
  },
  description: {
    type: String,
  },
})
</script>

<template>
  <div class="map-box-location">
    <div class="map-box-header">
      <V-Block
        :title="props.name"
        :subtitle="`Open until ${props.openingCount}`"
        center
      >
        <template #icon>
          <V-Avatar size="small" :picture="props.logo" />
        </template>
      </V-Block>
    </div>
    <div class="map-box-body">
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>
