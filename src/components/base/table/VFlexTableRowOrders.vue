<script setup lang="ts">
export type VFlexTableRowOrders = {
  rows: any[]
}
const props = defineProps<VFlexTableRowOrders>()
</script>

<template>
  <div v-for="row in props.rows" :key="row.id" class="flex-table-item">
    <div class="flex-table-cell is-media is-grow" data-th="">
      <VAvatar :picture="row.picture" size="medium" squared />
      <div>
        <span class="item-name dark-inverted is-font-alt is-weight-600">{{
          row.username
        }}</span>
        <span class="item-meta">
          <span>{{ row.orderId }}</span>
        </span>
      </div>
    </div>
    <div class="flex-table-cell" data-th="Date">
      <span class="light-text">{{ row.date }}</span>
    </div>
    <div class="flex-table-cell" data-th="Amount">
      <span class="dark-inverted is-weight-600">${{ row.amount }}</span>
    </div>
    <div class="flex-table-cell" data-th="Status">
      <VTag v-if="row.status === 'paid'" color="green" rounded label="Paid" />
      <VTag
        v-if="row.status === 'pending'"
        color="orange"
        rounded
        label="Pending"
      />
    </div>
    <div class="flex-table-cell" data-th="Tracking">
      <a v-if="row.tracking" class="action-link is-pushed-mobile">{{
        row.tracking
      }}</a>
      <span v-else class="light-text is-pushed-mobile">N/A</span>
    </div>
    <div class="flex-table-cell cell-end" data-th="Actions">
      <VButton class="is-pushed-mobile" dark-outlined>View Order</VButton>
    </div>
  </div>
</template>
