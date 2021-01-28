<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'List Widget',
  },
  labels: {
    type: Array,
    default: ['Recent', 'Popular'],
  },
  straight: {
    type: Boolean,
    default: false,
  },
  toggled: {
    type: Boolean,
    default: false,
  },
})

let state = ref(props.toggled)

const toggleTabs = () => {
  state.value = !state.value
}
</script>

<template>
  <div class="list-widget tabbed-widget" :class="[straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ title }}</h3>
      <div class="tabbed-controls">
        <a
          class="tabbed-control"
          :class="[!state && 'is-active']"
          @click="toggleTabs"
        >
          <span>{{ labels[0] }}</span>
        </a>
        <a
          class="tabbed-control"
          :class="[state && 'is-active']"
          @click="toggleTabs"
        >
          <span>{{ labels[1] }}</span>
        </a>
        <div class="tabbed-naver"></div>
      </div>
    </div>

    <div class="inner-list-wrapper" :class="[!state && 'is-active']">
      <div class="inner-list">
        <slot name="tab1"></slot>
      </div>
    </div>

    <div class="inner-list-wrapper" :class="[state && 'is-active']">
      <div class="inner-list">
        <slot name="tab2"></slot>
      </div>
    </div>
  </div>
</template>
