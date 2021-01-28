<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
  separator: {
    type: String,
    default: '',
  },
  icons: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <nav
    class="breadcrumb"
    aria-label="breadcrumbs"
    :class="[`has-${separator}-separator`, align && `is-${align}`]"
  >
    <ul>
      <li v-for="item in items" :key="item.id">
        <a href="#">
          <span v-if="icons" class="icon is-small">
            <i class="iconify" :data-icon="item.icon"></i>
          </span>
          <span>{{ item.label }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
