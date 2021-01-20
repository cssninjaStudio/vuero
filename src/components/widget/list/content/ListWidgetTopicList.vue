<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    topics: {
        type: Array,
        required: true,
        default: []
    },
    rounded: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
  <div>
    <div
      v-for="topic in topics"
      :key="topic.id"
      class="inner-list-item media-flex-center"
    >
      <IconBox :rounded="props.rounded" :color="topic.color">
        <i class="iconify" :data-icon="topic.icon"></i>
      </IconBox>
      <div class="flex-meta is-light">
        <a href="#">{{ topic.name }}</a>
        <span>{{ topic.category }}</span>
      </div>
      <div class="flex-end">
        <AvatarStack :avatars="topic.users" size="small" :limit="3" />
      </div>
    </div>
  </div>
</template>