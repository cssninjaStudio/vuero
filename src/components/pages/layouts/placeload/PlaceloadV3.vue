<script setup lang="ts">
import { ref } from 'vue'

const filters = ref('')
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

      <V-Buttons>
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
      </V-Buttons>
    </div>

    <div class="user-grid user-grid-v1">
      <div class="columns is-multiline">
        <!--Grid item-->
        <div class="column is-3" v-for="key in 20" :key="key">
          <div class="grid-item">
            <V-PlaceloadAvatar size="big" centered class="mb-2" />

            <V-PlaceloadText
              class="mb-4"
              width="80%"
              :lines="3"
              last-line-width="60%"
              centered
            />

            <div class="people">
              <V-PlaceloadAvatar size="small" class="mx-1" />
              <V-PlaceloadAvatar size="small" class="mx-1" />
              <V-PlaceloadAvatar size="small" class="mx-1" />
              <V-PlaceloadAvatar size="small" class="mx-1" />
            </div>

            <V-Buttons>
              <V-Button placeload="100%" dark-outlined>loading ...</V-Button>
              <V-Button placeload="100%" dark-outlined>loading ...</V-Button>
            </V-Buttons>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_user-grid-v1.scss';
</style>
