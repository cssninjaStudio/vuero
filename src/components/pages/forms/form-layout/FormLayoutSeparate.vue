<script setup lang="ts">
const country = ref('')
const createAccount = ref(true)
const subscribe = ref(false)
const onSubmit = () => {
  console.log('Form submitted!')
}
</script>

<template>
  <form class="form-layout is-separate" @submit.prevent="onSubmit">
    <div class="form-outer">
      <div class="form-body">
        <div class="form-section">
          <div class="form-section-inner has-padding-bottom">
            <h3 class="has-text-centered">Personal Information</h3>
            <div class="columns is-multiline">
              <div class="column is-6">
                <VField>
                  <VLabel>First Name</VLabel>
                  <VControl icon="feather:user">
                    <VInput type="text" placeholder="" autocomplete="given-name" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6">
                <VField>
                  <VLabel>Last Name</VLabel>
                  <VControl icon="feather:user">
                    <VInput type="text" placeholder="" autocomplete="family-name" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12">
                <VField>
                  <VLabel>Email Address</VLabel>
                  <VControl icon="feather:mail">
                    <VInput
                      type="email"
                      placeholder=""
                      autocomplete="email"
                      inputmode="email"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12">
                <VField>
                  <VLabel>Street</VLabel>
                  <VControl icon="feather:map-pin">
                    <VInput type="text" placeholder="" autocomplete="street-address" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6">
                <VField>
                  <VLabel>City</VLabel>
                  <VControl icon="feather:map-pin">
                    <VInput type="text" placeholder="" autocomplete="address-level2" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6">
                <VField v-slot="{ id }" class="is-image-select">
                  <VLabel>Country</VLabel>
                  <VControl>
                    <Multiselect
                      v-model="country"
                      :attrs="{ id }"
                      placeholder="Select a country"
                      autocomplete="country"
                      label="name"
                      :options="[
                        {
                          value: 'english',
                          name: 'English',
                          icon: '/images/icons/flags/united-states-of-america.svg',
                        },
                        {
                          value: 'french',
                          name: 'French',
                          icon: '/images/icons/flags/france.svg',
                        },
                        {
                          value: 'german',
                          name: 'German',
                          icon: '/images/icons/flags/germany.svg',
                        },
                        {
                          value: 'spanish',
                          name: 'Spanish',
                          icon: '/images/icons/flags/spain.svg',
                        },
                      ]"
                    >
                      <template #singlelabel="{ value }">
                        <div class="multiselect-single-label">
                          <img class="select-label-icon" :src="value.icon" alt="" />
                          <span class="select-label-text">
                            {{ value.name }}
                          </span>
                        </div>
                      </template>
                      <template #option="{ option }">
                        <img class="select-option-icon" :src="option.icon" alt="" />
                        <span class="select-label-text">
                          {{ option.name }}
                        </span>
                      </template>
                    </Multiselect>
                  </VControl>
                </VField>
              </div>
              <div class="column is-12">
                <VField>
                  <VLabel>Phone</VLabel>
                  <VControl icon="feather:phone">
                    <VInput
                      type="tel"
                      placeholder=""
                      autocomplete="tel"
                      inputmode="tel"
                    />
                  </VControl>
                </VField>
              </div>
            </div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-inner">
            <h3 class="has-text-centered">Delivery</h3>
            <div class="columns is-multiline">
              <div class="column is-12">
                <VField>
                  <VLabel>Delivery Fee</VLabel>
                  <VControl>
                    <div class="radio-boxes">
                      <VControl class="radio-box" subcontrol>
                        <VInput type="radio" name="delivery_type" />
                        <div class="radio-box-inner">
                          <div class="fee">
                            <span>0</span>
                          </div>
                          <p>3-4 weeks</p>
                        </div>
                      </VControl>
                      <VControl class="radio-box">
                        <VInput type="radio" name="delivery_type" checked />
                        <div class="radio-box-inner">
                          <div class="fee">
                            <span>5</span>
                          </div>
                          <p>2-5 days</p>
                        </div>
                      </VControl>
                    </div>

                    <p>
                      <span>Estimated delivery date: <span>Oct 23</span></span>
                      <span>Each package has a tracking number</span>
                    </p>
                  </VControl>
                </VField>
              </div>
            </div>
          </div>

          <div class="form-section-outer">
            <div class="checkboxes">
              <VField>
                <VFlex column-gap="1rem">
                  <VControl>
                    <VCheckbox
                      v-model="createAccount"
                      label="Create an account"
                      color="primary"
                      circle
                    />
                  </VControl>
                  <VControl subcontrol>
                    <VCheckbox
                      v-model="subscribe"
                      label="Subscribe to our Newsletter"
                      color="primary"
                      circle
                    />
                  </VControl>
                </VFlex>
              </VField>
            </div>
            <div class="button-wrap">
              <VButton type="submit" color="primary" bold raised fullwidth>
                Confirm My Order
              </VButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .form-layout {
    margin-top: 30px;
  }
}

