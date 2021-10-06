<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useWizard } from '/@src/stores/wizard'

const router = useRouter()
const wizard = useWizard()

const validateStep = async () => {
  router.push({
    name: 'navbar-layouts-projects-details',
  })
  wizard.reset()
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Congrats! You're all set.</h2>
      <p>Awesome, you just finished creating this project.</p>
    </div>

    <div class="page-placeholder end-placeholder">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/@src/assets/illustrations/wizard/finish.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@src/assets/illustrations/wizard/finish-dark.svg"
          alt=""
        />
        <h3>Get ready for next steps.</h3>
        <p>
          You, and the team members you've added can already start working and
          creating tasks.
        </p>
        <div class="button-wrap">
          <VButton color="primary" rounded bold elevated @click="validateStep">
            View Project
          </VButton>
        </div>
      </div>
    </div>
  </div>
</template>
