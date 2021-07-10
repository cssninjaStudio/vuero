<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  squared: {
    type: Boolean,
    default: false,
  },
  colored: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="icon-timeline">
    <div v-for="item in props.items" :key="item.id" class="timeline-item">
      <div
        class="timeline-icon"
        :class="[
          props.squared && 'is-squared',
          props.colored && 'is-' + item.color,
        ]"
      >
        <img
          v-if="item.picture"
          class="avatar"
          :src="item.picture"
          alt=""
          @error.once="
            $event.target.src = 'https://via.placeholder.com/150x150'
          "
        />
        <i v-else aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
      </div>
      <div class="timeline-content">
        <p>{{ item.title }}</p>
        <span>{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>
