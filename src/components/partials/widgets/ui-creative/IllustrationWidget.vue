<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Illustration Widget',
  },
  text: {
    type: String,
    required: true,
    default: 'Lorem ipsum sit dolor amet is a dummy text',
  },
  picture: {
    type: String,
    required: true,
    default: '',
  },
  badgeLeft: {
    type: String,
    default: undefined,
  },
  badgeRight: {
    type: String,
    default: undefined,
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="widget illustration-widget"
    :class="[props.straight && 'is-straight']"
  >
    <div class="img-container">
      <img class="main" :src="props.picture" alt="" />
      <img
        v-if="props.badgeLeft"
        class="badge badge-1"
        :src="props.badgeLeft"
        alt=""
      />
      <img
        v-if="props.badgeRight"
        class="badge badge-2"
        :src="props.badgeRight"
        alt=""
      />
    </div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.text }}</p>
  </div>
</template>
