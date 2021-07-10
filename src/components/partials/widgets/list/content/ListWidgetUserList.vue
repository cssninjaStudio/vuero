<script setup lang="ts">
const props = defineProps({
  users: {
    type: Array,
    required: true,
    default: () => [],
  },
  squared: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <div
      v-for="user in props.users"
      :key="user.id"
      class="inner-list-item media-flex-center"
    >
      <V-Avatar :picture="user.picture" :squared="props.squared" />
      <div class="flex-meta is-light">
        <a href="#">{{ user.name }}</a>
        <span>{{ user.position }}</span>
      </div>
      <div class="flex-end">
        <a
          v-if="user.progress < 0"
          href="#"
          class="go-icon is-down"
          :data-content="user.progress + '%'"
        >
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="feather:chevron-right"
          ></i>
        </a>
        <a
          v-else
          href="#"
          class="go-icon is-up"
          :data-content="'+' + user.progress + '%'"
        >
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="feather:chevron-right"
          ></i>
        </a>
      </div>
    </div>
  </div>
</template>
