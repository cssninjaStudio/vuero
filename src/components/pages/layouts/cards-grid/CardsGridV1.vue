<script setup lang="ts">
import { computed, ref } from 'vue'

import { users } from '/@src/data/layouts/card-grid-v1'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return users
  } else {
    return users.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.role.match(new RegExp(filters.value, 'i')) ||
        item.medias.badge.match(new RegExp(filters.value, 'i'))
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
    <div class="card-grid-toolbar">
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

    <div class="card-grid card-grid-v1">
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

      <!--Card Grid v1-->
      <transition-group name="list" tag="div" class="columns is-multiline">
        <!--Grid item-->
        <div v-for="item in filteredData" :key="item.id" class="column is-6">
          <div class="card-grid-item">
            <div class="card-grid-item-body">
              <div class="left">
                <V-Avatar
                  size="big"
                  :picture="item.medias.avatar"
                  :badge="item.medias.badge"
                />
                <div class="meta">
                  <span class="dark-inverted">{{ item.name }}</span>
                  <span>{{ item.role }}</span>
                </div>
              </div>
              <div class="right">
                <div class="social-links">
                  <a
                    v-for="channel in item.social"
                    :key="channel.id"
                    :href="channel.url"
                    class="social-link"
                  >
                    <i aria-hidden="true" :class="channel.icon"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="card-grid-item-footer">
              <div class="left">
                <div class="progress-stats">
                  <span class="dark-inverted">Progress</span>
                  <span>{{ item.progress }}%</span>
                </div>
                <div class="progress-bar">
                  <V-Progress size="tiny" :value="item.progress" />
                </div>
              </div>
              <div class="right">
                <div class="buttons">
                  <V-Button dark-outlined rounded>View Profile</V-Button>
                </div>
              </div>
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

.card-grid {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.card-grid-v1 {
  .card-grid-item {
    flex: 1;
    display: inline-block;
    width: 100%;
    background-color: $white;
    border-radius: 6px;
    border: 1px solid darken($fade-grey, 3%);
    transition: all 0.3s;

    .card-grid-item-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      border-bottom: 1px solid darken($fade-grey, 3%);

      .left {
        display: flex;
        align-items: center;

        .meta {
          margin-left: 12px;
          line-height: 1.3;

          span {
            display: block;

            &:first-child {
              font-size: 1.1rem;
              font-weight: 600;
              font-family: $font-alt;
              color: $dark-text;
            }

            &:nth-child(2) {
              font-family: $font;
              font-size: 0.85rem;
              color: $light-text;
            }
          }
        }
      }

      .right {
        .social-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            width: 32px;
            min-width: 32px;
            border-radius: 50%;
            border: 1px solid darken($fade-grey, 3%);
            margin: 0 4px;
            color: $primary;
            box-shadow: $light-box-shadow;
            transition: all 0.3s;

            &:hover {
              color: $white;
              background: $primary;
              border-color: $primary;
              box-shadow: $primary-box-shadow;
            }

            i {
              font-size: 12px;
            }
          }
        }
      }
    }

    .card-grid-item-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;

      .left {
        flex-grow: 2;
        max-width: 50%;

        .progress-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;

          span {
            display: block;

            &:first-child {
              font-family: $font-alt;
              font-size: 0.9rem;
              font-weight: 600;
              color: $dark-text;
            }

            &:nth-child(2) {
              font-size: 0.9rem;
              color: $light-text;
            }
          }
        }

        .progress {
          margin-bottom: 0;
        }
      }

      .right {
        .v-button {
          color: $light-text;

          &:hover {
            border-color: $primary;
            background: $primary;
            color: $smoke-white;
            box-shadow: $primary-box-shadow;
          }
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v1 {
    .card-grid-item {
      background: lighten($dark-sidebar, 6%);
      border-color: lighten($dark-sidebar, 12%);

      .card-grid-item-body {
        border-color: lighten($dark-sidebar, 12%);

        .left {
          .v-avatar {
            .badge {
              border-color: lighten($dark-sidebar, 6%);
            }
          }
        }

        .right {
          .social-links {
            .social-link {
              background: lighten($dark-sidebar, 2%);
              border-color: lighten($dark-sidebar, 12%);
              color: $dark-dark-text;

              &:hover {
                border-color: $accent !important;
                color: $accent !important;
              }
            }
          }
        }
      }

      .card-grid-item-footer {
        .right {
          .v-button {
            box-shadow: none !important;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .card-grid-v1 {
    .card-grid-item {
      .card-grid-item-body {
        flex-direction: column;

        .left {
          flex-direction: column;
          text-align: center;

          .meta {
            margin: 5px 0 20px 0;
          }
        }
      }
    }
  }
}
</style>
