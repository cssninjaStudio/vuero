<script setup lang="ts">
import { computed, ref } from 'vue'

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
</script>

<template>
  <div>
    <div class="user-grid-toolbar">
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
            <i class="fas fa-plus"></i>
          </span>
          <span>Add User</span>
        </V-Button>
      </div>
    </div>

    <div class="user-grid user-grid-v1">
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

      <transition-group name="list" tag="div" class="columns is-multiline">
        <!--Grid item-->
        <div v-for="item in filteredData" :key="item.id" class="column is-3">
          <div class="grid-item">
            <V-Avatar :picture="item.avatar" :badge="item.badge" size="big" />
            <h3 class="dark-inverted">{{ item.fullName }}</h3>
            <p>{{ item.position }}</p>
            <div class="people">
              <V-Avatar
                v-for="user in item.team"
                :key="user.id"
                size="small"
                :color="user.color"
                :initials="user.initials"
                :picture="user.avatar"
              />
            </div>
            <div class="buttons">
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:user"></i>
                </span>
                <span>Profile</span>
              </button>
              <button class="button v-button is-dark-outlined">
                <span class="icon">
                  <i class="iconify" data-icon="feather:message-circle"></i>
                </span>
                <span>Talk</span>
              </button>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';

.is-dark {
  .user-grid {
    .grid-item {
      @include vuero-card--dark();
    }
  }
}

.user-grid-v1 {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }

  .grid-item {
    @include vuero-s-card();

    text-align: center;

    > .v-avatar {
      display: block;
      margin: 0 auto 4px auto;
    }

    h3 {
      font-family: $font-alt;
      font-size: 1.1rem;
      font-weight: 600;
      color: $dark-text;
    }

    p {
      font-size: 0.85rem;
    }

    .people {
      display: flex;
      justify-content: center;
      padding: 8px 0 30px 0;

      .v-avatar {
        margin: 0 4px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .button {
        width: calc(50% - 4px);
        color: $light-text;

        &:hover {
          border-color: darken($fade-grey, 4%);
          color: $primary;
          box-shadow: $light-box-shadow;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .user-grid-v1 {
    .columns {
      display: flex;

      .column {
        min-width: 50% !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .user-grid-v1 {
    .columns {
      .column {
        min-width: 33.3% !important;
      }
    }
  }
}
</style>
