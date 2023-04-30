<script setup lang="ts">
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
        ('parking'.match(new RegExp(filters.value, 'i')) && item.comodities.parking) ||
        ('wifi'.match(new RegExp(filters.value, 'i')) && item.comodities.wifi) ||
        ('heater'.match(new RegExp(filters.value, 'i')) && item.comodities.heater) ||
        ('cleaning'.match(new RegExp(filters.value, 'i')) && item.comodities.cleaning)
      )
    })
  }
})
</script>

<template>
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

    <div class="tabs-inner">
      <div class="tabs">
        <ul>
          <li :class="[activeTab === 'active' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'active'"
              @click="activeTab = 'active'"
              ><span>Active</span></a
            >
          </li>
          <li :class="[activeTab === 'inactive' && 'is-active']">
            <a
              tabindex="0"
              role="button"
              @keydown.space.prevent="activeTab = 'inactive'"
              @click="activeTab = 'inactive'"
              ><span>Inactive</span></a
            >
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
            src="/@src/assets/illustrations/placeholders/search-2.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-2-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <!--Active Tab-->
      <div
        id="active-items-tab"
        class="tab-content"
        :class="[activeTab === 'active' && 'is-active']"
      >
        <div class="list-view-inner">
          <TransitionGroup name="list-complete" tag="div">
            <div v-for="item in filteredData" :key="item.id" class="list-view-item">
              <div class="list-view-item-inner">
                <img :src="item.picture" alt="" />
                <div class="meta-left">
                  <h3>
                    <span>{{ item.name }}</span>
                    <span class="rating">
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                        :class="[item.rating >= 1 && 'active']"
                      ></i>
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                        :class="[item.rating >= 2 && 'active']"
                      ></i>
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                        :class="[item.rating >= 3 && 'active']"
                      ></i>
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                        :class="[item.rating >= 4 && 'active']"
                      ></i>
                      <i
                        class="fas fa-star"
                        aria-hidden="true"
                        :class="[item.rating >= 5 && 'active']"
                      ></i>
                    </span>
                  </h3>
                  <p>
                    <i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i>
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
                    <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                    <span>
                      {{
                        item.details.beds > 1
                          ? `${item.details.beds} beds`
                          : `${item.details.beds} bed`
                      }}
                    </span>
                    <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
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
                      <i aria-hidden="true" class="lnil lnil-car"></i>
                      <span>Parking</span>
                    </span>
                    <span v-if="item.comodities.wifi">
                      <i aria-hidden="true" class="lnil lnil-signal"></i>
                      <span>Wifi</span>
                    </span>
                    <span v-if="item.comodities.heater">
                      <i aria-hidden="true" class="lnil lnil-air-flow"></i>
                      <span>Heater</span>
                    </span>
                    <span v-if="item.comodities.cleaning">
                      <i aria-hidden="true" class="lnil lnil-sun"></i>
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
                      <i aria-hidden="true" class="lnil lnil-more"></i>
                      <span>4 more</span>
                    </span>
                    <span
                      v-else-if="
                        item.comodities.other &&
                        item.comodities.otherThing &&
                        item.comodities.otherCoolThing
                      "
                    >
                      <i aria-hidden="true" class="lnil lnil-more"></i>
                      <span>3 more</span>
                    </span>
                    <span v-else-if="item.comodities.other && item.comodities.otherThing">
                      <i aria-hidden="true" class="lnil lnil-more"></i>
                      <span>2 more</span>
                    </span>
                    <span v-else-if="item.comodities.other">
                      <i aria-hidden="true" class="lnil lnil-more"></i>
                      <span>1 more</span>
                    </span>
                  </div>
                </div>
                <div class="meta-right">
                  <div class="buttons">
                    <VButton light>More Info</VButton>
                    <VButton color="primary" raised>Book Now</VButton>
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
        :class="[activeTab === 'inactive' && 'is-active']"
      >
        <div class="list-view-inner">
          <!--Empty placeholder-->
          <VPlaceholderPage
            title="There are no inactive properties."
            subtitle="Looks like there are no inactive properties to display. You can
                disable and also enable a property from the property settings."
            larger
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/having-coffee.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/having-coffee-dark.svg"
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

.list-view-v2 {
  .list-view-item {
    @include vuero-s-card;

    margin-bottom: 16px;
    padding: 16px;

    &:hover,
    &:focus {
      box-shadow: var(--light-box-shadow);
    }

    .list-view-item-inner {
      display: flex;

      > img {
        display: block;
        min-height: 130px;
        max-height: 130px;
        min-width: 190px;
        max-width: 190px;
        object-fit: cover;
        border-radius: var(--radius);
      }

      .meta-left {
        display: flex;
        flex-direction: column;
        margin-inline-start: 16px;

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 1.1rem;
          line-height: 1.5;

          .rating {
            margin-inline-start: 12px;

            i {
              position: relative;
              top: -2px;
              font-size: 12px;
              color: var(--fade-grey-dark-4);

              &.active {
                color: #ffc43b;
              }
            }
          }
        }

        p {
          font-size: 0.95rem;
          color: var(--light-text);

          svg {
            height: 12px;
            width: 12px;
          }
        }

        > span {
          display: flex;
          align-items: center;
          margin-top: 10px;
          font-family: var(--font);
          font-size: 0.9rem;
          color: var(--primary);

          .icon-separator {
            font-size: 5px;
            color: var(--light-text);
            padding: 0 10px;
          }
        }

        .icon-list {
          margin-top: auto;
          display: flex;

          > span {
            display: flex;
            align-items: center;
            margin-inline-end: 15px;

            span {
              font-size: 0.85rem;
              font-family: var(--font-alt);
              color: var(--dark-text);
            }

            i {
              font-size: 1.2rem;
              margin-inline-end: 6px;
              color: var(--light-text);
            }
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
  .list-view-v2 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;

            .rating {
              i:not(.active) {
                color: var(--dark-sidebar-dark-2);
              }
            }
          }

          > span {
            color: var(--primary);
          }

          .icon-list {
            > span {
              span {
                color: var(--dark-dark-text);
              }
            }
          }
        }

        .meta-right {
          .buttons {
            .button {
              &:first-child {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-8);
                color: var(--dark-dark-text);
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .list-view-v2 {
    .list-view-item {
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        > img {
          width: 100%;
          max-width: 100%;
          min-height: 160px;
          max-height: 160px;
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-inline-start: 0;

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

          .buttons {
            margin: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .button {
              width: 48%;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .list-view-v2 {
    .list-view-inner {
      display: flex;
      flex-wrap: wrap;

      .list-view-item {
        padding: 20px;
        margin: 10px;
        width: calc(50% - 20px);

        .list-view-item-inner {
          flex-direction: column;
          height: 100%;
          min-height: 450px;

          > img {
            width: 100%;
            max-width: 100%;
            min-height: 160px;
            max-height: 160px;
            margin-bottom: 1rem;
          }

          .meta-left {
            margin-inline-start: 0;

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
            margin: auto 0 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .buttons {
              margin: 16px 0 0;
              width: 100%;
              display: flex;
              justify-content: space-between;

              .button {
                width: 48%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
