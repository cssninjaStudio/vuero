<script setup lang="ts">
const props = defineProps({
  logo: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  openingCount: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
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
