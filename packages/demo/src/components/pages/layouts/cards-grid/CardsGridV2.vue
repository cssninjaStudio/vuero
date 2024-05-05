<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/VAvatar.vue'

import * as gridData from '/@src/data/layouts/card-grid-v2'

export interface ProjectData {
  name: string
  dueDate: string
  updated: string
  image: string
  team: VAvatarProps[]
  owner: {
    name: string
    avatar: string
  }
}
const { onceError } = useImageError()

const projects = gridData.projects as ProjectData[]

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return projects
  }
  else {
    return projects.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i'))
        || item.dueDate.match(new RegExp(filters.value, 'i'))
        || item.owner.name.match(new RegExp(filters.value, 'i'))
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
      <VControl icon="lucide:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        >
      </VControl>

      <div class="buttons">
        <VField class="h-hidden-mobile">
          <VControl>
            <Multiselect
              v-model="valueSingle"
              :options="optionsSingle"
              :max-height="145"
              placeholder="Select an option"
            />
          </VControl>
        </VField>
        <VButton
          color="primary"
          raised
        >
          <span class="icon">
            <i
              aria-hidden="true"
              class="fas fa-plus"
            />
          </span>
          <span>New Project</span>
        </VButton>
      </div>
    </div>

    <div class="card-grid card-grid-v2">
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
            src="/images/illustrations/placeholders/search-3.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/images/illustrations/placeholders/search-3-dark.svg"
            alt=""
          >
        </template>
      </VPlaceholderPage>

      <!--Card Grid v2-->
      <TransitionGroup
        name="list"
        tag="div"
        class="columns is-multiline"
      >
        <!--Grid Item-->
        <div
          v-for="(item, key) in filteredData"
          :key="key"
          class="column is-4"
        >
          <div class="card-grid-item">
            <div class="card">
              <header class="card-header">
                <div class="card-header-title">
                  <VAvatar
                    size="small"
                    :picture="item.owner.avatar"
                  />
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
                    @error.once="onceError($event, 1280, 960)"
                  >
                </figure>
              </div>
              <div class="card-content">
                <div class="card-content-flex">
                  <div class="card-info">
                    <h3 class="dark-inverted">
                      {{ item.name }}
                    </h3>
                    <p>
                      <VIcon
                        icon="lucide:calendar"
                      />{{ item.dueDate }}
                    </p>
                  </div>
                  <VAvatarStack
                    :avatars="item.team"
                    size="small"
                    :limit="3"
                  />
                </div>
              </div>
              <footer class="card-footer">
                <a
                  href="#"
                  class="card-footer-item"
                >View</a>
                <a
                  href="#"
                  class="card-footer-item"
                >Settings</a>
              </footer>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss">
.card-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.card-grid-v2 {
  .card-grid-item {
    .card {
      border: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);
      box-shadow: none;
      border-radius: var(--radius-large);

      .card-header {
        box-shadow: none;
        border-bottom: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);

        .card-header-title {
          display: flex;
          align-items: center;

          .meta {
            margin-inline-start: 10px;
            line-height: 1.2;

            span {
              display: block;
              font-weight: 400;

              &:first-child {
                font-family: var(--font-alt);
                font-size: 0.95rem;
                color: var(--dark-text);
                font-weight: 600;
              }

              &:nth-child(2) {
                font-size: 0.9rem;
                color: var(--light-text);
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
        border-top: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);
        padding: 1rem;

        .card-content-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .card-info {
            h3 {
              font-family: var(--font-alt);
              font-size: 1rem;
              color: var(--dark-text);
              font-weight: 600;
            }

            p {
              font-size: 0.9rem;

              .iconify {
                position: relative;
                top: 0;
                height: 14px;
                width: 14px;
                margin-inline-end: 4px;
              }
            }
          }
        }
      }

      .card-footer {
        a {
          font-family: var(--font);
          color: var(--light-text);
          padding: 1rem 0.75rem;
          transition: all 0.3s; // transition-all test

          &:hover {
            background: color-mix(in oklab, var(--fade-grey), white 4%);
            color: var(--primary);
          }
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v2 {
    .card-grid-item {
      border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

      .card {
        background: color-mix(in oklab, var(--dark-sidebar), white 6%);
        border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

        .card-header {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
        }

        .card-content {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

          .avatar-stack {
            .avatar {
              border-color: color-mix(in oklab, var(--dark-sidebar), white 6%);
            }
          }
        }

        .card-footer {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

          a {
            border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

            &:hover,
            &:focus {
              background: color-mix(in oklab, var(--dark-sidebar), white 2%);
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>
