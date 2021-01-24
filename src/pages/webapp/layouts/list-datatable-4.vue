<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'List Datatable 4 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Datatable</h1>
      </div>

      <Toolbar />
    </div>

    <div class="datatable-toolbar is-webapp">
      <div class="field has-addons is-disabled">
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-download"></i>
            </span>
            <span>Download</span>
          </button>
        </p>
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-upload"></i>
            </span>
            <span>Update</span>
          </button>
        </p>
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
            <span>Remove</span>
          </button>
        </p>
      </div>

      <div class="buttons">
        <button class="button v-button is-primary is-elevated">
          <span class="icon">
            <i class="fas fa-upload"></i>
          </span>
          <span>Upload File</span>
        </button>
      </div>
    </div>

    <div class="page-content-inner is-webapp">
      <DatatableV4 />
    </div>
  </div>
</template>
