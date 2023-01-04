<script setup lang="ts">
import { useWizard } from '/@src/composable/useWizard'

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

      <VPlaceholderPage
        class="end-placeholder"
        title="Get ready for next steps."
        subtitle="You, and the team members you've added can already start working and creating tasks."
        larger
      >
        <template #image>
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
        </template>
        <template #action>
          <VButton
            color="primary"
            rounded
            bold
            elevated
            to="/sidebar/layouts/projects-details"
          >
            View Project
          </VButton>
        </template>
      </VPlaceholderPage>
    </div>
  </div>
</template>
