<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    picture?: string
    views?: string
  }>(),
  {
    title: 'A nice and short little movie',
    picture: 'https://via.placeholder.com/400x300',
    views: '',
  },
)

const { onceError } = useImageError()
</script>

<template>
  <div class="widget-content">
    <img
      :src="props.picture"
      alt=""
      @error.once="onceError($event, 400, 300)"
    >
    <div class="widget-meta">
      <VIcon
        icon="lucide:play-circle"
      />
      <h4>{{ props.title }}</h4>
      <span class="views">
        <VIcon
          icon="lucide:eye"
        />
        <span>{{ props.views }}</span>
      </span>
    </div>
  </div>
</template>
