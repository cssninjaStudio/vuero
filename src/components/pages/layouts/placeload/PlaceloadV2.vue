<script setup lang="ts">
import { ref } from 'vue'

const filters = ref('')
</script>

<template>
  <div>
    <div class="list-flex-toolbar flex-list-v1">
      <VField>
        <VControl icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </VControl>
      </VField>

      <VButtons>
        <VButton color="primary" icon="fas fa-plus" elevated> Add User </VButton>
      </VButtons>
    </div>

    <div class="flex-list-wrapper flex-list-v1">
      <VFlexTable rounded>
        <template #header>
          <div class="flex-table-header" data-filter-hide>
            <span class="is-grow">User</span>
            <span>Location</span>
            <span>Industry</span>
            <span>Status</span>
            <span>Relations</span>
            <span class="cell-end">Actions</span>
          </div>
        </template>

        <template #body>
          <div class="flex-list-inner">
            <!--Table item placeload-->
            <div v-for="key in 10" :key="key" class="flex-table-item">
              <VFlexTableCell :columns="{ media: true, grow: true }">
                <VPlaceloadAvatar size="medium" />

                <VPlaceloadText
                  :lines="2"
                  width="80%"
                  last-line-width="60%"
                  class="mx-2"
                />
              </VFlexTableCell>
              <VFlexTableCell>
                <VPlaceload class="mx-1" />
              </VFlexTableCell>
              <VFlexTableCell>
                <VPlaceload class="mx-1" />
              </VFlexTableCell>
              <VFlexTableCell>
                <VPlaceload class="mx-1" />
              </VFlexTableCell>
              <VFlexTableCell>
                <VAvatarStack class="is-pushed-mobile">
                  <VPlaceloadAvatar size="small" class="mx-1" />
                  <VPlaceloadAvatar size="small" class="mx-1" />
                  <VPlaceloadAvatar size="small" class="mx-1" />
                </VAvatarStack>
              </VFlexTableCell>
              <VFlexTableCell :column="{ align: 'end' }">
                <VPlaceload class="mx-1" />
              </VFlexTableCell>
            </div>
          </div>
        </template>
      </VFlexTable>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';
@import '../../../../scss/pages/lists/list-view-1';
</style>
