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
    <VBlock
      v-for="topic in props.topics"
      :key="topic.id"
      center
      lighter
      class="inner-list-item"
    >
      <template #icon>
        <VIconBox :rounded="props.rounded" :color="topic.color">
          <i aria-hidden="true" class="iconify" :data-icon="topic.icon"></i>
        </VIconBox>
      </template>
      <template #action>
        <VAvatarStack v-if="topic.users" :avatars="topic.users" size="small" :limit="3" />
      </template>

      <a href="#">{{ topic.name }}</a>
      <span>{{ topic.category }}</span>
    </VBlock>
  </div>
</template>
