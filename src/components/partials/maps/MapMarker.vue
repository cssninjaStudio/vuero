<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    logo?: string
    name?: string
    description?: string
    openingCount?: string
  }>(),
  {
    logo: undefined,
    name: undefined,
    description: undefined,
    openingCount: undefined,
  }
)
</script>

<template>
  <div class="map-box-location">
    <div class="map-box-header">
      <VBlock :title="props.name" :subtitle="`Open until ${props.openingCount}`" center>
        <template #icon>
          <VAvatar size="small" :picture="props.logo" />
        </template>
      </VBlock>
    </div>
    <div class="map-box-body">
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>
