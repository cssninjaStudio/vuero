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
      <div class="columns is-multiline">
        <!--Grid item-->
        <div v-for="key in 20" :key="key" class="column is-3">
          <div class="grid-item">
            <VPlaceloadAvatar size="big" centered class="mb-2" />

            <VPlaceloadText
              class="mb-4"
              width="80%"
              :lines="3"
              last-line-width="60%"
              centered
            />

            <div class="people">
              <VPlaceloadAvatar size="small" class="mx-1" />
              <VPlaceloadAvatar size="small" class="mx-1" />
              <VPlaceloadAvatar size="small" class="mx-1" />
              <VPlaceloadAvatar size="small" class="mx-1" />
            </div>

            <VButtons>
              <VButton placeload="100%" dark-outlined>loading ...</VButton>
              <VButton placeload="100%" dark-outlined>loading ...</VButton>
            </VButtons>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_user-grid-v1.scss';
</style>
