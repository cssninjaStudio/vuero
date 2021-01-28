<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Grid Users 2 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">User Grid</h1>
      </div>

      <Toolbar />
    </div>

    <div class="user-grid-toolbar is-webapp">
      <div class="control has-icon">
        <input
          class="input custom-text-filter"
          placeholder="Search..."
          data-filter-target=".column"
        />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="buttons">
        <div class="field h-hidden-mobile">
          <div class="control">
            <div class="h-select">
              <div class="select-box">
                <span>Filter</span>
              </div>
              <div class="select-icon">
                <i class="iconify" data-icon="feather:chevron-down"></i>
              </div>
              <div class="select-drop has-slimscroll-sm">
                <div class="drop-inner">
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>UI/UX Design</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Web Development</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Software Engineering</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Business</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Product Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="button v-button is-primary is-raised">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>Add User</span>
        </button>
      </div>
    </div>

    <div class="page-content-inner is-webapp">
      <UsersGridV2 />
    </div>
  </div>
</template>
