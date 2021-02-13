<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

type TabId = 'active' | 'closed'
const activeTab = ref<TabId>('active')

useHead({
  title: 'List Flex 3 - WebApp - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
  >
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
      <FlexListV3 class="is-webapp" :active-tab="activeTab" />
    </div>
  </div>
</template>
