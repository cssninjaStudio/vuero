<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  content: {
    type: String,
    default: 'Get familiar with Vuero components. Code examples included.',
  },
})
</script>

<template>
  <div class="hub-card">
    <div class="hub-card-body">
      <div class="inner-content">
        <h3 class="title is-5 is-narrow is-thin">{{ props.title }}</h3>
        <p class="light-text">
          {{ props.content }}
        </p>
      </div>
      <slot name="icon"></slot>
    </div>
    <div class="hub-card-foot">
      <slot></slot>
    </div>
  </div>
</template>
