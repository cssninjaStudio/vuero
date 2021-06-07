<script setup lang="ts">
import { computed, ref } from 'vue'

import { projects } from '/@src/data/layouts/card-grid-v2'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return projects
  } else {
    return projects.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.dueDate.match(new RegExp(filters.value, 'i')) ||
        item.owner.name.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

const valueSingle = ref(0)
const optionsSingle = [
  'All Projects',
  'Web Apps',
  'Mobile Apps',
  'Dashboards',
  'Landing Pages',
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
          <span>New Project</span>
        </V-Button>
      </div>
    </div>

    <div class="card-grid card-grid-v2">
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
            src="/@src/assets/illustrations/placeholders/search-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-3-dark.svg"
            alt=""
          />
        </template>
      </V-PlaceholderPage>

      <!--Card Grid v2-->
      <transition-group name="list" tag="div" class="columns is-multiline">
        <!--Grid Item-->
        <div v-for="item in filteredData" :key="item.id" class="column is-4">
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <V-Avatar size="small" :picture="item.owner.avatar" />
                  <div class="meta">
                    <span class="dark-inverted">{{ item.owner.name }}</span>
                    <span>updated {{ item.updated }}</span>
                  </div>
                </div>
                <div class="card-header-icon">
                  <UserCardDropdown />
                </div>
              </header>
              <div class="card-image">
                <figure class="image is-16by9">
                  <img
                    :src="item.image"
                    alt=""
                    @error.once="
                      $event.target.src = 'https://via.placeholder.com/1280x960'
                    "
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted">
                      {{ item.name }}
                    </h3>
                    <p>
                      <i
                        aria-hidden="true"
                        class="iconify"
                        data-icon="feather:calendar"
                      >
                      </i
                      >{{ item.dueDate }}
                    </p>
                  </div>
                  <V-AvatarStack :avatars="item.team" size="small" :limit="3" />
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">View</a>
                <a href="#" class="card-footer-item">Settings</a>
              </footer>
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

.card-grid-v2 {
  .card-grid-item {
    .card {
      border: 1px solid darken($fade-grey, 4%);
      box-shadow: none;
      border-radius: $radius-large;

      .card-header {
        box-shadow: none;
        border-bottom: 1px solid darken($fade-grey, 4%);

        .card-header-title {
          display: flex;
          align-items: center;

          .meta {
            margin-left: 10px;
            line-height: 1.2;

            span {
              display: block;
              font-weight: 400;

              &:first-child {
                font-family: $font-alt;
                font-size: 0.95rem;
                color: $dark-text;
                font-weight: 600;
              }

              &:nth-child(2) {
                font-size: 0.9rem;
                color: $light-text;
              }
            }
          }
        }
      }

      .card-image {
        img {
          object-fit: cover;
        }
      }

      .card-content {
        border-top: 1px solid darken($fade-grey, 4%);
        padding: 1rem;

        .card-content-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .card-info {
            h3 {
              font-family: $font-alt;
              font-size: 1rem;
              color: $dark-text;
              font-weight: 600;
            }

            p {
              font-size: 0.9rem;

              svg {
                position: relative;
                top: 0;
                height: 14px;
                width: 14px;
                margin-right: 4px;
              }
            }
          }
        }
      }

      .card-footer {
        a {
          font-family: $font;
          color: $light-text;
          padding: 1rem 0.75rem;
          transition: all 0.3s;

          &:hover {
            background: lighten($fade-grey, 4%);
            color: $primary;
          }
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v2 {
    .card-grid-item {
      border-color: lighten($dark-sidebar, 12%);

      .card {
        background: lighten($dark-sidebar, 6%);
        border-color: lighten($dark-sidebar, 12%);

        .card-header {
          border-color: lighten($dark-sidebar, 12%);
        }

        .card-content {
          border-color: lighten($dark-sidebar, 12%);

          .avatar-stack {
            .avatar {
              border-color: lighten($dark-sidebar, 6%);
            }
          }
        }

        .card-footer {
          border-color: lighten($dark-sidebar, 12%);

          a {
            border-color: lighten($dark-sidebar, 12%);

            &:hover {
              background: lighten($dark-sidebar, 2%);
              color: $accent;
            }
          }
        }
      }
    }
  }
}
</style>
