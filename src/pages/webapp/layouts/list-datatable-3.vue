<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'List Datatable 3 - WebApp - Vuero',
})
</script>

<template>
  <div>
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
      <DatatableV3 />
    </div>
  </div>
</template>
