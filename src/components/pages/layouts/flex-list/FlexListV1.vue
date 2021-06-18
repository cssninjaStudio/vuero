<script setup lang="ts">
import { computed, ref } from 'vue'

import { users } from '/@src/data/layouts/flex-list-v1'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return users
  } else {
    return users.filter((item) => {
      return (
        item.username.match(new RegExp(filters.value, 'i')) ||
        item.position.match(new RegExp(filters.value, 'i')) ||
        item.industry.match(new RegExp(filters.value, 'i')) ||
        item.status.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-flex-toolbar flex-list-v1">
      <V-Field>
        <V-Control icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </V-Control>
      </V-Field>

      <V-Buttons>
        <V-Button color="primary" icon="fas fa-plus" elevated>
          Add User
        </V-Button>
      </V-Buttons>
    </div>

    <div class="page-content-inner">
      <div class="flex-list-wrapper flex-list-v1">
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
              src="/@src/assets/illustrations/placeholders/search-4.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
              alt=""
            />
          </template>
        </V-PlaceholderPage>

        <div class="flex-table">
          <!--Table header-->
          <div
            class="flex-table-header"
            :class="[filteredData.length === 0 && 'is-hidden']"
          >
            <span class="is-grow">User</span>
            <span>Location</span>
            <span>Industry</span>
            <span>Status</span>
            <span>Relations</span>
            <span class="cell-end">Actions</span>
          </div>

          <div class="flex-list-inner">
            <transition-group name="list" tag="div">
              <!--Table item-->
              <div
                v-for="item in filteredData"
                :key="item.id"
                class="flex-table-item"
              >
                <div class="flex-table-cell is-media is-grow">
                  <V-Avatar
                    :picture="item.picture"
                    :badge="item.badge"
                    :color="item.color"
                    :initials="item.initials"
                    size="medium"
                  />
                  <div>
                    <span class="item-name dark-inverted">{{
                      item.username
                    }}</span>
                    <span class="item-meta">
                      <span>{{ item.position }}</span>
                    </span>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Location">
                  <span class="light-text">{{ item.location }}</span>
                </div>
                <div class="flex-table-cell" data-th="Industry">
                  <span class="light-text">{{ item.industry }}</span>
                </div>
                <div class="flex-table-cell" data-th="Status">
                  <span
                    v-if="item.status === 'Online'"
                    class="tag is-success is-rounded"
                    >{{ item.status }}</span
                  >
                  <span
                    v-if="item.status === 'Working'"
                    class="tag is-info is-rounded"
                    >{{ item.status }}</span
                  >
                  <span
                    v-if="item.status === 'Suspended'"
                    class="tag is-danger is-rounded"
                    >{{ item.status }}</span
                  >
                  <span
                    v-if="item.status === 'Offline'"
                    class="tag is-rounded"
                    >{{ item.status }}</span
                  >
                </div>
                <div class="flex-table-cell" data-th="Relations">
                  <V-AvatarStack
                    :avatars="item.contacts"
                    size="small"
                    :limit="3"
                    class="is-pushed-mobile"
                  />
                </div>
                <div class="flex-table-cell cell-end" data-th="Actions">
                  <FlexTableDropdown />
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <!--Table Pagination-->
        <V-FlexPagination
          v-if="filteredData.length > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';

.has-top-nav {
  .flex-list-wrapper,
  .list-flex-toolbar {
    max-width: 880px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
