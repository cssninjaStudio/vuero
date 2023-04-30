<script setup lang="ts">
import type { VAvatarProps, VAvatarColor } from '/@src/components/base/avatar/VAvatar.vue'
import { users } from '/@src/data/layouts/user-grid-v1'

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
        item.badge.match(new RegExp(filters.value, 'i'))
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

function getAvatarData(user: any): VAvatarProps {
  return {
    picture: user?.avatar,
    initials: user?.initials,
    color: user?.color as VAvatarColor,
  }
}
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

      <VButtons>
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
      </VButtons>
    </div>

    <div class="user-grid user-grid-v1">
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
          <div class="grid-item">
            <VAvatar :picture="item.avatar" :badge="item.badge" size="big" />
            <h3 class="dark-inverted">{{ item.fullName }}</h3>
            <p>{{ item.position }}</p>
            <div class="people">
              <VAvatar
                v-for="user in item.team"
                :key="user.id"
                size="small"
                v-bind="getAvatarData(user)"
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
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-dark {
  .user-grid {
    .grid-item {
      @include vuero-card--dark;
    }
  }
}

.user-grid-v1 {
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
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .user-grid-v1 {
    .columns {
      display: flex;

      .column {
        min-width: 50% !important;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .user-grid-v1 {
    .columns {
      .column {
        min-width: 33.3% !important;
      }
    }
  }
}
</style>
