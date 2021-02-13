<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'List Datatable 1 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="datatable-toolbar is-webapp">
      <div class="field has-addons is-disabled">
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-check"></i>
            </span>
            <span>Promote</span>
          </button>
        </p>
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
            <span>Delete</span>
          </button>
        </p>
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-arrow-right"></i>
            </span>
            <span>Transfer</span>
          </button>
        </p>
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
      <DatatableV1 />
    </div>
  </div>
</template>
