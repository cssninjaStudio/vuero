<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const router = useRouter()
const notyf = useNotyf()
const { scrollTo } = VueScrollTo

const currentStep = ref(0)
const isLoading = ref(false)
const currentHelp = ref(-1)
const controlType = ref('')
const storageType = ref('')
const taxType = ref('')
const taxStatements = ref('')

const validateStep = async () => {
  if (currentStep.value === 4) {
    if (isLoading.value) {
      return
    }

    isLoading.value = true
    notyf.success('Your shipment is successfully stored!')
    await sleep(1000)

    router.push('/sidebar/dashboards')
    return
  }

  isLoading.value = true
  await sleep(400)
  currentStep.value += 1

  nextTick(() => {
    scrollTo(`#form-step-${currentStep.value}`, 1000)
    isLoading.value = false
  })
}
</script>

<template>
  <form @submit.prevent="validateStep">
    <div class="mobile-steps is-active">
      <ul class="steps has-content-centered is-thin is-horizontal is-short">
        <li :class="[currentStep === 0 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 0 && scrollTo('#form-step-0', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 1</p>
          </a>
        </li>

        <li :class="[currentStep === 1 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 1 && scrollTo('#form-step-1', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 2</p>
          </a>
        </li>

        <li :class="[currentStep === 2 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 2 && scrollTo('#form-step-2', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 3</p>
          </a>
        </li>

        <li :class="[currentStep === 3 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 3 && scrollTo('#form-step-3', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 4</p>
          </a>
        </li>

        <li :class="[currentStep === 4 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 4 && scrollTo('#form-step-4', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 5</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="stepper-form">
      <div class="form-sections">
        <div v-if="currentStep >= 0" id="form-step-0" class="form-section is-active">
          <h3 class="form-section-title">
            <span>General Information</span>
            <button
              type="button"
              class="help-button"
              tabindex="0"
              @keydown.space.prevent="
                currentHelp === 0 ? (currentHelp = -1) : (currentHelp = 0)
              "
              @click="currentHelp === 0 ? (currentHelp = -1) : (currentHelp = 0)"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:help-circle"></i>
            </button>
          </h3>

          <div class="form-section-inner">
            <VField>
              <VControl>
                <VInput type="text" placeholder="What is this shipment about?" />
              </VControl>
            </VField>

            <VField>
              <VControl>
                <button type="button" class="input-button">
                  <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
                  <span>Add shipment group</span>
                </button>
              </VControl>
            </VField>

            <div class="fieldset">
              <VField grouped>
                <VControl expanded>
                  <VInput type="text" placeholder="Group name" />
                </VControl>
                <VControl subcontrol>
                  <VSwitchSegment
                    color="primary"
                    label-true="Other"
                    label-false="Ground"
                  />
                </VControl>
              </VField>

              <VField grouped>
                <VControl expanded>
                  <VInput type="text" placeholder="Group description" />
                </VControl>
                <VControl subcontrol>
                  <VCheckbox> Fragile </VCheckbox>
                </VControl>
              </VField>

              <div class="fieldset-separator"></div>

              <VField grouped>
                <VControl expanded>
                  <div class="flex-label">
                    <h4>Control Service</h4>
                  </div>
                </VControl>
                <VControl subcontrol>
                  <VSwitchSegment label-true="ON" label-false="OFF" />
                </VControl>
              </VField>

              <VField>
                <VLabel>Type</VLabel>
                <VControl>
                  <Multiselect
                    v-model="controlType"
                    :options="['X-REF Quality', 'SERPA Check', 'AMF Check']"
                    placeholder="Select a control type"
                  />
                </VControl>
              </VField>

              <VField>
                <VLabel>Additional Notes</VLabel>
                <VControl>
                  <VInput type="text" placeholder="Add some additional notes" />
                </VControl>
              </VField>

              <VField v-slot="{ id }">
                <VLabel>Method</VLabel>
                <VControl>
                  <Multiselect
                    v-model="storageType"
                    :attrs="{ id }"
                    :options="[
                      'LVL 1 Security warehouse',
                      'LVL 2 Security warehouse',
                      'LVL 3 Security warehouse',
                    ]"
                    placeholder="Select a storage"
                  />
                </VControl>
              </VField>

              <VField>
                <VLabel>Quantity (units)</VLabel>
                <VControl>
                  <VInput type="number" placeholder="Enter a quantity" />
                </VControl>
              </VField>

              <VField>
                <VLabel>Duration (days)</VLabel>
                <VControl>
                  <VInput type="number" placeholder="Enter a storage duration" />
                </VControl>
              </VField>

              <VField>
                <div class="buttons">
                  <VButton>Add Shipment</VButton>
                </div>
              </VField>
            </div>
          </div>
          <div class="form-section-output">
            <div class="output">
              <i aria-hidden="true" class="iconify" data-icon="feather:archive"></i>
              <span>15 i9 Laptops - b2</span>
              <div class="action">
                <VIconButton icon="feather:trash-2" />
              </div>
            </div>
          </div>
        </div>

        <Transition name="fade-slow">
          <div v-if="currentStep >= 1" id="form-step-1" class="form-section is-active">
            <h3 class="form-section-title">
              <span>Shipment Owner</span>
              <button
                type="button"
                class="help-button"
                @keydown.space.prevent="
                  currentHelp === 1 ? (currentHelp = -1) : (currentHelp = 1)
                "
                @click="currentHelp === 1 ? (currentHelp = -1) : (currentHelp = 1)"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:help-circle"></i>
              </button>
            </h3>

            <div class="form-section-inner">
              <VField>
                <VControl>
                  <VInput type="text" placeholder="Owning company name" />
                </VControl>
              </VField>

              <VField>
                <VControl>
                  <button type="button" class="input-button">
                    <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
                    <span>Add contact</span>
                  </button>
                </VControl>
              </VField>

              <div class="fieldset">
                <VField grouped>
                  <VControl expanded>
                    <VInput type="text" placeholder="Full name" />
                  </VControl>
                  <VControl subcontrol>
                    <VSwitchSegment label-true="Ground" label-false="Other" />
                  </VControl>
                </VField>

                <VField grouped>
                  <VControl expanded>
                    <VInput type="text" placeholder="Email address" />
                  </VControl>
                  <VControl subcontrol>
                    <VCheckbox> Primary </VCheckbox>
                  </VControl>
                </VField>

                <VField grouped>
                  <VControl expanded>
                    <VInput type="text" placeholder="Phone number" />
                  </VControl>
                  <VControl subcontrol></VControl>
                </VField>
              </div>
            </div>

            <div class="form-section-output">
              <div class="output">
                <i aria-hidden="true" class="iconify" data-icon="feather:user"></i>
                <span>Erik Kovalsky</span>
                <div class="action">
                  <VIconButton icon="feather:trash-2" />
                </div>
              </div>
              <div class="output">
                <i aria-hidden="true" class="iconify" data-icon="feather:user"></i>
                <span>Elsa Walker</span>
                <div class="action">
                  <VIconButton icon="feather:trash-2" />
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <Transition name="fade-slow">
          <div v-if="currentStep >= 2" id="form-step-2" class="form-section is-active">
            <h3 class="form-section-title">
              <span>Shipment Taxes</span>
              <button
                type="button"
                class="help-button"
                @keydown.space.prevent="
                  currentHelp === 2 ? (currentHelp = -1) : (currentHelp = 2)
                "
                @click="currentHelp === 2 ? (currentHelp = -1) : (currentHelp = 2)"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:help-circle"></i>
              </button>
            </h3>

            <div class="form-section-inner">
              <VField>
                <VControl>
                  <VInput type="text" placeholder="Company Tax ID" />
                </VControl>
              </VField>

              <div class="columns">
                <div class="column is-6">
                  <VField>
                    <VControl>
                      <Multiselect
                        v-model="taxType"
                        :options="['VAT', 'RFC', 'SFC']"
                        placeholder="Tax Type"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField>
                    <VControl>
                      <Multiselect
                        v-model="taxStatements"
                        :options="['W-12 Form', 'W-12a Form', 'Z-Form']"
                        placeholder="Tax Statements"
                      />
                    </VControl>
                  </VField>
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <Transition name="fade-slow">
          <div v-if="currentStep >= 3" id="form-step-3" class="form-section is-active">
            <h3 class="form-section-title">
              <span>Options</span>
              <button
                type="button"
                class="help-button"
                @keydown.space.prevent="
                  currentHelp === 3 ? (currentHelp = -1) : (currentHelp = 3)
                "
                @click="currentHelp === 3 ? (currentHelp = -1) : (currentHelp = 3)"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:help-circle"></i>
              </button>
            </h3>

            <div class="form-section-inner">
              <div class="options">
                <VField class="option">
                  <VInput raw type="checkbox" />
                  <div class="indicator">
                    <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-consulting"></i>
                    <h4>Double check</h4>
                    <p>Second control pass</p>
                  </div>
                </VField>

                <VField class="option">
                  <VInput raw type="checkbox" />
                  <div class="indicator">
                    <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-tie"></i>
                    <h4>Agent</h4>
                    <p>Dedicated agent</p>
                  </div>
                </VField>

                <VField class="option">
                  <VInput raw type="checkbox" />
                  <div class="indicator">
                    <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-handshake"></i>
                    <h4>Insurance</h4>
                    <p>Level 1-3 goods</p>
                  </div>
                </VField>

                <VField class="option">
                  <VInput raw type="checkbox" />
                  <div class="indicator">
                    <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-licencse"></i>
                    <h4>Extension</h4>
                    <p>License extension</p>
                  </div>
                </VField>

                <VField class="option">
                  <VInput raw type="checkbox" />
                  <div class="indicator">
                    <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-pie-chart-alt"></i>
                    <h4>BI Reports</h4>
                    <p>Custom made reports</p>
                  </div>
                </VField>

                <VField class="option">
                  <VInput raw type="checkbox" />
                  <div class="indicator">
                    <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-customer"></i>
                    <h4>Metrics</h4>
                    <p>Setup live metrics</p>
                  </div>
                </VField>
              </div>
            </div>
          </div>
        </Transition>

        <Transition name="fade-slow">
          <div v-if="currentStep >= 4" id="form-step-4" class="form-section is-active">
            <h3 class="form-section-title">
              <span>Validation</span>
              <button
                type="button"
                class="help-button"
                @keydown.space.prevent="
                  currentHelp === 4 ? (currentHelp = -1) : (currentHelp = 4)
                "
                @click="currentHelp === 4 ? (currentHelp = -1) : (currentHelp = 4)"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:help-circle"></i>
              </button>
            </h3>
            <div class="form-section-inner">
              <div class="validation-box">
                <div class="box-content">
                  <h3>Excellent</h3>
                  <p>
                    Before submitting the form, make sure you've filled all the required
                    fields. Once submitted, you won't be able to change the info for this
                    shipment.
                  </p>
                </div>
                <div class="box-illustration">
                  <img src="/@src/assets/illustrations/plants/1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Transition>

        <div class="navigation-buttons">
          <div class="buttons is-right">
            <VButton type="submit" color="primary" bold :loading="isLoading" tabindex="0">
              Continue
            </VButton>
          </div>
        </div>
      </div>

      <div class="form-stepper">
        <ul v-if="currentHelp === -1" class="steps is-vertical is-thin is-short">
          <li
            id="step-segment-0"
            role="button"
            :class="[currentStep === 0 && 'is-active']"
            class="steps-segment"
            tabindex="0"
            @keydown.space.prevent="
              currentStep >= 0 && scrollTo('#form-step-0', 800, { offset: -20 })
            "
            @click.prevent="
              currentStep >= 0 && scrollTo('#form-step-0', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 1</p>
              <p class="step-info">General Information</p>
            </div>
          </li>
          <li
            id="step-segment-1"
            :class="[currentStep === 1 && 'is-active']"
            class="steps-segment"
            tabindex="0"
            role="button"
            @keydown.space.prevent="
              currentStep >= 1 && scrollTo('#form-step-1', 800, { offset: -20 })
            "
            @click.prevent="
              currentStep >= 1 && scrollTo('#form-step-1', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 2</p>
              <p class="step-info">Shipment Owner</p>
            </div>
          </li>
          <li
            id="step-segment-2"
            :class="[currentStep === 2 && 'is-active']"
            class="steps-segment"
            tabindex="0"
            role="button"
            @keydown.space.prevent="
              currentStep >= 2 && scrollTo('#form-step-2', 800, { offset: -20 })
            "
            @click.prevent="
              currentStep >= 2 && scrollTo('#form-step-2', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 3</p>
              <p class="step-info">Shipment Taxes</p>
            </div>
          </li>
          <li
            id="step-segment-3"
            :class="[currentStep === 3 && 'is-active']"
            class="steps-segment"
            tabindex="0"
            role="button"
            @keydown.space.prevent="
              currentStep >= 3 && scrollTo('#form-step-3', 800, { offset: -20 })
            "
            @click.prevent="
              currentStep >= 3 && scrollTo('#form-step-3', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 4</p>
              <p class="step-info">Options</p>
            </div>
          </li>
          <li
            id="step-segment-4"
            :class="[currentStep === 4 && 'is-active']"
            class="steps-segment"
            tabindex="0"
            role="button"
            @keydown.space.prevent="
              currentStep >= 4 && scrollTo('#form-step-4', 800, { offset: -20 })
            "
            @click.prevent="
              currentStep >= 4 && scrollTo('#form-step-4', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 5</p>
              <p class="step-info">Validation</p>
            </div>
          </li>
        </ul>
        <div v-else class="form-help">
          <div
            v-if="currentHelp === 0"
            id="help-section-0"
            class="form-help-inner is-active"
          >
            <button
              class="close-help-button"
              tabindex="0"
              @keydown.space.prevent="currentHelp = -1"
              @click="currentHelp = -1"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>General Information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum
              fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis?
              An eiusdem modi? Quae similitudo in genere etiam humano apparet.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="currentHelp === 1"
            id="help-section-1"
            class="form-help-inner is-active"
          >
            <button
              class="close-help-button"
              tabindex="0"
              @keydown.space.prevent="currentHelp = -1"
              @click="currentHelp = -1"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Shipment Owner</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum
              fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis?
              An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="currentHelp === 2"
            id="help-section-2"
            class="form-help-inner is-active"
          >
            <button
              class="close-help-button"
              tabindex="0"
              @keydown.space.prevent="currentHelp = -1"
              @click="currentHelp = -1"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Shipment Taxes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum
              fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis?
              An eiusdem modi? Quae similitudo in genere etiam humano apparet.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="currentHelp === 3"
            id="help-section-3"
            class="form-help-inner is-active"
          >
            <button
              class="close-help-button"
              tabindex="0"
              @keydown.space.prevent="currentHelp = -1"
              @click="currentHelp = -1"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Options</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum
              fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis?
              An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="currentHelp === 4"
            id="help-section-4"
            class="form-help-inner is-active"
          >
            <button
              class="close-help-button"
              tabindex="0"
              @keydown.space.prevent="currentHelp = -1"
              @click="currentHelp = -1"
            >
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Validation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum
              fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis?
              An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
.has-top-nav {
  .stepper-form {
    max-width: 880px;
    margin: 0 auto;
  }
}

.stepper-form {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-top: 3rem;
  margin-bottom: 5rem;

  .form-sections {
    flex-grow: 2;
    max-width: 640px;
    padding-inline-end: 4rem;

    .form-section {
      display: none;

      &.is-active {
        display: block;
      }

      + .form-section {
        margin-top: 4rem;
      }

      .form-section-title {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 1rem;

        button {
          position: relative;
          top: 4px;
          padding: 0;
          height: 18px;
          width: 18px;
          border: none;
          background: none;
          cursor: pointer;
          margin-inline-start: 0.25rem;

          svg {
            height: 18px;
            width: 18px;
            pointer-events: none;
          }
        }
      }

      .fieldset {
        padding: 0.75rem;
        border-radius: 0.5rem;
        border: 1px solid var(--border);
        background: var(--widget-grey-dark-3);

        .fieldset-separator {
          margin: 1.5rem 0;
          border-top: 1px solid var(--border);
        }
      }

      .field {
        > label {
          margin-bottom: 0.25rem;
          display: inline-block;
        }

        > .buttons {
          padding: 2rem 0;
        }
      }

      .flex-label {
        display: flex;
        align-items: center;
        height: 100%;

        h4 {
          font-family: var(--font);
          font-weight: 500;
          color: var(--dark-text);
        }
      }

      .subcontrol {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        min-width: 175px;
        padding-inline-end: 1rem;

        .checkbox {
          padding: 0;
        }
      }

      .input-button {
        height: 44px;
        width: 100%;
        border: 2px dashed var(--border);
        border-radius: 0.65rem;
        background: var(--widget-grey-dark-3);
        display: flex;
        align-items: center;
        padding-inline-start: calc(0.75em - 1px);
        padding-inline-end: calc(0.75em - 1px);
        padding-top: 0;
        padding-bottom: 0;
        color: var(--dark-text);
        cursor: pointer;
        transition: color 0.3s, background-color 0.3s, border 0.3s, box-shadow 0.3s;

        &:focus-visible {
          outline-offset: var(--accessibility-focus-outline-offset);
          outline-width: var(--accessibility-focus-outline-width);
          outline-style: var(--accessibility-focus-outline-style);
          outline-color: var(--accessibility-focus-outline-color);
        }

        &:hover {
          background: var(--white);
          border: 2px solid var(--primary);
          color: var(--primary);
          box-shadow: var(--light-box-shadow);
        }

        svg {
          height: 18px;
          width: 16px;
        }

        span {
          font-family: var(--font);
          margin-inline-start: 0.75rem;
        }
      }

      .options {
        display: flex;
        flex-wrap: wrap;
        margin-inline-start: -0.5rem;
        margin-inline-end: -0.5rem;

        .option {
          position: relative;
          width: calc(33.3% - 1rem);
          margin: 0.5rem;

          &:focus-within {
            border-radius: 4px;
            outline-offset: var(--accessibility-focus-outline-offset);
            outline-width: var(--accessibility-focus-outline-width);
            outline-style: var(--accessibility-focus-outline-style);
            outline-color: var(--accessibility-focus-outline-color);
          }

          input {
            position: absolute;
            top: 0;
            inset-inline-start: 0;
            height: 100%;
            width: 100%;
            z-index: 1;
            opacity: 0;
            cursor: pointer;

            &:checked {
              ~ .indicator {
                transform: scale(1);
              }

              ~ .option-inner {
                border-color: var(--primary);
                box-shadow: var(--light-box-shadow);

                i {
                  color: var(--primary);
                }
              }
            }
          }

          .indicator {
            position: absolute;
            top: 1rem;
            inset-inline-end: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            width: 20px;
            color: var(--white);
            background: var(--primary);
            border-radius: 50%;
            transform: scale(0);
            transition: transform 0.3s;

            svg {
              height: 14px;
              width: 14px;
              stroke-width: 3px;
            }
          }

          .option-inner {
            padding: 1.5rem;
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            transition: border 0.3s, box-shadow 0.3s;

            h4 {
              color: var(--dark-text);
              font-weight: 600;
              font-family: var(--font-alt);
            }

            p {
              font-size: 0.9rem;
            }

            i {
              font-size: 2.25rem;
              color: var(--light-text);
              margin-bottom: 0.25rem;
            }
          }
        }
      }

      .validation-box {
        display: flex;
        padding: 2rem;
        background: var(--white);
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        transition: border 0.3s, box-shadow 0.3s;

        .box-content {
          h3 {
            font-family: var(--font-alt);
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
          }

          p {
            font-size: 1rem;
          }
        }

        .box-illustration {
          position: relative;
          height: 100px;
          min-width: 40%;

          img {
            position: absolute;
            inset-inline-end: 0;
            bottom: 0;
            max-height: 180px;
          }
        }
      }

      .form-section-output {
        margin-top: 1.5rem;

        .output {
          height: 52px;
          width: 100%;
          border: 1px solid var(--border);
          border-radius: 0.65rem;
          background: var(--white);
          display: flex;
          align-items: center;
          padding-inline-start: calc(1em - 1px);
          padding-inline-end: calc(1em - 1px);
          padding-top: 0;
          padding-bottom: 0;
          color: var(--dark-text);
          cursor: pointer;
          transition: color 0.3s, background-color 0.3s, border 0.3s, box-shadow 0.3s;

          &:not(:last-child) {
            margin-bottom: 1rem;
          }

          > svg {
            height: 18px;
            width: 18px;
            margin-inline-end: 0.75rem;
            color: var(--light-text);
          }

          > span {
            font-weight: 500;
            font-family: var(--font);
            color: var(--dark-text);
          }

          .action {
            margin-inline-start: auto;

            button {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 38px;
              width: 38px;
              min-width: 38px;
              background: none;
              border: none;
              padding: 0;
              cursor: pointer;
              border-radius: 0.5rem;
              transition: background-color 0.3s;

              &:hover,
              &:focus {
                background: var(--widget-grey-dark-1);
              }

              svg {
                height: 18px;
                width: 18px;
                stroke-width: 1.5px;
              }
            }
          }
        }
      }
    }

    .navigation-buttons {
      padding: 2rem 0;

      .button {
        min-height: 52px;
        min-width: 160px;
      }
    }
  }

  .form-stepper {
    position: sticky;
    top: -30px;
    padding-top: 50px;

    .form-help {
      position: relative;
      max-width: 300px;
      padding: 1.75rem;
      border: 1px solid var(--border);
      border-radius: 0.65rem;
      background: var(--white);

      .form-help-inner {
        display: none;

        &.is-active {
          display: block;
        }
      }

      h3 {
        font-family: var(--font-alt);
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      button {
        position: absolute;
        top: 1rem;
        inset-inline-end: 1rem;
        padding: 0;
        height: 18px;
        width: 18px;
        border: none;
        background: none;
        cursor: pointer;
        margin-inline-start: 0.25rem;

        svg {
          height: 18px;
          width: 18px;
          pointer-events: none;
        }
      }

      .list-wrap {
        padding: 0.75rem 0;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 0.15rem;

          span {
            font-family: var(--font);
            color: var(--light-text);
            font-weight: 300;
          }

          svg {
            height: 14px;
            width: 14px;
            stroke-width: 3px;
            margin-inline-end: 0.45rem;
            color: var(--primary);
          }
        }
      }
    }

    .step-number {
      font-family: var(--font);
      font-weight: 500;
      font-size: 0.75rem !important;
    }

    .steps:not(.is-hollow) .steps-segment.is-active ~ .steps-segment {
      cursor: default !important;
    }

    .steps:not(.is-hollow) .steps-segment {
      cursor: pointer !important;
    }

    .steps-segment {
      &.is-active {
        .step-info {
          color: var(--dark-text);
          font-weight: 600;
        }
      }
    }
  }
}

.mobile-steps {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 60px;
  inset-inline-start: 0;
  height: 65px;
  width: 100%;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  z-index: 25;
  transform: translateY(-100%);
  transition: transform 0.3s;

  &.is-active {
    transform: translateY(0);
  }

  .steps {
    position: relative;
    top: 10px;
  }

  .steps-segment {
    &.is-active {
      .steps-content {
        opacity: 1 !important;
      }
    }

    .steps-content {
      opacity: 0 !important;
      display: block;
    }
  }
}

.is-dark {
  .stepper-form {
    .form-sections {
      .form-section {
        .form-section-title {
          span {
            color: var(--dark-dark-text);
          }

          svg {
            color: var(--dark-dark-text);
          }
        }

        .input-button {
          background-color: var(--dark-sidebar-light-2) !important;
          border-color: var(--dark-sidebar-light-12) !important;
          color: var(--dark-dark-text);

          &:hover,
          &:focus {
            color: var(--primary);
            border: 2px solid var(--primary) !important;
          }
        }

        .fieldset {
          background: var(--dark-sidebar-dark-2);
          border-color: var(--dark-sidebar-light-12);
        }

        .fieldset-separator {
          border-color: var(--dark-sidebar-light-12);
        }

        .flex-label h4 {
          color: var(--dark-dark-text);
        }

        .options {
          .option {
            .indicator {
              background: var(--primary);
            }

            input {
              &:checked {
                ~ .indicator {
                  transform: scale(1);
                }

                ~ .option-inner {
                  border-color: var(--primary) !important;

                  i {
                    color: var(--primary);
                  }
                }
              }
            }

            .option-inner {
              background-color: var(--dark-sidebar-light-2) !important;
              border-color: var(--dark-sidebar-light-12) !important;

              h4 {
                color: var(--dark-dark-text);
              }
            }
          }
        }

        .validation-box {
          background-color: var(--dark-sidebar-light-2) !important;
          border-color: var(--dark-sidebar-light-12) !important;

          .box-content h3 {
            color: var(--dark-dark-text);
          }
        }

        .form-section-output {
          .output {
            background-color: var(--dark-sidebar-light-2) !important;
            border-color: var(--dark-sidebar-light-12) !important;
            color: var(--dark-dark-text);

            > span {
              color: var(--dark-dark-text);
            }

            .action {
              button {
                &:hover {
                  background: var(--dark-sidebar-light-5);
                }

                svg {
                  color: var(--light-text);
                }
              }
            }
          }
        }
      }
    }

    .form-stepper {
      .steps {
        &:not(.is-hollow) {
          .steps-marker:not(.is-hollow) {
            background-color: var(--primary);
          }
        }

        .steps-segment {
          &.is-active {
            ~ .steps-segment::after {
              background: var(--dark-sidebar-dark-5);
            }

            ~ .steps-segment {
              .steps-marker:not(.is-hollow) {
                background: var(--dark-sidebar-dark-5);
              }
            }

            &::after {
              background: var(--dark-sidebar-dark-5);
            }

            .steps-content {
              .step-info {
                color: var(--dark-dark-text);
              }
            }
          }

          &::after {
            background-color: var(--primary);
          }
        }
      }
    }
  }
}

@media (width <= 767px) {
  .mobile-steps {
    display: flex;
  }

  .stepper-form {
    padding-top: 0;

    .form-sections {
      padding-inline-end: 0;
      overflow: hidden;

      .form-section {
        .form-section-title {
          button {
            display: none;
          }
        }

        .subcontrol {
          min-width: 138px;
        }

        .options {
          .option {
            width: calc(50% - 1rem);
          }
        }

        .validation-box {
          .box-illustration {
            min-width: 30%;

            img {
              inset-inline-end: -34px;
              bottom: -28px;
            }
          }
        }
      }
    }

    .form-stepper {
      display: none;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .stepper-form {
    padding-top: 0;

    .form-sections {
      max-width: 500px;
    }

    .form-stepper {
      top: 40px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .stepper-form {
    padding-top: 0;

    .form-stepper {
      .form-help {
        inset-inline-end: 2rem;
      }
    }
  }
}
</style>
