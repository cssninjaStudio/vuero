<script setup lang="ts">
import { computed, ref } from 'vue'

import { offers } from '/@src/data/layouts/view-list-v3'

type TabId = 'all' | 'saved'
const activeTab = ref<TabId>('all')
const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return offers
  } else {
    return offers.filter((item) => {
      return (
        item.logo.match(new RegExp(filters.value, 'i')) ||
        item.title.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i')) ||
        item.duration.match(new RegExp(filters.value, 'i')) ||
        item.requirements.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-view-toolbar is-reversed">
      <V-Control iconify="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
          data-filter-target=".list-view-item"
        />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </V-Control>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a @click="activeTab = 'all'"><span>All</span></a>
            </li>
            <li :class="[activeTab === 'saved' && 'is-active']">
              <a @click="activeTab = 'saved'"><span>Saved</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="page-content-inner">
      <!--List-->
      <div class="list-view list-view-v3">
        <!--List Empty Search Placeholder -->
        <div
          class="page-placeholder custom-text-filter-placeholder"
          :class="[filteredData.length !== 0 && 'is-hidden']"
        >
          <div class="placeholder-content">
            <img
              class="light-image"
              src="/images/illustrations/placeholders/search-3.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/images/illustrations/placeholders/search-3-dark.svg"
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

        <!--Active Tab-->
        <div
          id="active-items-tab"
          class="tab-content"
          :class="[activeTab === 'all' && 'is-active']"
        >
          <div class="list-view-inner">
            <transition-group name="list-complete" tag="div">
              <!--Item-->
              <div
                v-for="item in filteredData"
                :key="item.id"
                class="list-view-item"
              >
                <div class="list-view-item-inner">
                  <img
                    class="avatar"
                    :src="item.logo"
                    alt=""
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
                    "
                  />
                  <div class="meta-left">
                    <h3>
                      {{ item.title }}
                    </h3>
                    <span>
                      <i class="iconify" data-icon="feather:map-pin"></i>
                      <span>{{ item.location }}</span>
                      <i class="fas fa-circle icon-separator"></i>
                      <i class="iconify" data-icon="feather:clock"></i>
                      <span>{{ item.duration }}</span>
                      <i class="fas fa-circle icon-separator"></i>
                      <i class="iconify" data-icon="feather:check-circle"></i>
                      <span>{{ item.requirements }}</span>
                    </span>
                  </div>
                  <div class="meta-right">
                    <div class="buttons">
                      <V-Button color="primary" outlined raised>
                        Apply Now
                      </V-Button>

                      <V-IconButton
                        iconify="feather:bookmark"
                        class="hint--bubble hint--primary hint--top"
                        data-hint="Save"
                        light
                        circle
                      />
                    </div>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>

          <V-FlexPagination
            v-if="filteredData.length > 5"
            :item-per-page="10"
            :total-items="873"
            :current-page="42"
            :max-links-displayed="7"
          />
        </div>

        <!--Inactive Tab-->
        <div
          id="inactive-items-tab"
          class="tab-content"
          :class="[activeTab === 'saved' && 'is-active']"
        >
          <div class="list-view-inner">
            <!--Empty placeholder-->
            <div
              class="page-placeholder custom-text-filter-placeholder"
              data-filter-hide
            >
              <div class="placeholder-content">
                <img
                  class="light-image"
                  src="/images/illustrations/placeholders/thinking-canvas.svg"
                  alt=""
                />
                <img
                  class="dark-image"
                  src="/images/illustrations/placeholders/thinking-canvas-dark.svg"
                  alt=""
                />
                <h3>No saved jobs.</h3>
                <p class="">
                  Looks like you don't have any saved jobs for the moment. It's
                  also possible that some of your saved items expired
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../assets/scss/abstracts/_variables.scss';
@import '../../../assets/scss/abstracts/_mixins.scss';
@import '../../../assets/scss/pages/lists/_list-view.scss';
</style>
