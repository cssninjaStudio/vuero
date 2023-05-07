<script setup lang="ts">
import { classes } from '/@src/data/layouts/flex-list-v3'
import { onceImageErrored } from '/@src/utils/via-placeholder'

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

const columns = {
  picture: {
    label: 'Course',
    grow: true,
  },
  category: 'Category',
  skill: 'Main Skill',
  difficulty: 'Difficulty',
  actions: {
    label: 'Actions',
    align: 'end',
  },
} as const

const filteredData = computed(() => {
  if (!filters.value) {
    return classes
  } else {
    const filterRe = new RegExp(filters.value, 'i')

    return classes.filter((item) => {
      return (
        item.name.match(filterRe) ||
        item.category.match(filterRe) ||
        item.skill.name.match(filterRe) ||
        item.author.username.match(filterRe)
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
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="tab = 'all'"
                @click="tab = 'all'"
                ><span>All</span></a
              >
            </li>
            <li :class="[tab === 'saved' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="tab = 'saved'"
                @click="tab = 'saved'"
                ><span>Saved</span></a
              >
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex-list-wrapper flex-list-v3">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        v-if="tab === 'all' && !filteredData.length"
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
      <div v-else-if="tab === 'all' && filteredData.length" class="tab-content is-active">
        <VFlexTable :data="filteredData" :columns="columns" rounded>
          <template #body>
            <TransitionGroup name="list" tag="div" class="flex-list-inner">
              <!--Table item-->
              <div v-for="item in filteredData" :key="item.id" class="flex-table-item">
                <VFlexTableCell :column="{ media: true, grow: true }">
                  <img
                    class="media"
                    :src="item.picture"
                    alt=""
                    @error.once="onceImageErrored(150, 110)"
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
                </VFlexTableCell>
                <VFlexTableCell>
                  <span class="light-text">{{ item.category }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
                  <i
                    aria-hidden="true"
                    class="cell-icon is-pushed-mobile"
                    :class="item.skill.icon"
                  ></i>
                  <span class="light-text no-push">{{ item.skill.name }}</span>
                </VFlexTableCell>
                <VFlexTableCell>
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
                </VFlexTableCell>
                <VFlexTableCell :columns="{ align: 'end' }" class="h-hidden-tablet-p">
                  <a class="button v-button has-dot dark-outlined is-pushed-mobile">
                    Purchase &middot; ${{ item.price }}
                  </a>
                </VFlexTableCell>
              </div>
            </TransitionGroup>
          </template>
        </VFlexTable>

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
        v-else-if="tab === 'saved' && filteredData.length"
        class="tab-content is-active"
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
    margin-inline-end: auto;
    margin-inline-start: auto;
  }
}

.flex-table-item .media {
  width: 130px;
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .flex-table .flex-table-header > span:last-child {
    display: none !important;
  }
}
</style>
