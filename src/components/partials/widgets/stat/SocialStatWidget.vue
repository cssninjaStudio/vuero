<script setup lang="ts">
const props = defineProps<{
  icon: string
  value: string
  straight?: boolean
  squared?: boolean
  colored?: boolean
}>()
</script>

<template>
  <div
    class="stat-widget followers-stat-widget-v1"
    :class="[props.straight && 'is-straight']"
  >
    <div class="follow-block">
      <div
        class="follow-icon"
        :class="[props.squared && 'is-squared', props.colored && 'is-primary']"
      >
        <i aria-hidden="true" :class="props.icon"></i>
      </div>
      <div class="follow-count">
        <span class="dark-inverted">{{ props.value }} Followers</span>
        <span>Based on your latest stats</span>
      </div>
      <a href="#" class="go-icon">
        <i
          aria-hidden="true"
          class="iconify"
          data-icon="feather:chevron-right"
        ></i>
      </a>
    </div>
  </div>
</template>
