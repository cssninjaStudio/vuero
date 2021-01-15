<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Wizard V1 - Vuero')
</script>

<template>
  <MinimalLayout>
    <!--Wizard Navbar-->
    <WizardV1Navigation />

    <!--Wizard Progress Bar-->
    <progress
      id="wizard-progress"
      class="progress is-smaller is-primary wizard-progress"
      value="10"
      max="100"
    ></progress>

    <!--Main Wrapper-->
    <div class="wizard-v1-wrapper">
      <div
        id="wizard-step-0"
        class="inner-wrapper is-active"
        data-step-title="Project Type"
      >
        <!--src/partials/pages/wizard/wizard-v1/-->
        <WizardV1Step0 />
      </div>

      <div
        id="wizard-step-1"
        class="inner-wrapper"
        data-step-title="Project Info"
      >
        <!--src/partials/pages/wizard/wizard-v1/-->
        <WizardV1Step1 />
      </div>

      <div
        id="wizard-step-2"
        class="inner-wrapper"
        data-step-title="Project Details"
      >
        <!--src/partials/pages/wizard/wizard-v1/-->
        <WizardV1Step2 />
      </div>

      <div
        id="wizard-step-3"
        class="inner-wrapper"
        data-step-title="Project Files"
      >
        <!--src/partials/pages/wizard/wizard-v1/-->
        <WizardV1Step3 />
      </div>

      <div
        id="wizard-step-4"
        class="inner-wrapper"
        data-step-title="Team Members"
      >
        <!--src/partials/pages/wizard/wizard-v1/-->
        <WizardV1Step4 />
      </div>

      <div
        id="wizard-step-5"
        class="inner-wrapper"
        data-step-title="Project Tools"
      >
        <!--src/partials/pages/wizard/wizard-v1/-->
        <WizardV1Step5 />
      </div>

      <div id="wizard-step-6" class="inner-wrapper" data-step-title="Preview">
        <!--src/partials/pages/wizard/wizard-v1/-->
        <WizardV1Step6 />
      </div>

      <div id="wizard-step-7" class="inner-wrapper" data-step-title="Finish">
        <!--src/partials/pages/wizard/wizard-v1/-->
        <WizardV1Step7 />
      </div>

      <!--Wizard Navigation Buttons-->
      <div class="wizard-buttons">
        <div class="wizard-buttons-inner">
          <button
            class="button h-button is-light is-bold wizard-button-previous"
          >
            Previous
          </button>
          <button
            class="button h-button is-primary is-bold is-elevated wizard-button-next"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_wizard.scss';
</style>
