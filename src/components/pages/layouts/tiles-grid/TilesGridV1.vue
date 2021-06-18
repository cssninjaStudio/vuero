<script setup lang="ts">
import { computed, ref } from 'vue'

import { users } from '/@src/data/layouts/tile-grid-v1'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return users
  } else {
    return users.filter((item) => {
      return (
        item.username.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i')) ||
        item.position.match(new RegExp(filters.value, 'i')) ||
        item.badge.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

const valueSingle = ref(0)
const optionsSingle = [
  'All',
  'UI/UX Design',
  'Web Development',
  'Software Eng.',
  'Business',
]
</script>

<template>
  <div>
    <div class="tile-grid-toolbar">
      <V-Control icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
      </V-Control>

      <div class="buttons">
        <V-Field class="h-hidden-mobile">
          <V-Control>
            <Multiselect
              v-model="valueSingle"
              :options="optionsSingle"
              :max-height="145"
              placeholder="Select an option"
            />
          </V-Control>
        </V-Field>
        <V-Button color="primary" raised>
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus"></i>
          </span>
          <span>Add User</span>
        </V-Button>
      </div>
    </div>

    <div class="tile-grid tile-grid-v1">
      <!--List Empty Search Placeholder -->
      <V-PlaceholderPage
        :class="[filteredData.length !== 0 && 'is-hidden']"
        title="We couldn't find any matching results."
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-6.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-6-dark.svg"
            alt=""
          />
        </template>
      </V-PlaceholderPage>

      <!--Tile Grid v1-->
      <transition-group name="list" tag="div" class="columns is-multiline">
        <!--Grid item-->
        <div v-for="item in filteredData" :key="item.id" class="column is-4">
          <div class="tile-grid-item">
            <div class="tile-grid-item-inner">
              <V-Avatar
                :picture="item.avatar"
                :badge="item.badge"
                :color="item.color"
                :initials="item.initials"
                size="medium"
              />
              <div class="meta">
                <span class="dark-inverted">{{ item.username }}</span>
                <span>{{ item.position }}</span>
              </div>
              <UserCardDropdown />
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_tile-grid-v1.scss';
</style>
