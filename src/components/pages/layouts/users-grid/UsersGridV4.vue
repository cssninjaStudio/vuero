<script setup lang="ts">
import { users } from '/@src/data/layouts/user-grid-v4'

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

    <div class="user-grid user-grid-v4">
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
            src="/@src/assets/illustrations/placeholders/search-5.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-5-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <TransitionGroup
        name="list"
        tag="div"
        class="columns is-multiline is-flex-tablet-p is-half-tablet-p"
      >
        <!--Grid item-->
        <div v-for="item in filteredData" :key="item.id" class="column is-3">
          <div class="grid-item">
            <UserCardDropdown />
            <VAvatar :picture="item.avatar" :badge="item.badge" size="big" />
            <h3 class="dark-inverted">{{ item.fullName }}</h3>
            <p>{{ item.position }}</p>
            <div class="button-wrap has-text-centered">
              <VButton v-if="item.added" color="primary" raised> Add To Project </VButton>
              <VButton v-else dark-outlined raised>Add To Team</VButton>
              <div>
                <a class="dark-inverted-hover">View Profile</a>
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

.user-grid-v4 {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }

  .grid-item {
    position: relative;
    @include vuero-s-card;

    text-align: center;

    &:hover,
    &:focus {
      .button-wrap {
        > div {
          a {
            opacity: 1;
            pointer-events: all;
          }
        }
      }
    }

    .dropdown {
      position: absolute;
      top: 10px;
      inset-inline-end: 10px;
      text-align: inset-inline-start;
    }

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

    .button-wrap {
      margin: 20px 0 0;

      .v-button {
        width: 100%;
        max-width: 140px;
        margin: 0 auto;
      }

      > div {
        margin: 6px 0 0;

        a {
          opacity: 0;
          pointer-events: none;
          color: var(--light-text);
          font-weight: 500;
          font-size: 0.9rem;
          transition: opacity 0.3s, color 0.3s;

          &:hover,
          &:focus {
            color: var(--primary);
          }
        }
      }
    }
  }
}

.is-dark {
  .user-grid-v4 {
    .grid-item {
      @include vuero-card--dark;
    }
  }
}
</style>
