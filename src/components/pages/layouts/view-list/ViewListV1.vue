<script setup lang="ts">
import { computed, ref } from 'vue'

import { users } from '/@src/data/layouts/view-list-v1'

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
      <V-Field>
        <V-Control icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </V-Control>
      </V-Field>

      <div class="list-info">
        <span v-if="filteredData.length === 1">1 record found</span>
        <span v-else>{{ filteredData.length }} records found</span>
      </div>

      <div class="buttons">
        <V-Button color="primary" icon="fas fa-check" elevated>
          Approve
        </V-Button>
      </div>
    </div>

    <div class="page-content-inner">
      <!--List-->
      <div class="list-view list-view-v1">
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
              src="/@src/assets/illustrations/placeholders/search-1.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/search-1-dark.svg"
              alt=""
            />
          </template>
        </V-PlaceholderPage>

        <div class="list-view-inner">
          <!--Item-->
          <transition-group name="list-complete" tag="div">
            <div
              v-for="item in filteredData"
              :key="item.id"
              class="list-view-item"
            >
              <div class="list-view-item-inner">
                <V-Avatar
                  :picture="item.medias.avatar"
                  size="large"
                  :badge="item.medias.flag"
                />
                <div class="meta-left">
                  <h3>{{ item.name }}</h3>
                  <span>
                    <i class="iconify" data-icon="feather:map-pin"></i>
                    <span>{{ item.location }}</span>
                  </span>
                </div>
                <div class="meta-right">
                  <div class="tags">
                    <V-Tag
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
                    <V-AvatarStack
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

      <V-FlexPagination
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
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';

.list-view-v1 {
  .list-view-item {
    @include vuero-r-card();

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: center;

      .meta-left {
        margin-left: 16px;

        h3 {
          font-family: $font-alt;
          color: $dark-text;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1;
        }

        > span:not(.tag) {
          font-size: 0.9rem;
          color: $light-text;

          svg {
            height: 12px;
            width: 12px;
          }
        }
      }

      .meta-right {
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .tags {
          margin-right: 30px;
          margin-bottom: 0;

          .tag {
            margin-bottom: 0;
          }
        }

        .stats {
          display: flex;
          align-items: center;
          margin-right: 30px;

          .stat {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            color: $light-text;

            > span {
              font-family: $font;

              &:first-child {
                font-size: 1.2rem;
                font-weight: 600;
                color: $dark-text;
                line-height: 1.4;
              }

              &:nth-child(2) {
                text-transform: uppercase;
                font-family: $font-alt;
                font-size: 0.75rem;
              }
            }

            svg {
              height: 16px;
              width: 16px;
            }

            i {
              font-size: 1.4rem;
            }
          }

          .separator {
            height: 25px;
            width: 2px;
            border-right: 1px solid darken($fade-grey, 3%);
            margin: 0 16px;
          }
        }

        .network {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-width: 145px;

          > span {
            font-family: $font;
            font-size: 0.9rem;
            color: $light-text;
            margin-left: 6px;
          }
        }

        .dropdown {
          margin-left: 30px;
        }
      }
    }
  }
}

.is-dark {
  .list-view-v1 {
    .list-view-item {
      @include vuero-card--dark();

      .list-view-item-inner {
        .meta-left {
          h3 {
            color: $dark-dark-text !important;
          }
        }

        .meta-right {
          .stats {
            .stat {
              span {
                &:first-child {
                  color: $dark-dark-text;
                }
              }
            }

            .separator {
              border-color: lighten($dark-sidebar, 16%) !important;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .list-view-v1 {
    .list-view-item {
      .list-view-item-inner {
        position: relative;
        flex-direction: column;

        .v-avatar {
          margin-bottom: 10px;
        }

        .meta-left {
          margin-left: 0;
        }

        .meta-right {
          flex-direction: column;
          margin-left: 0;

          .tags {
            margin: 10px 0;
          }

          .stats {
            margin: 10px 0;
          }

          .network {
            margin: 10px 0 0 0;
            justify-content: center;

            > span {
              display: none;
            }
          }

          .dropdown {
            position: absolute;
            top: 0;
            right: 0;
            margin-left: 0;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .list-view-v1 {
    display: flex;
    flex-wrap: wrap;

    .list-view-item {
      margin: 10px;
      width: calc(50% - 20px);

      .list-view-item-inner {
        position: relative;
        flex-direction: column;

        .v-avatar {
          margin-bottom: 10px;
        }

        .meta-left {
          margin-left: 0;
        }

        .meta-right {
          flex-direction: column;
          margin-left: 0;

          .tags {
            margin: 10px 0;
          }

          .stats {
            margin: 10px 0;
          }

          .network {
            margin: 10px 0 0 0;
            justify-content: center;

            > span {
              display: none;
            }
          }

          .dropdown {
            position: absolute;
            top: 0;
            right: 0;
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
