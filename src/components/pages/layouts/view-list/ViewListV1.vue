<script setup lang="ts">
import { computed, ref } from 'vue'

import type { VTagColor } from '/@src/components/base/tags/VTag.vue'
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import * as listData from '/@src/data/layouts/view-list-v1'

export interface UserData extends VAvatarProps {
  name: string
  location: string
  role: string
  roleColor: VTagColor
  medias: {
    avatar: string
    flag: string
  }
  stats: {
    projects: number
    replies: number
    posts: number
  }
  teams: VAvatarProps[]
}

const users = listData.users as UserData[]

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return users
  } else {
    return users.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-view-toolbar">
      <VField>
        <VControl icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </VControl>
      </VField>

      <div class="list-info">
        <span v-if="filteredData.length === 1">1 record found</span>
        <span v-else>{{ filteredData.length }} records found</span>
      </div>

      <div class="buttons">
        <VButton color="primary" icon="fas fa-check" elevated>
          Approve
        </VButton>
      </div>
    </div>

    <div class="page-content-inner">
      <!--List-->
      <div class="list-view list-view-v1">
        <!--List Empty Search Placeholder -->
        <VPlaceholderPage
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
              src="/@src/assets/illustrations/placeholders/search-1.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/search-1-dark.svg"
              alt=""
            />
          </template>
        </VPlaceholderPage>

        <div class="list-view-inner">
          <!--Item-->
          <transition-group name="list-complete" tag="div">
            <div
              v-for="(item, key) in filteredData"
              :key="key"
              class="list-view-item"
            >
              <div class="list-view-item-inner">
                <VAvatar
                  :picture="item.medias.avatar"
                  size="large"
                  :badge="item.medias.flag"
                />
                <div class="meta-left">
                  <h3>{{ item.name }}</h3>
                  <span>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:map-pin"
                    ></i>
                    <span>{{ item.location }}</span>
                  </span>
                </div>
                <div class="meta-right">
                  <div class="tags">
                    <VTag
                      :label="item.role"
                      :color="item.roleColor"
                      rounded
                      elevated
                    />
                  </div>

                  <div class="stats">
                    <div class="stat">
                      <span>{{ item.stats.projects }}</span>
                      <span>Projects</span>
                    </div>
                    <div class="separator"></div>
                    <div class="stat">
                      <span>{{ item.stats.replies }}</span>
                      <span>Replies</span>
                    </div>
                    <div class="separator"></div>
                    <div class="stat">
                      <span>{{ item.stats.posts }}</span>
                      <span>Posts</span>
                    </div>
                  </div>

                  <div class="network">
                    <VAvatarStack
                      :avatars="item.teams"
                      :limit="3"
                      size="small"
                    />
                    <span>in Team</span>
                  </div>

                  <!--Dropdown-->
                  <ListViewV1Dropdown />
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <VFlexPagination
        v-if="filteredData.length > 5"
        :item-per-page="10"
        :total-items="873"
        :current-page="42"
        :max-links-displayed="5"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_list-view-1.scss';
</style>
