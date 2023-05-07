<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import * as gridData from '/@src/data/layouts/user-grid-v2'

export interface UserData extends VAvatarProps {
  id: number
  username: string
  fullName: string
  location: string
  position: string
  bio: string
  tasks: {
    pending: number
  }
  status: string
  team: VAvatarProps[]
}

const users = gridData.users as UserData[]

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return users
  } else {
    return users.filter((item) => {
      return (
        item.username.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i')) ||
        item.position.match(new RegExp(filters.value, 'i')) ||
        item.badge?.match(new RegExp(filters.value, 'i'))
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
    <div class="user-grid-toolbar">
      <VControl icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
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
        <VButton color="primary" raised>
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus"></i>
          </span>
          <span>Add User</span>
        </VButton>
      </div>
    </div>

    <div class="user-grid user-grid-v2">
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

      <TransitionGroup name="list" tag="div" class="columns is-multiline">
        <!--Grid item-->
        <div v-for="item in filteredData" :key="item.id" class="column is-3">
          <div class="grid-item-wrap">
            <div class="grid-item-head">
              <div class="flex-head">
                <div class="meta">
                  <span v-if="item.status === 'synced'" class="dark-inverted">
                    In Sync
                  </span>
                  <span v-if="item.status === 'overdue'" class="dark-inverted">
                    Overdue
                  </span>
                  <span v-if="item.status === 'blocked'" class="dark-inverted">
                    Blocked
                  </span>
                  <span>37 tasks remaining</span>
                </div>
                <div v-if="item.status === 'synced'" class="status-icon is-success">
                  <i aria-hidden="true" class="fas fa-check"></i>
                </div>
                <div v-if="item.status === 'overdue'" class="status-icon is-warning">
                  <i aria-hidden="true" class="fas fa-exclamation"></i>
                </div>
                <div v-if="item.status === 'blocked'" class="status-icon is-danger">
                  <i aria-hidden="true" class="fas fa-times"></i>
                </div>
              </div>
              <div class="buttons">
                <button class="button v-button is-dark-outlined">
                  <span class="icon">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:check-circle"
                    ></i>
                  </span>
                  <span>Tasks</span>
                </button>
                <button class="button v-button is-dark-outlined">
                  <span class="icon">
                    <i aria-hidden="true" class="iconify" data-icon="feather:file"></i>
                  </span>
                  <span>Files</span>
                </button>
              </div>
            </div>
            <div class="grid-item">
              <VAvatar :picture="item.picture" :badge="item.badge" size="big" />
              <h3 class="dark-inverted">{{ item.fullName }}</h3>
              <p>{{ item.position }}</p>
              <div class="people">
                <VAvatar
                  v-for="(user, key) in item.team"
                  :key="key"
                  size="small"
                  :color="user.color"
                  :initials="user.initials"
                  :picture="user.picture"
                />
              </div>
              <div class="buttons">
                <button class="button v-button is-dark-outlined">
                  <span class="icon">
                    <i aria-hidden="true" class="iconify" data-icon="feather:user"></i>
                  </span>
                  <span>Profile</span>
                </button>
                <button class="button v-button is-dark-outlined">
                  <span class="icon">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:message-circle"
                    ></i>
                  </span>
                  <span>Talk</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.user-grid-v2 {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }

  .grid-item {
    @include vuero-s-card;

    text-align: center;

    > .v-avatar {
      display: block;
      margin: 0 auto 4px;
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-size: 0.85rem;
    }

    .people {
      display: flex;
      justify-content: center;
      padding: 8px 0 30px;

      .v-avatar {
        margin: 0 4px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .button {
        width: calc(50% - 4px);
        color: var(--light-text);

        &:hover,
        &:focus {
          border-color: var(--fade-grey-dark-4);
          color: var(--primary);
          box-shadow: var(--light-box-shadow);
        }
      }
    }
  }

  .grid-item-wrap {
    border: 1px solid var(--fade-grey-dark-3);
    border-radius: var(--radius-large);
    transition: all 0.3s; // transition-all test

    .grid-item-head {
      background: #fafafa;
      border-radius: var(--radius-large) 6px 0 0;
      padding: 20px;

      .flex-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;

        .meta {
          span {
            display: flex;

            &:first-child {
              font-family: var(--font-alt);
              font-weight: 600;
              font-size: 0.95rem;
              color: var(--dark-text);
            }

            &:nth-child(2) {
              font-size: 0.9rem;
              color: var(--light-text);
            }
          }
        }

        .status-icon {
          height: 28px;
          width: 28px;
          min-width: 28px;
          border-radius: var(--radius-rounded);
          border: 1px solid var(--fade-grey-dark-3);
          display: flex;
          align-items: center;
          justify-content: center;

          &.is-success {
            background: var(--success);
            border-color: var(--success);
            color: var(--white);
          }

          &.is-warning {
            background: var(--orange);
            border-color: var(--orange);
            color: var(--white);
          }

          &.is-danger {
            background: var(--danger);
            border-color: var(--danger);
            color: var(--white);
          }

          i {
            font-size: 8px;
          }
        }
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0;

        .button,
        .v-button {
          width: calc(50% - 4px);
          color: var(--light-text);
          margin-bottom: 0;

          &:hover,
          &:focus {
            border-color: var(--fade-grey-dark-4);
            color: var(--primary);
            box-shadow: var(--light-box-shadow);
          }
        }
      }
    }

    .grid-item {
      border-start-start-radius: 0;
      border-start-end-radius: 0;
      border: none;
    }
  }
}

.is-dark {
  .user-grid {
    .grid-item {
      @include vuero-card--dark;
    }
  }

  .user-grid-v2 {
    .grid-item-wrap {
      border-color: var(--dark-sidebar-light-12);

      .grid-item-head {
        background: var(--dark-sidebar-light-4);
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .user-grid-v2 {
    .columns {
      display: flex;

      .column {
        min-width: 50% !important;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .user-grid-v2 {
    .columns {
      .column {
        min-width: 33.3% !important;
      }
    }
  }
}
</style>
