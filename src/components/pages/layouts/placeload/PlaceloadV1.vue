<script setup lang="ts">
import { ref } from 'vue'

const filters = ref('')
</script>

<template>
  <div>
    <div class="list-view-toolbar">
      <V-Field>
        <V-Control icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </V-Control>
      </V-Field>

      <div class="list-info">
        <span>Loading records</span>
      </div>

      <div class="buttons">
        <V-Button color="primary" icon="fas fa-check" elevated disabled>
          Approve
        </V-Button>
      </div>
    </div>

    <div class="list-view list-view-v1">
      <div class="list-view-inner">
        <!--Item-->
        <div class="list-view-item" v-for="key in 10" :key="key">
          <V-PlaceloadWrap>
            <V-PlaceloadAvatar size="medium" />

            <V-PlaceloadText last-line-width="60%" class="mx-2" />
            <V-Placeload class="mx-2" disabled />
            <V-Placeload class="mx-2 h-hidden-tablet-p" />
            <V-Placeload class="mx-2 h-hidden-tablet-p" />
            <V-Placeload class="mx-2" />
          </V-PlaceloadWrap>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_list-view-1.scss';
</style>
