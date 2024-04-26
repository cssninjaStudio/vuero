<script setup lang="ts">
const props = defineProps<{
  picture: string
  badge: string
  username: string
  straight?: boolean
}>()

const { onceError } = useImageError()
</script>

<template>
  <div
    class="widget call-widget"
    :class="[props.straight && 'is-straight']"
  >
    <div class="img-container">
      <img
        class="main"
        :src="props.picture"
        alt=""
      >
      <img
        class="badge"
        :src="props.badge"
        alt=""
        @error.once="onceError($event, 150)"
      >
    </div>
    <h3>Call {{ props.username }}?</h3>
    <div class="actions">
      <a class="action">
        <VIcon
          icon="lucide:message-square"
        />
      </a>
      <a class="action">
        <VIcon
          icon="lucide:phone"
        />
      </a>
      <a class="action">
        <VIcon
          icon="lucide:video"
        />
      </a>
    </div>
  </div>
</template>
