<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'A nice and short little movie',
  },
  picture: {
    type: String,
    required: true,
    default: 'https://via.placeholder.com/400x300',
  },
  views: {
    type: String,
    required: true,
    default: '',
  },
})
</script>

<template>
  <div class="widget-content">
    <img
      :src="props.picture"
      alt=""
      @error.once="$event.target.src = 'https://via.placeholder.com/400x300'"
    />
    <div class="widget-meta">
      <i aria-hidden="true" class="iconify" data-icon="feather:play-circle"></i>
      <h4>{{ props.title }}</h4>
      <span class="views">
        <i aria-hidden="true" class="iconify" data-icon="feather:eye"></i>
        <span>{{ props.views }}</span>
      </span>
    </div>
  </div>
</template>
