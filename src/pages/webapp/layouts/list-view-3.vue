<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

type TabId = 'active' | 'inactive'
const activeTab = ref<TabId>('active')

useHead({
  title: 'List View 3 - WebApp - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-webapp"
  >
    <div class="page-title has-text-centered">
      <div class="title-wrap">
        <h1 class="title is-4">List View</h1>
      </div>

      <Toolbar />
    </div>

    <div class="list-view-toolbar is-reversed">
      <div class="control has-icon">
        <input
          class="input custom-text-filter"
          placeholder="Search..."
          data-filter-target=".list-view-item"
        />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'active' && 'is-active']">
              <a @click="activeTab = 'active'"><span>Active</span></a>
            </li>
            <li :class="[activeTab === 'inactive' && 'is-active']">
              <a @click="activeTab = 'inactive'"><span>Inactive</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="page-content-inner">
      <ViewListV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
