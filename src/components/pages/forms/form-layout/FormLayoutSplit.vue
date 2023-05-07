<script setup lang="ts">
const bankAccount = ref('')
const transferFees = ref('')

const { y } = useWindowScroll()

const isStuck = computed(() => {
  return y.value > 30
})
const onSubmit = () => {
  console.log('Form submitted!')
}
</script>

<template>
  <form class="form-layout is-split" @submit.prevent="onSubmit">
    <div class="form-outer">
      <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
        <div class="form-header-inner">
          <div class="left">
            <h3>Request Payout</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <VButton
                icon="lnir lnir-arrow-left rem-100"
                to="/sidebar/layouts/profile-view"
                light
                dark-outlined
              >
                Cancel
              </VButton>
              <VButton type="submit" color="primary" raised> Request Payout </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <div class="form-section">
          <div class="left">
            <h3 class="has-text-centered">Choose an amount</h3>
            <div class="operator">
              <span>Or</span>
            </div>
            <VField>
              <VControl>
                <div class="radio-pills">
                  <div class="radio-pill">
                    <input type="radio" name="amount_selection" :value="20" />
                    <div class="radio-pill-inner">
                      <span>$20</span>
                    </div>
                  </div>
                  <div class="radio-pill">
                    <input type="radio" name="amount_selection" :value="40" />
                    <div class="radio-pill-inner">
                      <span>$40</span>
                    </div>
                  </div>
                  <div class="radio-pill">
                    <input type="radio" name="amount_selection" :value="60" />
                    <div class="radio-pill-inner">
                      <span>$60</span>
                    </div>
                  </div>
                  <div class="radio-pill">
                    <input type="radio" name="amount_selection" :value="100" />
                    <div class="radio-pill-inner">
                      <span>$100</span>
                    </div>
                  </div>
                </div>
              </VControl>
            </VField>
          </div>
          <div class="right">
            <h3 class="has-text-centered">Enter your own</h3>
            <VField>
              <VControl icon="feather:dollar-sign">
                <VInput type="number" min="0" step="10" placeholder="Amount..." />
              </VControl>
            </VField>
          </div>
        </div>
        <div class="form-section is-grey">
          <div class="left">
            <h3>Personal Info</h3>
            <VField>
              <VControl icon="feather:user">
                <VInput
                  type="text"
                  placeholder="First Name *"
                  autocomplete="given-name"
                />
              </VControl>
            </VField>
            <VField>
              <VControl icon="feather:user">
                <VInput
                  type="text"
                  placeholder="Last Name *"
                  autocomplete="family-name"
                />
              </VControl>
            </VField>
            <VField>
              <VControl icon="feather:mail">
                <VInput
                  type="email"
                  placeholder="Email Address *"
                  autocomplete="email"
                  inputmode="email"
                />
              </VControl>
            </VField>
            <VField>
              <VControl icon="feather:phone">
                <VInput
                  type="tel"
                  placeholder="Phone Number *"
                  autocomplete="tel"
                  inputmode="tel"
                />
              </VControl>
            </VField>
          </div>
          <div class="right">
            <h3>Payout Details</h3>

            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="bankAccount"
                  :attrs="{ id }"
                  placeholder="Bank Account"
                  :options="['AMEX **** 42', 'HSBC **** 29']"
                />
              </VControl>
            </VField>

            <VField v-slot="{ id }">
              <VControl>
                <Multiselect
                  v-model="transferFees"
                  :attrs="{ id }"
                  placeholder="Bank Account"
                  :options="['Super Fast - $3.00', 'Regular - $0.50']"
                />
              </VControl>
            </VField>

            <VField v-slot="{ id }">
              <VLabel>Notify me when funds are ready?</VLabel>
              <VControl>
                <VRadio :id="id" name="notify-me" color="primary" value="yes">Yes</VRadio>
                <VRadio name="notify-me" value="no">No</VRadio>
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/components/forms-outer';

.is-navbar {
  .form-layout {
    margin-top: 30px;
  }
}

.form-layout {
  max-width: 740px;
  margin: 0 auto;

  &.is-split {
    max-width: 840px;

    .form-outer {
      .form-body {
        padding: 0;

        .form-section {
          display: flex;
          padding: 20px;

          &.is-grey {
            background: #fafafa;
          }

          .left,
          .right {
            padding: 20px 40px;
            width: 50%;

            h3 {
              font-family: var(--font-alt);
              font-weight: 600;
              font-size: 0.95rem;
              color: var(--dark-text);
              margin-bottom: 20px;
            }
          }

          .left {
            position: relative;
            border-inline-end: 1px solid var(--fade-grey-dark-3);

            .operator {
              position: absolute;
              top: 17px;
              inset-inline-end: -10px;
              text-transform: uppercase;
              font-family: var(--font);
              font-weight: 500;
              color: var(--dark-text);
              background: var(--white);
              padding: 4px 0;
            }
          }

          .radio-pills {
            display: flex;
            justify-content: space-between;

            .radio-pill {
              position: relative;

              input {
                position: absolute;
                top: 0;
                inset-inline-start: 0;
                height: 100%;
                width: 100%;
                opacity: 0;
                cursor: pointer;

                &:checked {
                  + .radio-pill-inner {
                    background: var(--primary);
                    border-color: var(--primary);
                    box-shadow: var(--primary-box-shadow);
                    color: var(--white);
                  }
                }
              }

              .radio-pill-inner {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 40px;
                background: var(--white);
                border: 1px solid var(--fade-grey-dark-3);
                border-radius: 8px;
                font-family: var(--font);
                font-weight: 600;
                font-size: 0.9rem;
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .form-layout {
    &.is-split {
      .form-outer {
        .form-body {
          .form-section {
            &.is-grey {
              background: var(--dark-sidebar-light-4) !important;
            }

            h3 {
              color: var(--dark-dark-text);
            }

            .left {
              border-color: var(--dark-sidebar-light-12) !important;

              .operator {
                background: var(--dark-sidebar-light-6) !important;
                color: var(--dark-dark-text);
              }

              .radio-pills {
                .radio-pill {
                  input {
                    &:checked + .radio-pill-inner {
                      border-color: var(--primary);
                      background: var(--primary);
                      box-shadow: var(--primary-box-shadow);
                      color: var(--smoke-white);
                    }
                  }

                  .radio-pill-inner {
                    background: var(--dark-sidebar-light-2);
                    border-color: var(--dark-sidebar-light-12);
                    color: var(--dark-dark-text);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .form-layout {
    &.is-split {
      .form-outer {
        .form-body {
          .form-section {
            flex-direction: column;
            padding-inline-end: 0;
            padding-inline-start: 0;

            .left,
            .right {
              width: 100%;
              padding-inline-end: 30px;
              padding-inline-start: 30px;
            }

            .left {
              border-inline-end: none;
              border-bottom: 1px solid var(--fade-grey-dark-3);
              padding-bottom: 40px;

              .operator {
                top: unset;
                bottom: -14px;
                inset-inline-start: 0;
                inset-inline-end: 0;
                margin: 0 auto;
                text-align: center;
                max-width: 60px;
              }
            }

            .right {
              padding-top: 30px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .form-layout {
    &.is-split {
      .form-outer {
        .form-body {
          .form-section {
            padding-inline-end: 0;
            padding-inline-start: 0;
          }
        }
      }
    }
  }
}
</style>
