<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  activeTab: {
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
const tab = ref(props.activeTab)
</script>

<template>
  <div
    class="widget social-buttons-widget"
    :class="[props.straight && 'is-straight']"
  >
    <div class="social-buttons">
      <div
        v-for="(button, index) in props.buttons"
        :key="button.id"
        class="social-button"
      >
        <a
          class="inner-button is-facebook"
          :class="[
            tab === index && 'is-active',
            'is-' + button.network,
            props.rounded && 'is-rounded',
          ]"
          @click="tab = index"
        >
          <i aria-hidden="true" :class="button.icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>
