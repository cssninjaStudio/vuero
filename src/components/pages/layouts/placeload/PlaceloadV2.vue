<script setup lang="ts">
import { ref } from 'vue'

const filters = ref('')
</script>

<template>
  <div>
    <div class="list-flex-toolbar flex-list-v1">
      <V-Field>
        <V-Control icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </V-Control>
      </V-Field>

      <V-Buttons>
        <V-Button color="primary" icon="fas fa-plus" elevated>
          Add User
        </V-Button>
      </V-Buttons>
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
          <div class="flex-table-item" v-for="key in 10" :key="key">
            <div class="flex-table-cell is-media is-grow">
              <V-PlaceloadAvatar size="medium" />

              <V-PlaceloadText
                :lines="2"
                width="80%"
                last-line-width="60%"
                class="mx-2"
              />
            </div>
            <div class="flex-table-cell" data-th="Location">
              <V-Placeload class="mx-1" />
            </div>
            <div class="flex-table-cell" data-th="Industry">
              <V-Placeload class="mx-1" />
            </div>
            <div class="flex-table-cell" data-th="Status">
              <V-Placeload class="mx-1" />
            </div>
            <div class="flex-table-cell" data-th="Relations">
              <V-AvatarStack class="is-pushed-mobile">
                <V-PlaceloadAvatar size="small" class="mx-1" />
                <V-PlaceloadAvatar size="small" class="mx-1" />
                <V-PlaceloadAvatar size="small" class="mx-1" />
              </V-AvatarStack>
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <V-Placeload class="mx-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_list-view-1.scss';
</style>
