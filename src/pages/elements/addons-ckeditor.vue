<script setup lang="ts">
import { useHead } from '@vueuse/head'
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { pageTitle } from '/@src/state/sidebarLayoutState'

import {
  editorData,
  editorConfig,
} from '/@src/data/documentation/ck-editor/editor-data'

const CKEditor = CKE.component

pageTitle.value = 'CKEditor'
useHead({
  title: 'CKEditor - Addons - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: { name: 'index' },
        },
        {
          label: 'Elements',
          to: { name: 'elements' },
        },
        {
          label: 'Addons',
        },
        {
          label: 'CKEditor',
          to: { name: 'elements-addons-ckeditor' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Simple Datatable-->
        <CKEditorBasicDocumentation />

        <div class="columns">
          <div class="column is-12 content">
            <CKEditor
              v-model="editorData"
              :editor="ClassicEditor"
              :config="editorConfig"
            >
            </CKEditor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
