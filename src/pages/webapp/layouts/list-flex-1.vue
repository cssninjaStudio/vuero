<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'List Flex 1 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Flex Lists</h1>
      </div>

      <Toolbar />
    </div>

    <div class="list-flex-toolbar is-webapp flex-list-v1">
      <div class="control has-icon">
        <input
          class="input custom-text-filter"
          placeholder="Search..."
          data-filter-target=".flex-table-item"
        />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="buttons">
        <button class="button v-button is-primary is-elevated">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>Add User</span>
        </button>
      </div>
    </div>

    <div class="page-content-inner is-webapp">
      <FlexListV1 class="is-webapp" />
    </div>
  </div>
</template>
