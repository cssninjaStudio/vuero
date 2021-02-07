<script setup lang="ts">
import { ref, computed } from 'vue'

import { retails } from '/@src/data/layouts/view-list-v2'

type TabId = 'active' | 'inactive'
const activeTab = ref<TabId>('active')
const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return retails
  } else {
    return retails.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i')) ||
        ('parking'.match(new RegExp(filters.value, 'i')) &&
          item.comodities.parking) ||
        ('wifi'.match(new RegExp(filters.value, 'i')) &&
          item.comodities.wifi) ||
        ('heater'.match(new RegExp(filters.value, 'i')) &&
          item.comodities.heater) ||
        ('cleaning'.match(new RegExp(filters.value, 'i')) &&
          item.comodities.cleaning)
      )
    })
  }
})
</script>

<template>
  <div class="list-view-toolbar">
    <V-Field>
      <V-Control iconify="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
      </V-Control>
    </V-Field>

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
    <!--List-->
    <div class="list-view list-view-v2">
      <!--List Empty Search Placeholder -->
      <div
        :class="[filteredData.length !== 0 && 'is-hidden']"
        class="page-placeholder custom-text-filter-placeholder"
      >
        <div class="placeholder-content">
          <img
            class="light-image"
            src="/images/illustrations/placeholders/search-2.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/images/illustrations/placeholders/search-2-dark.svg"
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
        :class="[activeTab === 'active' && 'is-active']"
      >
        <div class="list-view-inner">
          <transition-group name="list-complete" tag="div">
            <div
              v-for="item in filteredData"
              :key="item.id"
              class="list-view-item"
            >
              <div class="list-view-item-inner">
                <img :src="item.picture" alt="" />
                <div class="meta-left">
                  <h3>
                    <span>{{ item.name }}</span>
                    <span class="rating">
                      <i
                        class="fas fa-star"
                        :class="[item.rating >= 1 && 'active']"
                      ></i>
                      <i
                        class="fas fa-star"
                        :class="[item.rating >= 2 && 'active']"
                      ></i>
                      <i
                        class="fas fa-star"
                        :class="[item.rating >= 3 && 'active']"
                      ></i>
                      <i
                        class="fas fa-star"
                        :class="[item.rating >= 4 && 'active']"
                      ></i>
                      <i
                        class="fas fa-star"
                        :class="[item.rating >= 5 && 'active']"
                      ></i>
                    </span>
                  </h3>
                  <p>
                    <i class="iconify" data-icon="feather:map-pin"></i>
                    <span>{{ item.location }}</span>
                  </p>
                  <span>
                    <span>
                      {{
                        item.details.rooms > 1
                          ? `${item.details.rooms} rooms`
                          : `${item.details.rooms} room`
                      }}
                    </span>
                    <i class="fas fa-circle icon-separator"></i>
                    <span>
                      {{
                        item.details.beds > 1
                          ? `${item.details.beds} beds`
                          : `${item.details.beds} bed`
                      }}
                    </span>
                    <i class="fas fa-circle icon-separator"></i>
                    <span>
                      {{
                        item.details.bathrooms > 1
                          ? `${item.details.bathrooms} bathrooms`
                          : `${item.details.bathrooms} bathroom`
                      }}
                    </span>
                  </span>

                  <div class="icon-list">
                    <span v-if="item.comodities.parking">
                      <i class="lnil lnil-car"></i>
                      <span>Parking</span>
                    </span>
                    <span v-if="item.comodities.wifi">
                      <i class="lnil lnil-signal"></i>
                      <span>Wifi</span>
                    </span>
                    <span v-if="item.comodities.heater">
                      <i class="lnil lnil-air-flow"></i>
                      <span>Heater</span>
                    </span>
                    <span v-if="item.comodities.cleaning">
                      <i class="lnil lnil-sun"></i>
                      <span>Cleaning</span>
                    </span>
                    <span
                      v-if="
                        item.comodities.other &&
                        item.comodities.otherThing &&
                        item.comodities.otherCoolThing &&
                        item.comodities.otherGreatCoolThing
                      "
                    >
                      <i class="lnil lnil-more"></i>
                      <span>4 more</span>
                    </span>
                    <span
                      v-else-if="
                        item.comodities.other &&
                        item.comodities.otherThing &&
                        item.comodities.otherCoolThing
                      "
                    >
                      <i class="lnil lnil-more"></i>
                      <span>3 more</span>
                    </span>
                    <span
                      v-else-if="
                        item.comodities.other && item.comodities.otherThing
                      "
                    >
                      <i class="lnil lnil-more"></i>
                      <span>2 more</span>
                    </span>
                    <span v-else-if="item.comodities.other">
                      <i class="lnil lnil-more"></i>
                      <span>1 more</span>
                    </span>
                  </div>
                </div>
                <div class="meta-right">
                  <div class="buttons">
                    <V-Button light>More Info</V-Button>
                    <V-Button color="primary" raised>Book Now</V-Button>
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
        :class="[activeTab === 'inactive' && 'is-active']"
      >
        <div class="list-view-inner">
          <!--Empty placeholder-->
          <div class="page-placeholder custom-text-filter-placeholder">
            <div class="placeholder-content">
              <img
                class="light-image"
                src="/images/illustrations/placeholders/having-coffee.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/images/illustrations/placeholders/having-coffee-dark.svg"
                alt=""
              />
              <h3>There are no inactive properties.</h3>
              <p class="is-larger">
                Looks like there are no inactive properties to display. You can
                disable and also enable a property from the property settings.
              </p>
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