.form-layout {
  max-width: 740px;
  margin: 0 auto;

  &.is-separate {
    max-width: 1040px;

    .form-outer {
      background: none;
      border: none;

      .form-body {
        display: flex;

        .form-section {
          flex-grow: 2;
          padding: 10px;
          width: 50%;

          .form-section-inner {
            @include vuero-s-card;

            padding: 40px;

            &.has-padding-bottom {
              padding-bottom: 60px;
              height: 100%;
            }

            > h3 {
              font-family: var(--font-alt);
              font-size: 1.2rem;
              font-weight: 600;
              color: var(--dark-text);
              margin-bottom: 30px;
            }

            .columns {
              .column {
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
              }
            }

            .radio-boxes {
              display: flex;
              justify-content: space-between;
              margin-inline-start: -8px;
              margin-inline-end: -8px;

              .radio-box {
                position: relative;
                width: calc(50% - 16px);
                margin: 8px;

                &:focus-within {
                  border-radius: 3px;
                  outline-offset: var(--accessibility-focus-outline-offset);
                  outline-width: var(--accessibility-focus-outline-width);
                  outline-style: var(--accessibility-focus-outline-style);
                  outline-color: var(--primary);
                }

                input {
                  position: absolute;
                  top: 0;
                  inset-inline-start: 0;
                  height: 100%;
                  width: 100%;
                  opacity: 0;
                  cursor: pointer;

                  &:checked {
                    + .radio-box-inner {
                      background: var(--primary);
                      border-color: var(--primary);
                      box-shadow: var(--primary-box-shadow);

                      .fee,
                      p {
                        color: var(--smoke-white);
                      }
                    }
                  }
                }

                .radio-box-inner {
                  background: var(--white);
                  border: 1px solid var(--fade-grey-dark-3);
                  text-align: center;
                  border-radius: var(--radius);
                  font-family: var(--font);
                  font-weight: 600;
                  font-size: 0.9rem;
                  transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                    height 0.3s, width 0.3s;
                  padding: 30px 20px;

                  .fee {
                    font-family: var(--font);
                    font-weight: 700;
                    color: var(--dark-text);
                    font-size: 2.4rem;
                    line-height: 1;

                    span {
                      &::after {
                        content: '$';
                        position: relative;
                        top: -10px;
                        font-size: 1.5rem;
                      }
                    }
                  }

                  p {
                    font-family: var(--font-alt);
                  }
                }
              }
            }

            .control {
              > p {
                padding-top: 12px;

                > span {
                  display: block;
                  font-size: 0.9rem;

                  span {
                    font-weight: 500;
                    color: var(--dark-text);
                  }
                }
              }
            }
          }

          .form-section-outer {
            .checkboxes {
              padding: 16px 0;

              .checkbox {
                padding: 0;
                font-size: 0.9rem;
              }
            }

            .button-wrap {
              .button {
                min-height: 60px;
                font-size: 1.05rem;
                font-weight: 600;
                font-family: var(--font-alt);
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
    &.is-separate {
      .form-outer {
        background: none !important;

        .form-body {
          .form-section {
            .form-section-inner {
              @include vuero-card--dark;

              > h3 {
                color: var(--dark-dark-text);
              }

              .radio-boxes {
                .radio-box {
                  input:checked + .radio-box-inner {
                    background: var(--primary);
                    border-color: var(--primary);
                    box-shadow: var(--primary-box-shadow);

                    .fee,
                    p {
                      color: var(--smoke-white);
                    }
                  }

                  .radio-box-inner {
                    background: var(--dark-sidebar-light-2);
                    border-color: var(--dark-sidebar-light-12);

                    .fee {
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
}

@media only screen and (width <= 767px) {
  .form-layout {
    &.is-separate {
      .form-outer {
        .form-body {
          padding-inline-start: 0;
          padding-inline-end: 0;
          flex-direction: column;

          .form-section {
            width: 100%;

            .form-section-inner {
              padding: 30px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .form-layout {
    &.is-separate {
      .form-outer {
        .form-body {
          padding-inline-start: 0;
          padding-inline-end: 0;

          // flex-direction: column;

          .form-section {
            // width: 100%;

            .form-section-inner {
              padding: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
