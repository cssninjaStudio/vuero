<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import useNotyf from '/@src/composable/useNotyf'
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

    router.push({
      name: 'sidebar-dashboards',
    })
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
  <div>
    <div class="mobile-steps is-active">
      <ul class="steps has-content-centered is-thin is-horizontal is-short">
        <li :class="[currentStep === 0 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 0 &&
                scrollTo('#form-step-0', 800, { offset: -150 })
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
              currentStep >= 1 &&
                scrollTo('#form-step-1', 800, { offset: -150 })
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
              currentStep >= 2 &&
                scrollTo('#form-step-2', 800, { offset: -150 })
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
              currentStep >= 3 &&
                scrollTo('#form-step-3', 800, { offset: -150 })
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
              currentStep >= 4 &&
                scrollTo('#form-step-4', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 5</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="stepper-form">
      <div class="form-sections">
        <div
          v-if="currentStep >= 0"
          id="form-step-0"
          class="form-section is-active"
        >
          <h3 class="form-section-title">
            <span>General Information</span>
            <button
              class="help-button"
              @click="
                currentHelp === 0 ? (currentHelp = -1) : (currentHelp = 0)
              "
            >
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:help-circle"
              ></i>
            </button>
          </h3>

          <div class="form-section-inner">
            <V-Field>
              <V-Control>
                <input
                  type="text"
                  class="input"
                  placeholder="What is this shipment about?"
                />
              </V-Control>
            </V-Field>

            <V-Field>
              <V-Control>
                <button class="input-button">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:plus"
                  ></i>
                  <span>Add shipment group</span>
                </button>
              </V-Control>
            </V-Field>

            <div class="fieldset">
              <V-Field grouped>
                <V-Control expanded>
                  <input type="text" class="input" placeholder="Group name" />
                </V-Control>
                <V-Control subcontrol>
                  <V-SwitchSegment
                    color="primary"
                    label-true="Other"
                    label-false="Ground"
                  />
                </V-Control>
              </V-Field>

              <V-Field grouped>
                <V-Control expanded>
                  <input
                    type="text"
                    class="input"
                    placeholder="Group description"
                  />
                </V-Control>
                <V-Control subcontrol>
                  <label class="checkbox">
                    <input type="checkbox" checked />
                    <span></span>
                    Fragile
                  </label>
                </V-Control>
              </V-Field>

              <div class="fieldset-separator"></div>

              <V-Field grouped>
                <V-Control expanded>
                  <div class="flex-label">
                    <h4>Control Service</h4>
                  </div>
                </V-Control>
                <V-Control subcontrol>
                  <V-SwitchSegment label-true="ON" label-false="OFF" />
                </V-Control>
              </V-Field>

              <V-Field>
                <label>Type</label>
                <V-Control>
                  <Multiselect
                    v-model="controlType"
                    :options="['X-REF Quality', 'SERPA Check', 'AMF Check']"
                    placeholder="Select a control type"
                  />
                </V-Control>
              </V-Field>

              <V-Field>
                <label>Additional Notes</label>
                <V-Control>
                  <input
                    type="text"
                    class="input"
                    placeholder="Add some additional notes"
                  />
                </V-Control>
              </V-Field>

              <V-Field>
                <label>Method</label>
                <V-Control>
                  <Multiselect
                    v-model="storageType"
                    :options="[
                      'LVL 1 Security warehouse',
                      'LVL 2 Security warehouse',
                      'LVL 3 Security warehouse',
                    ]"
                    placeholder="Select a storage"
                  />
                </V-Control>
              </V-Field>

              <V-Field>
                <label>Quantity (units)</label>
                <V-Control>
                  <input
                    type="number"
                    class="input"
                    placeholder="Enter a quantity"
                  />
                </V-Control>
              </V-Field>

              <V-Field>
                <label>Duration (days)</label>
                <V-Control>
                  <input
                    type="number"
                    class="input"
                    placeholder="Enter a storage duration"
                  />
                </V-Control>
              </V-Field>

              <V-Field>
                <div class="buttons">
                  <V-Button>Add Shipment</V-Button>
                </div>
              </V-Field>
            </div>
          </div>
          <div class="form-section-output">
            <div class="output">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:archive"
              ></i>
              <span>15 i9 Laptops - b2</span>
              <div class="action">
                <V-IconButton icon="feather:trash-2" />
              </div>
            </div>
          </div>
        </div>

        <transition name="fade-slow">
          <div
            v-if="currentStep >= 1"
            id="form-step-1"
            class="form-section is-active"
          >
            <h3 class="form-section-title">
              <span>Shipment Owner</span>
              <button
                class="help-button"
                @click="
                  currentHelp === 1 ? (currentHelp = -1) : (currentHelp = 1)
                "
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:help-circle"
                ></i>
              </button>
            </h3>

            <div class="form-section-inner">
              <V-Field>
                <V-Control>
                  <input
                    type="text"
                    class="input"
                    placeholder="Owning company name"
                  />
                </V-Control>
              </V-Field>

              <V-Field>
                <V-Control>
                  <button class="input-button">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:plus"
                    ></i>
                    <span>Add contact</span>
                  </button>
                </V-Control>
              </V-Field>

              <div class="fieldset">
                <V-Field grouped>
                  <V-Control expanded>
                    <input type="text" class="input" placeholder="Full name" />
                  </V-Control>
                  <V-Control subcontrol>
                    <V-SwitchSegment label-true="Ground" label-false="Other" />
                  </V-Control>
                </V-Field>

                <V-Field grouped>
                  <V-Control expanded>
                    <input
                      type="text"
                      class="input"
                      placeholder="Email address"
                    />
                  </V-Control>
                  <V-Control subcontrol>
                    <label class="checkbox">
                      <input type="checkbox" checked />
                      <span></span>
                      Primary
                    </label>
                  </V-Control>
                </V-Field>

                <V-Field grouped>
                  <V-Control expanded>
                    <input
                      type="text"
                      class="input"
                      placeholder="Phone number"
                    />
                  </V-Control>
                  <V-Control subcontrol></V-Control>
                </V-Field>
              </div>
            </div>

            <div class="form-section-output">
              <div class="output">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:user"
                ></i>
                <span>Erik Kovalsky</span>
                <div class="action">
                  <V-IconButton icon="feather:trash-2" />
                </div>
              </div>
              <div class="output">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:user"
                ></i>
                <span>Elsa Walker</span>
                <div class="action">
                  <V-IconButton icon="feather:trash-2" />
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade-slow">
          <div
            v-if="currentStep >= 2"
            id="form-step-2"
            class="form-section is-active"
          >
            <h3 class="form-section-title">
              <span>Shipment Taxes</span>
              <button
                class="help-button"
                @click="
                  currentHelp === 2 ? (currentHelp = -1) : (currentHelp = 2)
                "
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:help-circle"
                ></i>
              </button>
            </h3>

            <div class="form-section-inner">
              <V-Field>
                <V-Control>
                  <input
                    type="text"
                    class="input"
                    placeholder="Company Tax ID"
                  />
                </V-Control>
              </V-Field>

              <div class="columns">
                <div class="column is-6">
                  <V-Field>
                    <V-Control>
                      <Multiselect
                        v-model="taxType"
                        :options="['VAT', 'RFC', 'SFC']"
                        placeholder="Tax Type"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-6">
                  <V-Field>
                    <V-Control>
                      <Multiselect
                        v-model="taxStatements"
                        :options="['W-12 Form', 'W-12a Form', 'Z-Form']"
                        placeholder="Tax Statements"
                      />
                    </V-Control>
                  </V-Field>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade-slow">
          <div
            v-if="currentStep >= 3"
            id="form-step-3"
            class="form-section is-active"
          >
            <h3 class="form-section-title">
              <span>Options</span>
              <button
                class="help-button"
                @click="
                  currentHelp === 3 ? (currentHelp = -1) : (currentHelp = 3)
                "
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:help-circle"
                ></i>
              </button>
            </h3>

            <div class="form-section-inner">
              <div class="options">
                <div class="option">
                  <input type="checkbox" />
                  <div class="indicator">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:check"
                    ></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-consulting"></i>
                    <h4>Double check</h4>
                    <p>Second control pass</p>
                  </div>
                </div>

                <div class="option">
                  <input type="checkbox" />
                  <div class="indicator">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:check"
                    ></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-tie"></i>
                    <h4>Agent</h4>
                    <p>Dedicated agent</p>
                  </div>
                </div>

                <div class="option">
                  <input type="checkbox" />
                  <div class="indicator">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:check"
                    ></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-handshake"></i>
                    <h4>Insurance</h4>
                    <p>Level 1-3 goods</p>
                  </div>
                </div>

                <div class="option">
                  <input type="checkbox" />
                  <div class="indicator">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:check"
                    ></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-licencse"></i>
                    <h4>Extension</h4>
                    <p>License extension</p>
                  </div>
                </div>

                <div class="option">
                  <input type="checkbox" />
                  <div class="indicator">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:check"
                    ></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-pie-chart-alt"></i>
                    <h4>BI Reports</h4>
                    <p>Custom made reports</p>
                  </div>
                </div>

                <div class="option">
                  <input type="checkbox" />
                  <div class="indicator">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:check"
                    ></i>
                  </div>
                  <div class="option-inner">
                    <i aria-hidden="true" class="lnil lnil-customer"></i>
                    <h4>Metrics</h4>
                    <p>Setup live metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade-slow">
          <div
            v-if="currentStep >= 4"
            id="form-step-4"
            class="form-section is-active"
          >
            <h3 class="form-section-title">
              <span>Validation</span>
              <button
                class="help-button"
                @click="
                  currentHelp === 4 ? (currentHelp = -1) : (currentHelp = 4)
                "
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:help-circle"
                ></i>
              </button>
            </h3>
            <div class="form-section-inner">
              <div class="validation-box">
                <div class="box-content">
                  <h3>Excellent</h3>
                  <p>
                    Before submitting the form, make sure you've filled all the
                    required fields. Once submitted, you won't be able to change
                    the info for this shipment.
                  </p>
                </div>
                <div class="box-illustration">
                  <img src="/@src/assets/illustrations/plants/1.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="navigation-buttons">
          <div class="buttons is-right">
            <V-Button
              color="primary"
              bold
              :loading="isLoading"
              @click="validateStep"
            >
              Continue
            </V-Button>
          </div>
        </div>
      </div>
      <div class="form-stepper">
        <ul
          v-if="currentHelp === -1"
          class="steps is-vertical is-thin is-short"
        >
          <li
            id="step-segment-0"
            :class="[currentStep === 0 && 'is-active']"
            class="steps-segment"
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
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>General Information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere
              etiam humano apparet.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Shipment Owner</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Shipment Taxes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere
              etiam humano apparet.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Options</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Validation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_forms-stepper.scss';
</style>
