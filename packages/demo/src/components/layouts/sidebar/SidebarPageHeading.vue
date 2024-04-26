<script setup lang="ts">
const props = defineProps<{
  open?: boolean
}>()
const emits = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <div class="page-title has-text-centered">
    <div
      class="vuero-hamburger nav-trigger push-resize"
      tabindex="0"
      role="button"
      @keydown.enter.prevent="() => emits('toggle')"
      @click="() => emits('toggle')"
    >
      <span class="menu-toggle has-chevron">
        <span
          :class="[props.open && 'active']"
          class="icon-box-toggle"
        >
          <span class="rotate">
            <i
              aria-hidden="true"
              class="icon-line-top"
            />
            <i
              aria-hidden="true"
              class="icon-line-center"
            />
            <i
              aria-hidden="true"
              class="icon-line-bottom"
            />
          </span>
        </span>
      </span>
    </div>

    <div class="title-wrap">
      <h1 class="title is-4">
        <slot />
      </h1>
    </div>

    <div v-if="'toolbar' in $slots" class="toolbar desktop-toolbar">
      <slot name="toolbar" />
    </div>
  </div>
</template>
