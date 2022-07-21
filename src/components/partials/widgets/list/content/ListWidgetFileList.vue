<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    files?: any[]
  }>(),
  {
    files: () => [],
  }
)
</script>

<template>
  <div>
    <VBlock
      v-for="file in props.files"
      :key="file.id"
      center
      lighter
      class="inner-list-item"
    >
      <template #icon>
        <img class="image-icon" :src="file.icon" alt="" />
      </template>
      <template #action>
        <ListWidgetFileDropdown />
      </template>

      <a href="#">{{ file.name }}</a>
      <span>{{ file.type }}</span>
    </VBlock>
  </div>
</template>

<style lang="scss">
.list-widget {
  .image-icon {
    height: 40px;
    width: 40px;
  }
}
</style>
