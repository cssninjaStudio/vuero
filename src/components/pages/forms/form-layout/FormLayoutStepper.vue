<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
</script>

<template>
  <div class="stepper-form">
    <div class="form-sections">
      <div id="form-step-0" class="form-section is-active">
        <h3 class="form-section-title">
          <span>General Information</span>
          <button class="help-button" data-help="help-section-0">
            <i class="iconify" data-icon="feather:help-circle"></i>
          </button>
        </h3>
        <div class="form-section-inner">
          <div class="field">
            <div class="control">
              <input
                type="text"
                class="input"
                placeholder="What is this shipment about?"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="input-button">
                <i class="iconify" data-icon="feather:plus"></i>
                <span>Add shipment group</span>
              </button>
            </div>
          </div>
          <div class="fieldset">
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input type="text" class="input" placeholder="Group name" />
              </div>
              <div class="control subcontrol">
                <div class="switch-segment">
                  <span>Ground</span>
                  <label class="form-switch is-primary">
                    <input type="checkbox" class="is-switch" />
                    <i></i>
                  </label>
                  <span>Other</span>
                </div>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input
                  type="text"
                  class="input"
                  placeholder="Group description"
                />
              </div>
              <div class="control subcontrol">
                <label class="checkbox">
                  <input type="checkbox" checked />
                  <span></span>
                  Fragile
                </label>
              </div>
            </div>
            <div class="fieldset-separator"></div>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <div class="flex-label">
                  <h4>Control Service</h4>
                </div>
              </div>
              <div class="control subcontrol">
                <div class="switch-segment">
                  <span>ON</span>
                  <label class="form-switch is-primary">
                    <input type="checkbox" class="is-switch" />
                    <i></i>
                  </label>
                  <span>OFF</span>
                </div>
              </div>
            </div>
            <div class="field">
              <label>Type</label>
              <div class="control">
                <div class="h-select">
                  <div class="select-box">
                    <span>Select a control type</span>
                  </div>
                  <div class="select-icon">
                    <i class="iconify" data-icon="feather:chevron-down"></i>
                  </div>
                  <div class="select-drop has-slimscroll-sm">
                    <div class="drop-inner">
                      <div class="option-row">
                        <input type="radio" name="type_select" />
                        <div class="option-meta">
                          <span>X-REF Quality</span>
                        </div>
                      </div>
                      <div class="option-row">
                        <input type="radio" name="type_select" />
                        <div class="option-meta">
                          <span>SERPA Check</span>
                        </div>
                      </div>
                      <div class="option-row">
                        <input type="radio" name="type_select" />
                        <div class="option-meta">
                          <span>AMF Check</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label>Additional Notes</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  placeholder="Add some additional notes"
                />
              </div>
            </div>
            <div class="field">
              <label>Method</label>
              <div class="control">
                <div class="h-select">
                  <div class="select-box">
                    <span>Select a storage</span>
                  </div>
                  <div class="select-icon">
                    <i class="iconify" data-icon="feather:chevron-down"></i>
                  </div>
                  <div class="select-drop has-slimscroll-sm">
                    <div class="drop-inner">
                      <div class="option-row">
                        <input type="radio" name="method_select" />
                        <div class="option-meta">
                          <span>LVL 1 Security warehouse</span>
                        </div>
                      </div>
                      <div class="option-row">
                        <input type="radio" name="method_select" />
                        <div class="option-meta">
                          <span>LVL 2 Security warehouse</span>
                        </div>
                      </div>
                      <div class="option-row">
                        <input type="radio" name="method_select" />
                        <div class="option-meta">
                          <span>LVL 3 Security warehouse</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label>Quantity (units)</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  placeholder="Enter a quantity"
                />
              </div>
            </div>
            <div class="field">
              <label>Duration (days)</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  placeholder="Enter a storage duration"
                />
              </div>
            </div>
            <div class="field">
              <div class="buttons">
                <button class="button h-button">Add Shipment</button>
              </div>
            </div>
          </div>
        </div>
        <div class="form-section-output">
          <div class="output">
            <i class="iconify" data-icon="feather:archive"></i>
            <span>15 i9 Laptops - b2</span>
            <div class="action">
              <button>
                <i class="iconify" data-icon="feather:trash-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="form-step-1" class="form-section">
        <h3 class="form-section-title">
          <span>Shipment Owner</span>
          <button class="help-button" data-help="help-section-1">
            <i class="iconify" data-icon="feather:help-circle"></i>
          </button>
        </h3>

        <div class="form-section-inner">
          <div class="field">
            <div class="control">
              <input
                type="text"
                class="input"
                placeholder="Owning company name"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="input-button">
                <i class="iconify" data-icon="feather:plus"></i>
                <span>Add contact</span>
              </button>
            </div>
          </div>
          <div class="fieldset">
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input type="text" class="input" placeholder="Full name" />
              </div>
              <div class="control subcontrol">
                <div class="switch-segment">
                  <span>Ground</span>
                  <label class="form-switch is-primary">
                    <input type="checkbox" class="is-switch" />
                    <i></i>
                  </label>
                  <span>Other</span>
                </div>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input type="text" class="input" placeholder="Email address" />
              </div>
              <div class="control subcontrol">
                <label class="checkbox">
                  <input type="radio" />
                  <span></span>
                  Primary
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input type="text" class="input" placeholder="Phone number" />
              </div>
              <div class="control subcontrol"></div>
            </div>
          </div>
        </div>
        <div class="form-section-output">
          <div class="output">
            <i class="iconify" data-icon="feather:user"></i>
            <span>Erik Kovalsky</span>
            <div class="action">
              <button>
                <i class="iconify" data-icon="feather:trash-2"></i>
              </button>
            </div>
          </div>
          <div class="output">
            <i class="iconify" data-icon="feather:user"></i>
            <span>Elsa Walker</span>
            <div class="action">
              <button>
                <i class="iconify" data-icon="feather:trash-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="form-step-2" class="form-section">
        <h3 class="form-section-title">
          <span>Shipment Taxes</span>
          <button class="help-button" data-help="help-section-2">
            <i class="iconify" data-icon="feather:help-circle"></i>
          </button>
        </h3>
        <div class="form-section-inner">
          <div class="field">
            <div class="control">
              <input type="text" class="input" placeholder="Company Tax ID" />
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Tax Type</span>
                    </div>
                    <div class="select-icon">
                      <i class="iconify" data-icon="feather:chevron-down"></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="tax_type_select" />
                          <div class="option-meta">
                            <span>VAT</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="tax_type_select" />
                          <div class="option-meta">
                            <span>RFC</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="tax_type_select" />
                          <div class="option-meta">
                            <span>SFC</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <div class="control">
                  <div class="h-select">
                    <div class="select-box">
                      <span>Tax Statements</span>
                    </div>
                    <div class="select-icon">
                      <i class="iconify" data-icon="feather:chevron-down"></i>
                    </div>
                    <div class="select-drop has-slimscroll-sm">
                      <div class="drop-inner">
                        <div class="option-row">
                          <input type="radio" name="statement_select" />
                          <div class="option-meta">
                            <span>W-12 Form</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="statement_select" />
                          <div class="option-meta">
                            <span>W-12a Form</span>
                          </div>
                        </div>
                        <div class="option-row">
                          <input type="radio" name="statement_select" />
                          <div class="option-meta">
                            <span>Z-Form</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="form-step-3" class="form-section">
        <h3 class="form-section-title">
          <span>Options</span>
          <button class="help-button" data-help="help-section-3">
            <i class="iconify" data-icon="feather:help-circle"></i>
          </button>
        </h3>
        <div class="form-section-inner">
          <div class="options">
            <div class="option">
              <input type="checkbox" />
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="option-inner">
                <i class="lnil lnil-consulting"></i>
                <h4>Double check</h4>
                <p>Second control pass</p>
              </div>
            </div>
            <div class="option">
              <input type="checkbox" />
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="option-inner">
                <i class="lnil lnil-tie"></i>
                <h4>Agent</h4>
                <p>Dedicated agent</p>
              </div>
            </div>
            <div class="option">
              <input type="checkbox" />
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="option-inner">
                <i class="lnil lnil-handshake"></i>
                <h4>Insurance</h4>
                <p>Level 1-3 goods</p>
              </div>
            </div>
            <div class="option">
              <input type="checkbox" />
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="option-inner">
                <i class="lnil lnil-licencse"></i>
                <h4>Extension</h4>
                <p>License extension</p>
              </div>
            </div>
            <div class="option">
              <input type="checkbox" />
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="option-inner">
                <i class="lnil lnil-pie-chart-alt"></i>
                <h4>BI Reports</h4>
                <p>Custom made reports</p>
              </div>
            </div>
            <div class="option">
              <input type="checkbox" />
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
              <div class="option-inner">
                <i class="lnil lnil-customer"></i>
                <h4>Metrics</h4>
                <p>Setup live metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="form-step-4" class="form-section">
        <h3 class="form-section-title">
          <span>Validation</span>
          <button class="help-button" data-help="help-section-4">
            <i class="iconify" data-icon="feather:help-circle"></i>
          </button>
        </h3>
        <div class="form-section-inner">
          <div class="validation-box">
            <div class="box-content">
              <h3>Excellent</h3>
              <p>
                Before submitting the form, make sure you've filled all the
                required fields. Once submitted, you won't be able to change the
                info for this shipment.
              </p>
            </div>
            <div class="box-illustration">
              <img src="/@src/assets/illustrations/plants/1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="navigation-buttons">
        <div class="buttons is-right">
          <button id="next-button" class="button h-button is-primary is-bold">
            Continue
          </button>
        </div>
      </div>
    </div>
    <div class="form-stepper">
      <ul class="steps is-vertical is-thin is-short">
        <li id="step-segment-0" class="steps-segment is-active">
          <a href="#" class="steps-marker"></a>
          <div class="steps-content">
            <p class="step-number">STEP 1</p>
            <p class="step-info">General Information</p>
          </div>
        </li>
        <li id="step-segment-1" class="steps-segment">
          <a href="#" class="steps-marker"></a>
          <div class="steps-content">
            <p class="step-number">STEP 2</p>
            <p class="step-info">Shipment Owner</p>
          </div>
        </li>
        <li id="step-segment-2" class="steps-segment">
          <a class="steps-marker"></a>
          <div class="steps-content">
            <p class="step-number">STEP 3</p>
            <p class="step-info">Shipment Taxes</p>
          </div>
        </li>
        <li id="step-segment-3" class="steps-segment">
          <a class="steps-marker"></a>
          <div class="steps-content">
            <p class="step-number">STEP 4</p>
            <p class="step-info">Options</p>
          </div>
        </li>
        <li id="step-segment-4" class="steps-segment">
          <a class="steps-marker"></a>
          <div class="steps-content">
            <p class="step-number">STEP 5</p>
            <p class="step-info">Validation</p>
          </div>
        </li>
      </ul>
      <div class="form-help is-hidden">
        <div id="help-section-0" class="form-help-inner is-active">
          <button class="close-help-button">
            <i class="iconify" data-icon="feather:x"></i>
          </button>
          <h3>General Information</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
            proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
            videmus in musicis? An eiusdem modi? Quae similitudo in genere etiam
            humano apparet.
          </p>
          <div class="list-wrap">
            <ul>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="help-section-1" class="form-help-inner">
          <button class="close-help-button">
            <i class="iconify" data-icon="feather:x"></i>
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
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="help-section-2" class="form-help-inner is-active">
          <button class="close-help-button">
            <i class="iconify" data-icon="feather:x"></i>
          </button>
          <h3>Shipment Taxes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
            proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
            videmus in musicis? An eiusdem modi? Quae similitudo in genere etiam
            humano apparet.
          </p>
          <div class="list-wrap">
            <ul>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="help-section-3" class="form-help-inner">
          <button class="close-help-button">
            <i class="iconify" data-icon="feather:x"></i>
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
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="help-section-4" class="form-help-inner">
          <button class="close-help-button">
            <i class="iconify" data-icon="feather:x"></i>
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
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
              <li>
                <i class="iconify" data-icon="feather:check"></i>
                <span>Some nice list item</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../assets/scss/abstracts/_variables.scss';
@import '../../../../assets/scss/abstracts/_mixins.scss';
@import '../../../../assets/scss/pages/generic/_forms-stepper.scss';
</style>
