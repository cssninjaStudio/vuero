<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Widget Title',
  },
  actionLabel: {
    type: String,
    default: 'Add Item',
  },
  straight: {
    type: Boolean,
    default: false,
  },
  squared: {
    type: Boolean,
    default: false,
  },
  circled: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="stat-widget table-widget-v1" :class="[straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ title }}</h3>
      <button class="button v-button is-primary is-elevated">
        <span class="icon is-small">
          <i aria-hidden="true" class="fas fa-plus"></i>
        </span>
        <span>{{ actionLabel }}</span>
      </button>
    </div>

    <table class="table is-hoverable is-fullwidth">
      <tbody>
        <TableWidgetRowMembers
          :rows="data"
          :squared="squared"
          :circled="circled"
        />
      </tbody>
    </table>
  </div>
</template>
