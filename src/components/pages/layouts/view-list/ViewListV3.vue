<script setup lang="ts">
import { offers } from '/@src/data/layouts/view-list-v3'
import { onceImageErrored } from '/@src/utils/via-placeholder'

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
      <VControl icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
          data-filter-target=".list-view-item"
        />
        <div class="form-icon">
          <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
        </div>
      </VControl>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="activeTab = 'all'"
                @click="activeTab = 'all'"
                ><span>All</span></a
              >
            </li>
            <li :class="[activeTab === 'saved' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="activeTab = 'saved'"
                @click="activeTab = 'saved'"
                ><span>Saved</span></a
              >
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
          :class="[activeTab === 'all' && 'is-active']"
        >
          <div class="list-view-inner">
            <TransitionGroup name="list-complete" tag="div">
              <!--Item-->
              <div v-for="item in filteredData" :key="item.id" class="list-view-item">
                <div class="list-view-item-inner">
                  <img
                    class="avatar"
                    :src="item.logo"
                    alt=""
                    @error.once="onceImageErrored(150)"
                  />
                  <div class="meta-left">
                    <h3>
                      {{ item.title }}
                    </h3>
                    <span>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:map-pin"
                      ></i>
                      <span>{{ item.location }}</span>
                      <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                      <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                      <span>{{ item.duration }}</span>
                      <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:check-circle"
                      ></i>
                      <span>{{ item.requirements }}</span>
                    </span>
                  </div>
                  <div class="meta-right">
                    <div class="buttons">
                      <VButton color="primary" outlined raised> Apply Now </VButton>

                      <VIconButton
                        icon="feather:bookmark"
                        class="hint--bubble hint--primary hint--top"
                        data-hint="Save"
                        light
                        circle
                      />
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
          :class="[activeTab === 'saved' && 'is-active']"
        >
          <div class="list-view-inner">
            <!--Empty placeholder-->
            <VPlaceholderPage
              title="No saved jobs."
              subtitle="Looks like you don't have any saved jobs for the moment. It's
                  also possible that some of your saved items expired."
            >
              <template #image>
                <img
                  class="light-image"
                  src="/@src/assets/illustrations/placeholders/thinking-canvas.svg"
                  alt=""
                />
                <img
                  class="dark-image"
                  src="/@src/assets/illustrations/placeholders/thinking-canvas-dark.svg"
                  alt=""
                />
              </template>
            </VPlaceholderPage>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.list-view-v3 {
  .list-view-item {
    @include vuero-r-card;

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: center;

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
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 500;
          font-size: 1.1rem;
          line-height: 1;
        }

        > span:not(.tag) {
          font-size: 0.9rem;
          color: var(--light-text);

          svg {
            position: relative;
            top: 1px;
            height: 12px;
            width: 12px;
          }

          .icon-separator {
            position: relative;
            top: -3px;
            font-size: 5px;
            color: var(--light-text);
            padding: 0 8px;
          }

          .iconify {
            margin-inline-end: 0.25rem;
          }
        }
      }

      .meta-right {
        margin-inline-start: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .buttons {
          margin-bottom: 0;
          margin-inline-end: 10px;
        }
      }
    }
  }
}

.is-dark {
  .list-view-v3 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
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
                  border-color: var(--primary);
                  color: var(--primary);
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
  .list-view-v3 {
    .list-view-item {
      position: relative;
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        > img {
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-inline-start: 0;

          h3 {
            text-align: center;
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
