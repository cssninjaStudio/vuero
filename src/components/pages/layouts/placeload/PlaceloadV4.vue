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
        <input v-model="filters" class="input" placeholder="Search..." />
      </V-Control>

      <V-Buttons>
        <V-Field class="v-hidden-mobile">
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

    <div class="tile-grid tile-grid-v1">
      <!--Tile Grid v1-->
      <div class="columns is-multiline">
        <!--Grid item-->
        <div class="column is-4" v-for="key in 30" :key="key">
          <div class="tile-grid-item">
            <div class="tile-grid-item-inner placeload-wrap is-flex">
              <V-PlaceloadAvatar size="medium" />
              <V-PlaceloadText width="80%" last-line-width="60%" class="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_tile-grid-v1.scss';
</style>
