<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import * as listData from '/@src/data/layouts/view-list-v4'
import { onceImageErrored } from '/@src/utils/via-placeholder'

export interface RecipeData {
  icon: string
  name: string
  category: string
  duration: string
  attachments: number
  author: {
    avatar: string
    name: string
  }
  followers: VAvatarProps[]
}

const recipes = listData.recipes as RecipeData[]

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
    return recipes
  } else {
    return recipes.filter((item) => {
      return (
        item.icon.match(new RegExp(filters.value, 'i')) ||
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.category.match(new RegExp(filters.value, 'i')) ||
        item.duration.match(new RegExp(filters.value, 'i')) ||
        item.author.name.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-view-toolbar is-reversed">
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

    <!--List-->
    <div class="list-view list-view-v4">
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
            src="/@src/assets/illustrations/placeholders/search-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-3-dark.svg"
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
        <div class="list-view-inner">
          <TransitionGroup name="list-complete" tag="div">
            <!--Item-->
            <div v-for="(item, key) in filteredData" :key="key" class="list-view-item">
              <div class="list-view-item-inner">
                <div class="pre-meta">
                  <h3>{{ item.name }}</h3>
                </div>
                <img
                  class="avatar"
                  :src="item.icon"
                  alt=""
                  @error.once="onceImageErrored(150)"
                />
                <div class="meta-left">
                  <h3>
                    <img
                      class="avatar"
                      :src="item.author.avatar"
                      alt=""
                      @error.once="onceImageErrored(150)"
                    />
                    <span>{{ item.author.name }}</span>
                  </h3>
                  <span>
                    <i aria-hidden="true" class="iconify" data-icon="feather:archive"></i>
                    <span>{{ item.category }}</span>
                    <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                    <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                    <span>{{ item.duration }}</span>
                    <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:paperclip"
                    ></i>
                    <span>{{ item.attachments }} files</span>
                  </span>
                </div>
                <div class="meta-right">
                  <div class="network">
                    <VAvatarStack :avatars="item.followers" size="small" :limit="3" />
                    <span>Like this</span>
                  </div>
                  <div class="buttons">
                    <a class="button v-button is-primary is-outlined is-raised">
                      View Recipe
                    </a>
                    <button
                      class="button is-light is-circle hint--bubble hint--primary hint--top"
                      data-hint="Save"
                    >
                      <span class="icon is-small">
                        <i
                          aria-hidden="true"
                          class="iconify"
                          data-icon="feather:heart"
                        ></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <VFlexPagination
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
        :class="[tab === 'saved' && 'is-active']"
      >
        <div class="list-view-inner">
          <!--Empty placeholder-->
          <VPlaceholderPage
            title="No saved recipes."
            subtitle="Looks like you don't have any saved recipes for the moment.
                Start by exploring the latest ones and add your favorites to the
                saved recipes section."
            larger
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/cooking.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/cooking-dark.svg"
                alt=""
              />
            </template>
          </VPlaceholderPage>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.list-view-v4 {
  .list-view-item {
    @include vuero-r-card;

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: center;

      .pre-meta {
        margin-inline-end: 16px;
        width: 160px;

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-size: 1rem;
          font-weight: 600;
          max-width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      > img {
        width: 100%;
        max-width: 60px;
        min-width: 60px;
        max-height: 60px;
        min-height: 60px;
        border-radius: var(--radius-rounded);
        border: 1px solid var(--fade-grey);
      }

      .meta-left {
        margin-inline-start: 16px;

        h3 {
          display: flex;
          align-items: center;
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--dark-text);
          font-size: 0.75rem;
          line-height: 1;

          .avatar {
            display: block;
            height: 18px;
            width: 18px;
            border-radius: var(--radius-rounded);
            margin-inline-end: 6px;
          }
        }

        > span:not(.tag) {
          font-size: 0.9rem;
          color: var(--light-text);

          svg {
            position: relative;
            top: 1px;
            height: 12px;
            width: 12px;
            margin-inline-end: 0.25rem;
          }

          .icon-separator {
            position: relative;
            top: -3px;
            font-size: 5px;
            color: var(--light-text);
            padding: 0 8px;
          }
        }
      }

      .meta-right {
        margin-inline-start: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .network {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-width: 145px;
          margin-inline-end: 30px;

          > span {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
            margin-inline-start: 6px;
          }
        }

        .buttons {
          margin-bottom: 0;
          margin-inline-end: 10px;

          .button {
            margin-bottom: 0;

            &:nth-child(2) {
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;

              &:hover,
              &:focus {
                background: var(--white);
                border: 1px solid var(--fade-grey-dark-3);
                box-shadow: var(--light-box-shadow);
                color: var(--danger);
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .list-view-v4 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        .pre-meta {
          h3 {
            color: var(--dark-dark-text);
          }
        }

        > img {
          border-color: var(--dark-sidebar-light-12);
        }

        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;
          }
        }

        .meta-right {
          .buttons {
            .button {
              &:nth-child(2) {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-8);
                color: var(--dark-dark-text);
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;

                &:hover,
                &:focus {
                  border-color: var(--danger);
                  color: var(--danger);
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .list-view-v4 {
    .list-view-item {
      position: relative;
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        .pre-meta {
          margin: 0 0 16px;

          h3 {
            text-align: center;
          }
        }

        > img {
          max-width: 90px;
          min-width: 90px;
          max-height: 90px;
          min-height: 90px;
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-inline-start: 0;

          h3 {
            justify-content: center;
            margin-bottom: 6px;
          }

          > span {
            margin-bottom: 16px;
          }

          .icon-list {
            flex-wrap: wrap;

            > span {
              flex-direction: column;
              text-align: center;
              margin: 10px;
              width: calc(33.3% - 20px);

              i {
                margin: 0;
              }
            }
          }
        }

        .meta-right {
          margin: 16px 0 0;
          width: 100%;

          .network {
            justify-content: flex-start;
          }

          .buttons {
            margin: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .button {
              width: 100%;
              margin: 10px 0;

              &:first-child {
                width: 100%;
                max-width: 240px;
                margin: 10px auto;
              }

              &:nth-child(2) {
                position: absolute;
                top: 0;
                inset-inline-end: 10px;
                max-width: 35px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .list-view-v4 {
    .list-view-inner {
      display: flex;
      flex-wrap: wrap;
    }

    .list-view-item {
      position: relative;
      margin: 10px;
      width: calc(50% - 20px);
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        .pre-meta {
          margin: 0 0 16px;

          h3 {
            margin-inline-end: 0;
            text-align: center;
          }
        }

        > img {
          max-width: 90px;
          min-width: 90px;
          max-height: 90px;
          min-height: 90px;
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-inline-start: 0;

          h3 {
            justify-content: center;
            margin-bottom: 6px;
          }

          > span {
            margin-bottom: 16px;
          }

          .icon-list {
            flex-wrap: wrap;

            > span {
              flex-direction: column;
              text-align: center;
              margin: 10px;
              width: calc(33.3% - 20px);

              i {
                margin: 0;
              }
            }
          }
        }

        .meta-right {
          margin: 16px 0 0;
          width: 100%;
          justify-content: space-between;

          .network {
            justify-content: flex-start;
            margin: 0;
          }

          .buttons {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 0 0 0 16px;

            .button {
              width: 100%;

              &:first-child {
                width: 100%;
                max-width: 240px;
                margin: 0 auto;
              }

              &:nth-child(2) {
                position: absolute;
                top: 10px;
                inset-inline-end: 10px;
                max-width: 35px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
