<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

const activeTab = ref<'active' | 'closed'>('active')

useHead({
  title: 'List Flex 2 - WebApp - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
  >
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Flex Lists</h1>
      </div>

      <Toolbar />
    </div>

    <div class="list-flex-toolbar is-reversed is-webapp flex-list-v2">
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

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'active' && 'is-active']">
              <a @click="activeTab = 'active'"><span>Active</span></a>
            </li>
            <li :class="[activeTab === 'closed' && 'is-active']">
              <a @click="activeTab = 'closed'"><span>Closed</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="page-content-inner is-webapp">
      <FlexListV2 class="is-webapp" :active-tab="activeTab" />
    </div>
  </div>
</template>
