<script lang="ts">
import { defineComponent } from 'vue'

const WizardV1Step0 = defineComponent({
  name: 'WizardV1Step0',
  components: {},
  setup() {
    // WizardV1Step0 - Composition API

    return {}
  },
})

export default WizardV1Step0
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Select a project type</h2>
    </div>

    <div class="wizard-types">
      <div class="columns">
        <div class="column is-4">
          <div class="wizard-card">
            <img
              src="/src/assets/images/illustrations/wizard/type-1.svg"
              alt=""
            />
            <h3 class="dark-inverted">UI/UX Design</h3>
            <p>Some short explanation about the type goes here.</p>
            <div class="button-wrap">
              <a
                href="#"
                class="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                >Continue</a
              >
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="wizard-card">
            <img
              src="/src/assets/images/illustrations/wizard/type-2.svg"
              alt=""
            />
            <h3 class="dark-inverted">Web Development</h3>
            <p>Some short explanation about the type goes here.</p>
            <div class="button-wrap">
              <a
                href="#"
                class="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                >Continue</a
              >
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="wizard-card">
            <img
              src="/src/assets/images/illustrations/wizard/type-3.svg"
              alt=""
            />
            <h3 class="dark-inverted">Marketing</h3>
            <p>Some short explanation about the type goes here.</p>
            <div class="button-wrap">
              <a
                href="#"
                class="button h-button is-primary is-rounded is-elevated is-bold type-select-button"
                >Continue</a
              >
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>