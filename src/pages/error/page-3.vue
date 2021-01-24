<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Error Page 3 - Vuero',
})
</script>

<template>
  <MinimalLayout>
    <div class="error-container">
      <div class="error-wrapper">
        <div class="error-inner has-text-centered">
          <img src="/images/illustrations/placeholders/error-3.svg" alt="" />
          <h3>We couldn't find that page</h3>
          <p>
            Looks like we couldn't find that page. Please try again or contact
            an administrator if the problem persists.
          </p>
          <div class="button-wrap">
            <a
              class="button v-button is-primary is-rounded is-elevated"
              onclick="goBack()"
              >Take me Back</a
            >
          </div>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_utility.scss';
</style>
