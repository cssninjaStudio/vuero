<script setup lang="ts">
const props = defineProps({
  rows: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div v-for="row in props.rows" :key="row.id" class="flex-table-item">
    <div class="flex-table-cell is-media is-grow" data-th="User">
      <V-Avatar size="medium" :picture="row.picture" :badge="row.badge" />
      <div>
        <span class="item-name">{{ row.name }}</span>
        <span class="item-meta">
          <span>{{ row.position }}</span>
        </span>
      </div>
    </div>
    <div class="flex-table-cell" data-th="Location">
      <span class="light-text">{{ row.location }}</span>
    </div>
    <div class="flex-table-cell" data-th="Industry">
      <span class="light-text">{{ row.industry }}</span>
    </div>
    <div class="flex-table-cell" data-th="Status">
      <span
        class="tag is-rounded"
        :class="[
          row.status === 'Active' && 'is-success',
          row.status === 'Disabled' && '',
          row.status === 'New' && 'is-info',
          row.status === 'Suspended' && 'is-orange',
        ]"
        >{{ row.status }}</span
      >
    </div>
    <div class="flex-table-cell" data-th="Relations">
      <V-AvatarStack
        class="is-pushed-mobile"
        size="small"
        :avatars="row.contacts"
        :limit="3"
      />
    </div>
    <div class="flex-table-cell cell-end" data-th="Actions">
      <FlexTableDropdown />
    </div>
  </div>
</template>
