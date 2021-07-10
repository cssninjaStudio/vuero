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
    <div class="flex-table-cell is-bold" data-th="Company">
      <span class="dark-text">{{ row.company }}</span>
    </div>
    <div class="flex-table-cell" data-th="Type">
      <span class="light-text">{{ row.type }}</span>
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
    <div class="flex-table-cell" data-th="Contacts">
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
