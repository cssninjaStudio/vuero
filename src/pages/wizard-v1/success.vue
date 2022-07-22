<script setup lang="ts">
import { useWizard } from '/@src/stores/wizard'

const wizard = useWizard()
wizard.setStep({
  number: 8,
  canNavigate: false,
})
</script>

<template>
  <div id="wizard-step-7" class="inner-wrapper is-active" data-step-title="Finish">
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
            You, and the team members you've added can already start working and creating
            tasks.
          </p>
          <div class="button-wrap">
            <VButton
              color="primary"
              rounded
              bold
              elevated
              to="/sidebar/layouts/projects-details"
            >
              View Project
            </VButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
