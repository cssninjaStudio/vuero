<script setup lang="ts">
import { useWizard } from '/@src/composable/useWizard'
import type { WizardRelatedTo } from '/@src/models/wizard'

const wizard = useWizard()
const router = useRouter()
wizard.setStep({
  number: 1,
})

const validateStep = (relatedTo: WizardRelatedTo) => {
  wizard.data.relatedTo = relatedTo

  router.push('/wizard-v1/project-info')
}
</script>

<template>
  <div id="wizard-step-0" class="inner-wrapper is-active">
    <div class="step-content">
      <div class="step-title">
        <h2 class="dark-inverted">Select a project type</h2>
      </div>

      <div class="wizard-types">
        <div class="columns">
          <div class="column is-4">
            <div class="wizard-card">
              <img src="/@src/assets/illustrations/wizard/type-1.svg" alt="" />
              <h3 class="dark-inverted">UI/UX Design</h3>
              <p>Some short explanation about the type goes here.</p>
              <div class="button-wrap">
                <VButton
                  color="primary"
                  class="type-select-button"
                  rounded
                  elevated
                  bold
                  @click="validateStep('UI/UX Design')"
                >
                  Continue
                </VButton>
              </div>
              <div class="learn-more-link">
                <a href="#" class="dark-inverted-hover">Or Learn More</a>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="wizard-card">
              <img src="/@src/assets/illustrations/wizard/type-2.svg" alt="" />
              <h3 class="dark-inverted">Web Development</h3>
              <p>Some short explanation about the type goes here.</p>
              <div class="button-wrap">
                <VButton
                  color="primary"
                  class="type-select-button"
                  rounded
                  elevated
                  bold
                  @click="validateStep('Web Development')"
                >
                  Continue
                </VButton>
              </div>
              <div class="learn-more-link">
                <a href="#" class="dark-inverted-hover">Or Learn More</a>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="wizard-card">
              <img src="/@src/assets/illustrations/wizard/type-3.svg" alt="" />
              <h3 class="dark-inverted">Marketing</h3>
              <p>Some short explanation about the type goes here.</p>
              <div class="button-wrap">
                <VButton
                  color="primary"
                  class="type-select-button"
                  rounded
                  elevated
                  bold
                  @click="validateStep('Marketing')"
                >
                  Continue
                </VButton>
              </div>
              <div class="learn-more-link">
                <a href="#" class="dark-inverted-hover">Or Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
