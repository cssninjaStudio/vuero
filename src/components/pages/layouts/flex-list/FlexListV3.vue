<script setup lang="ts">
import { computed, ref } from 'vue'

import { classes } from '/@src/data/layouts/flex-list-v3'
import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'

const props = withDefaults(
  defineProps<{
    activeTab?: 'all' | 'saved'
  }>(),
  {
    activeTab: 'all',
  }
)

const filters = ref('')
const tab = ref(props.activeTab)

const filteredData = computed(() => {
  if (!filters.value) {
    return classes
  } else {
    return classes.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.category.match(new RegExp(filters.value, 'i')) ||
        item.skill.name.match(new RegExp(filters.value, 'i')) ||
        item.author.username.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-flex-toolbar is-reversed">
      <VControl icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
      </VControl>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[tab === 'all' && 'is-active']">
              <a @click="tab = 'all'"><span>All</span></a>
            </li>
            <li :class="[tab === 'saved' && 'is-active']">
              <a @click="tab = 'saved'"><span>Saved</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex-list-wrapper flex-list-v3">
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
            src="/@src/assets/illustrations/placeholders/search-4.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <!--Active Tab-->
      <div
        id="active-items-tab"
        class="tab-content"
        :class="[tab === 'all' && 'is-active']"
      >
        <div class="flex-table">
          <!--Table header-->
          <div
            class="flex-table-header"
            :class="[filteredData.length === 0 && 'is-hidden']"
          >
            <span class="is-grow-lg">Course</span>
            <span>Category</span>
            <span>Main Skill</span>
            <span>Difficulty</span>
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
                <div class="flex-table-cell is-media is-grow-lg">
                  <img
                    class="media"
                    :src="item.picture"
                    alt=""
                    @error.once="
                      (event) => useViaPlaceholderError(event, '150x110')
                    "
                  />
                  <div>
                    <span class="item-name dark-inverted">{{ item.name }}</span>
                    <div class="item-meta">
                      <div class="flex-media">
                        <VAvatar :picture="item.author.picture" size="small" />
                        <div class="meta">
                          <span>by {{ item.author.username }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-table-cell" data-th="Category">
                  <span class="light-text">{{ item.category }}</span>
                </div>
                <div class="flex-table-cell" data-th="Main Skill">
                  <i
                    aria-hidden="true"
                    class="cell-icon is-pushed-mobile"
                    :class="item.skill.icon"
                  ></i>
                  <span class="light-text no-push">{{ item.skill.name }}</span>
                </div>
                <div class="flex-table-cell" data-th="Difficulty">
                  <span class="dot-levels">
                    <i
                      class="fas fa-circle dot active"
                      aria-hidden="true"
                      :class="item.difficulty >= 1 ? 'active' : ''"
                    ></i>
                    <i
                      class="fas fa-circle dot"
                      aria-hidden="true"
                      :class="item.difficulty >= 2 ? 'active' : ''"
                    ></i>
                    <i
                      class="fas fa-circle dot"
                      aria-hidden="true"
                      :class="item.difficulty >= 3 ? 'active' : ''"
                    ></i>
                    <i
                      class="fas fa-circle dot"
                      aria-hidden="true"
                      :class="item.difficulty >= 4 ? 'active' : ''"
                    ></i>
                    <i
                      class="fas fa-circle dot"
                      aria-hidden="true"
                      :class="item.difficulty === 5 ? 'active' : ''"
                    ></i>
                  </span>
                </div>
                <div class="flex-table-cell cell-end" data-th="Actions">
                  <a
                    class="
                      button
                      v-button
                      has-dot
                      dark-outlined
                      is-pushed-mobile
                    "
                  >
                    Purchase
                    <i aria-hidden="true" class="fas fa-circle dot"></i> ${{
                      item.price
                    }}
                  </a>
                </div>
              </div>
            </transition-group>
          </div>
        </div>

        <!--Table Pagination-->
        <VFlexPagination
          v-if="filteredData.length > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        />
      </div>

      <!--inactive Tab-->
      <div
        id="inactive-items-tab"
        class="tab-content"
        :class="[tab === 'saved' && 'is-active']"
      >
        <!--Empty placeholder-->
        <VPlaceholderPage
          title="No saved courses."
          subtitle="Looks like you don't have any saved courses yet. You can add a
              course to your saved courses by visiting the course details and
              clicking on the bookmark button."
        >
          <template #image>
            <img
              class="light-image is-larger"
              src="/@src/assets/illustrations/placeholders/courses.svg"
              alt=""
            />
            <img
              class="dark-image is-larger"
              src="/@src/assets/illustrations/placeholders/courses-dark.svg"
              alt=""
            />
          </template>
        </VPlaceholderPage>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.has-top-nav {
  .flex-list-wrapper,
  .list-flex-toolbar {
    max-width: 880px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
