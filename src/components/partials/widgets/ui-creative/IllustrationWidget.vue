<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    text?: string
    picture?: string
    badgeLeft?: string
    badgeRight?: string
    straight?: boolean
  }>(),
  {
    title: 'Illustration Widget',
    text: 'Lorem ipsum sit dolor amet is a dummy text',
    picture: undefined,
    badgeLeft: undefined,
    badgeRight: undefined,
  }
)
</script>

<template>
  <div class="widget illustration-widget" :class="[props.straight && 'is-straight']">
    <div class="img-container">
      <img class="main" :src="props.picture" alt="" />
      <img v-if="props.badgeLeft" class="badge badge-1" :src="props.badgeLeft" alt="" />
      <img v-if="props.badgeRight" class="badge badge-2" :src="props.badgeRight" alt="" />
    </div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.text }}</p>
  </div>
</template>
