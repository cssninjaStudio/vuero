<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Grid Cards 4 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Card Grid</h1>
      </div>

      <Toolbar />
    </div>

    <div class="card-grid-toolbar is-webapp">
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
                    <input type="radio" name="posts_filter" />
                    <div class="option-meta">
                      <span>Recent Posts</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="posts_filter" />
                    <div class="option-meta">
                      <span>Older Posts</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="posts_filter" />
                    <div class="option-meta">
                      <span>Popular Posts</span>
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
          <span>New Post</span>
        </button>
      </div>
    </div>

    <div class="page-content-inner is-webapp">
      <CardsGridV4 />
    </div>
  </div>
</template>
