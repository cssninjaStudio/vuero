<script setup lang="ts">
import { computed, ref } from 'vue'

import type {
  VAvatarProps,
  VAvatarColor,
} from '/@src/components/base/avatar/VAvatar.vue'
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

      <transition-group name="list" tag="div" class="columns is-multiline">
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
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:user"
                  ></i>
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
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_user-grid-v1.scss';
</style>
