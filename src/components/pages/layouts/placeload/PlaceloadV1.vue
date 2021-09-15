<script setup lang="ts">
import { ref } from 'vue'

const filters = ref('')
</script>

<template>
  <div>
    <div class="list-view-toolbar">
      <VField>
        <VControl icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </VControl>
      </VField>

      <div class="list-info">
        <span>Loading records</span>
      </div>

      <div class="buttons">
        <VButton color="primary" icon="fas fa-check" elevated disabled>
          Approve
        </VButton>
      </div>
    </div>

    <div class="list-view list-view-v1">
      <div class="list-view-inner">
        <!--Item-->
        <div v-for="key in 10" :key="key" class="list-view-item">
          <VPlaceloadWrap>
            <VPlaceloadAvatar size="medium" />

            <VPlaceloadText last-line-width="60%" class="mx-2" />
            <VPlaceload class="mx-2" disabled />
            <VPlaceload class="mx-2 h-hidden-tablet-p" />
            <VPlaceload class="mx-2 h-hidden-tablet-p" />
            <VPlaceload class="mx-2" />
          </VPlaceloadWrap>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/lists/_list-view-1.scss';
</style>
