<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  currentTab: {
    type: Number,
    default: 0,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="widget social-buttons-widget"
    :class="[straight && 'is-straight']"
  >
    <div class="social-buttons">
      <div
        v-for="(button, index) in buttons"
        :key="button.id"
        class="social-button"
      >
        <a
          class="inner-button is-facebook"
          :class="[
            currentTab === index && 'is-active',
            'is-' + button.network,
            rounded && 'is-rounded',
          ]"
          @click="currentTab = index"
        >
          <i aria-hidden="true" :class="button.icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>
