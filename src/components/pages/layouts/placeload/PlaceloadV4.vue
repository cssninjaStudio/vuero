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
        <input v-model="filters" class="input" placeholder="Search..." />
      </VControl>

      <VButtons>
        <VField class="v-hidden-mobile">
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

    <div class="tile-grid tile-grid-v1">
      <!--Tile Grid v1-->
      <div class="columns is-multiline">
        <!--Grid item-->
        <div v-for="key in 30" :key="key" class="column is-4">
          <div class="tile-grid-item">
            <div class="tile-grid-item-inner placeload-wrap is-flex">
              <VPlaceloadAvatar size="medium" />
              <VPlaceloadText width="80%" last-line-width="60%" class="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_tile-grid-v1.scss';
</style>
