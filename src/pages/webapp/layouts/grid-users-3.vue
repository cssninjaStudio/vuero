<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

useHead({
  title: 'Grid Users 3 - WebApp - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
  >
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">User Grid</h1>
      </div>

      <Toolbar />
    </div>

    <div class="user-grid-toolbar is-reversed is-webapp">
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

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a @click="activeTab = 'all'"><span>All</span></a>
            </li>
            <li :class="[activeTab === 'team' && 'is-active']">
              <a @click="activeTab = 'team'"><span>Team</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="page-content-inner is-webapp">
      <UsersGridV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
