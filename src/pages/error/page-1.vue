<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Error Page 1 - Vuero')
</script>

<template>
  <MinimalLayout>
    <div class="error-container">
      <div class="error-wrapper">
        <div class="error-inner has-text-centered">
          <div class="bg-number">404</div>
          <img src="/@images/illustrations/placeholders/error-1.svg" alt="" />
          <h3>We couldn't find that page</h3>
          <p>
            Looks like we couldn't find that page. Please try again or contact
            an administrator if the problem persists.
          </p>
          <div class="button-wrap">
            <a class="button h-button is-primary is-elevated" onclick="goBack()"
              >Take me Back</a
            >
          </div>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>
