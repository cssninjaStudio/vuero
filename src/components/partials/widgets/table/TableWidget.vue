<script setup lang="ts">
const props = defineProps({
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
  <div
    class="stat-widget table-widget-v1"
    :class="[props.straight && 'is-straight']"
  >
    <div class="widget-head">
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <button class="button v-button is-primary is-elevated">
        <span class="icon is-small">
          <i aria-hidden="true" class="fas fa-plus"></i>
        </span>
        <span>{{ props.actionLabel }}</span>
      </button>
    </div>

    <table class="table is-hoverable is-fullwidth">
      <tbody>
        <TableWidgetRowMembers
          :rows="props.data"
          :squared="props.squared"
          :circled="props.circled"
        />
      </tbody>
    </table>
  </div>
</template>
