<script setup lang="ts">
import { ref } from 'vue'

type TabId = 'all' | 'people' | 'records'
const activeTab = ref<TabId>('all')
</script>

<template>
  <div class="search-results-wrapper">
    <div class="search-results-header">
      <V-Control icon="feather:search">
        <input class="input" placeholder="Search again..." />
      </V-Control>

      <div class="search-info">
        <span>0 results found</span>
      </div>

      <div class="tabs-inner">
        <div class="tabs is-disabled">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a @click="activeTab = 'all'"><span>All</span></a>
            </li>
            <li :class="[activeTab === 'people' && 'is-active']">
              <a @click="activeTab = 'people'"><span>People</span></a>
            </li>
            <li :class="[activeTab === 'records' && 'is-active']">
              <a @click="activeTab = 'records'"><span>Records</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="search-results-body">
      <!--Search Placeholder -->
      <div class="page-placeholder">
        <div class="placeholder-content">
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-7.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-7-dark.svg"
            alt=""
          />
          <h3>We couldn't find any matching results.</h3>
          <p class="is-larger">
            Too bad. Looks like we couldn't find any matching results for the
            search terms you've entered. Please try different search terms or
            criteria.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_search.scss';
</style>
