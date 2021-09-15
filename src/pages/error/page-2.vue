<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Error Page 2 - Vuero',
})
</script>

<template>
  <div class="error-container">
    <div class="error-wrapper">
      <div class="error-inner has-text-centered">
        <div class="bg-number dark-inverted">404</div>
        <img
          class="light-image"
          src="/@src/assets/illustrations/placeholders/error-2.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@src/assets/illustrations/placeholders/error-2-dark.svg"
          alt=""
        />
        <h3 class="dark-inverted">We couldn't find that page</h3>
        <p>
          Looks like we couldn't find that page. Please try again or contact an
          administrator if the problem persists.
        </p>
        <div class="button-wrap">
          <VButton color="primary" elevated @click="$router.go(-1)">
            Take me Back
          </VButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/generic/_utility.scss';
</style>
