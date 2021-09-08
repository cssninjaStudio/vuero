<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    data: any[]
    title?: string
    actionLabel?: string
    straight?: boolean
    squared?: boolean
    circled?: boolean
  }>(),
  {
    title: 'Widget Title',
    actionLabel: 'Add Item',
  }
)
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
