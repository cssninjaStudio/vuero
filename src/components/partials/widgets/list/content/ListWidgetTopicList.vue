<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    topics?: any[]
    rounded?: boolean
  }>(),
  {
    topics: () => [],
  }
)
</script>

<template>
  <div>
    <div
      v-for="topic in props.topics"
      :key="topic.id"
      class="inner-list-item media-flex-center"
    >
      <V-IconBox :rounded="props.rounded" :color="topic.color">
        <i aria-hidden="true" class="iconify" :data-icon="topic.icon"></i>
      </V-IconBox>
      <div class="flex-meta is-light">
        <a href="#">{{ topic.name }}</a>
        <span>{{ topic.category }}</span>
      </div>
      <div v-if="topic.users" class="flex-end">
        <V-AvatarStack :avatars="topic.users" size="small" :limit="3" />
      </div>
    </div>
  </div>
</template>
