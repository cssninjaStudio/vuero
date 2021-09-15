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
        <VButton color="primary" icon="fas fa-plus" elevated>
          Add User
        </VButton>
      </VButtons>
    </div>

    <div class="flex-list-wrapper flex-list-v1">
      <div class="flex-table">
        <!--Table header-->
        <div class="flex-table-header" data-filter-hide>
          <span class="is-grow">User</span>
          <span>Location</span>
          <span>Industry</span>
          <span>Status</span>
          <span>Relations</span>
          <span class="cell-end">Actions</span>
        </div>

        <div class="flex-list-inner">
          <!--Table item placeload-->
          <div v-for="key in 10" :key="key" class="flex-table-item">
            <div class="flex-table-cell is-media is-grow">
              <VPlaceloadAvatar size="medium" />

              <VPlaceloadText
                :lines="2"
                width="80%"
                last-line-width="60%"
                class="mx-2"
              />
            </div>
            <div class="flex-table-cell" data-th="Location">
              <VPlaceload class="mx-1" />
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <VPlaceload class="mx-1" />
            </div>
            <div class="flex-table-cell" data-th="Status">
              <VPlaceload class="mx-1" />
            </div>
            <div class="flex-table-cell" data-th="Relations">
              <VAvatarStack class="is-pushed-mobile">
                <VPlaceloadAvatar size="small" class="mx-1" />
                <VPlaceloadAvatar size="small" class="mx-1" />
                <VPlaceloadAvatar size="small" class="mx-1" />
              </VAvatarStack>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <VPlaceload class="mx-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_list-view-1.scss';
</style>
