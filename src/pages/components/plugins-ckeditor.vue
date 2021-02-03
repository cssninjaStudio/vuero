<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/activeSidebarState'

import {
  editorData,
  editorConfig,
} from '/@src/data/documentation/ck-editor/editor-data'

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - Plugins CKEditor - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">CKEditor</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }">
              <span class="icon is-small is-solo">
                <i class="iconify" data-icon="feather:home"></i>
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'elements' }">
              <span>Components</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Plugins</span>
            </a>
          </li>
          <li>
            <a>
              <span>CKEditor</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--Simple Datatable-->
          <CKEditorBasicDocumentation />

          <div class="columns">
            <div class="column is-12 content">
              <ckeditor
                v-model="editorData"
                :editor="ClassicEditor"
                :config="editorConfig"
              >
              </ckeditor>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
