<script setup lang="ts">
import { plans } from '/@src/data/apps/saas-billing'
import { useCreditcardMask } from '/@src/composable/useCreditcardMask'
import { popovers } from '/@src/data/users/userPopovers'

const {
  creditcardIcon,
  creditcardLogo,
  creditcardColor,
  creditcardMaskDate,
  creditcardMaskCVC,
  creditcardMaskNumber,
  creditcardMaskNumberOnAccept,
} = useCreditcardMask()

const selectedPlanId = ref('starter')
const isCardFlipped = ref(false)
const invoces = ref(false)
const warnBilling = ref(false)
const creditcardInput = reactive({
  number: '',
  name: '',
  cvc: '',
  expiry: '',
})

const selectedPlan = computed(() => {
  return plans.find((plan) => plan.id === selectedPlanId.value)
})

const testCards = [
  '4000056655665556',
  '5200828282828210',
  '371449635398431',
  '6011000990139424',
  '30569309025904',
  '3566002020360505',
  '6200000000000005',
  '6759649826438453',
]
const randomCard = () => {
  const randomNumber = Math.floor(Math.random() * testCards.length)
  if (creditcardInput.number.replace(/\s/g, '') !== testCards[randomNumber]) {
    creditcardInput.number = testCards[randomNumber]
  }
}
const selected = ref('value_2')
</script>

<template>
  <div class="saas-billing-wrapper">
    <div class="plans-wrapper">
      <div class="left">
        <div class="inner-wrap">
          <h3>Select a Plan</h3>
          <VField class="plans">
            <VControl v-for="plan in plans" :key="plan.id" class="plan" subcontrol>
              <VInput
                type="radio"
                name="plan_selection"
                :checked="selectedPlanId === plan.id"
                tabindex="0"
                @keydown.space.prevent="selectedPlanId = plan.id"
                @click="selectedPlanId = plan.id"
              />
              <VLabel raw class="plan-inner">
                <img :src="plan.icon" alt="" />
                <div class="meta">
                  <span>{{ plan.name }}</span>
                  <span>{{ plan.slogan }}</span>
                </div>
                <div class="checkmark">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                </div>
              </VLabel>
            </VControl>
          </VField>
        </div>
      </div>
      <div class="right">
        <div class="plan-details">
          <div v-if="selectedPlan" class="plan-details-inner">
            <div class="plan-description">
              <div class="left">
                <img class="light-image" :src="selectedPlan.logo.light" alt="" />
                <img class="dark-image" :src="selectedPlan.logo.dark" alt="" />
              </div>
              <div class="right">
                <div class="plan-pricing">
                  <span>
                    <strong>{{ selectedPlan.costs.monthly }}</strong>
                    per month
                  </span>
                  <span> Billed {{ selectedPlan.costs.yearly }} yearly </span>
                </div>
                <div class="plan-moto">
                  <p>
                    {{ selectedPlan.intro }}
                  </p>
                </div>
              </div>
            </div>
            <div class="plan-summary">
              <p>
                {{ selectedPlan.summary }}
              </p>
              <div class="plan-features">
                <div class="columns">
                  <div class="column is-6">
                    <div class="content">
                      <ul>
                        <li>{{ selectedPlan.limits.seats }} seats</li>
                        <li>{{ selectedPlan.limits.projects }} projects</li>
                        <li>{{ selectedPlan.limits.storage }} storage</li>
                      </ul>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="content">
                      <ul>
                        <li>Live updates</li>
                        <li>Payments</li>
                        <li>{{ selectedPlan.limits.addons }} Addons</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="billing-options-wrapper">
      <div class="left">
        <div class="option-block">
          <div class="block-header">
            <h3>Team Seats</h3>
            <span>3 remaining</span>
          </div>
          <div class="block-body is-seats">
            <div>
              <Tippy class="has-help-cursor" interactive placement="bottom-start">
                <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
                <template #content>
                  <UserPopoverContent :user="popovers.user8" />
                </template>
              </Tippy>
            </div>

            <div>
              <Tippy class="has-help-cursor" interactive placement="bottom-start">
                <VAvatar color="warning" initials="BT" />
                <template #content>
                  <UserPopoverContent :user="popovers.user122" />
                </template>
              </Tippy>
            </div>

            <div>
              <Tippy class="has-help-cursor" interactive placement="bottom">
                <VAvatar picture="/demo/avatars/18.jpg" />
                <template #content>
                  <UserPopoverContent :user="popovers.user18" />
                </template>
              </Tippy>
            </div>
            <div>
              <Tippy class="has-help-cursor" interactive placement="bottom">
                <VAvatar color="info" initials="JD" />
                <template #content>
                  <UserPopoverContent :user="popovers.user123" />
                </template>
              </Tippy>
            </div>
            <div>
              <Tippy class="has-help-cursor" interactive placement="bottom">
                <VAvatar picture="/demo/avatars/7.jpg" />
                <template #content>
                  <UserPopoverContent :user="popovers.user7" />
                </template>
              </Tippy>
            </div>

            <button class="add-seat">
              <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
            </button>
          </div>
        </div>

        <VField class="option-block">
          <div class="block-header">
            <h3>Options</h3>
          </div>
          <div class="block-body">
            <VControl>
              <VSwitchBlock
                v-model="invoces"
                label="Send new invoices to my inbox"
                color="primary"
              />
            </VControl>
            <VControl subcontrol>
              <VSwitchBlock
                v-model="warnBilling"
                label="Warn me before the end of the billing period"
                color="primary"
              />
            </VControl>
          </div>
        </VField>

        <div class="option-block">
          <div class="block-header">
            <h3>Billing Cycle</h3>
            <a>My Invoices</a>
          </div>
          <div class="block-body">
            <VField>
              <VControl>
                <VRadio
                  v-model="selected"
                  value="value_1"
                  label="Monthly"
                  name="cycle_radio"
                  color="primary"
                />

                <VRadio
                  v-model="selected"
                  value="value_2"
                  label="Yearly"
                  name="cycle_radio"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="payment-form">
          <div class="form-header">
            <h3>Payment information</h3>
            <span
              tabindex="0"
              role="button"
              @keydown.space.prevent="randomCard"
              @click="randomCard"
            >
              Randomize
            </span>
          </div>

          <VCreditCard
            :color="creditcardColor"
            :flipped="isCardFlipped"
            :name="creditcardInput.name"
            :number="creditcardInput.number"
            :cvc="creditcardInput.cvc"
            :expiry="creditcardInput.expiry"
            @flip="isCardFlipped = !isCardFlipped"
          >
            <!-- eslint-disable vue/no-v-html -->
            <div v-if="creditcardLogo" id="ccsingle" v-html="creditcardLogo"></div>
            <!-- eslint-enable vue/no-v-html -->
          </VCreditCard>

          <div class="form-container">
            <div class="columns is-multiline">
              <div class="column is-12">
                <VField id="name" label="Name">
                  <VControl>
                    <VInput
                      v-model="creditcardInput.name"
                      autocomplete="cc-given-name"
                      maxlength="20"
                      type="text"
                      placeholder="The name on the card"
                      @focus="isCardFlipped = false"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12">
                <VField id="cardnumber" v-slot="{ id }" label="Card Number">
                  <VControl>
                    <VIMaskInput
                      :id="id"
                      v-model="creditcardInput.number"
                      class="input"
                      autocomplete="cc-number"
                      :options="creditcardMaskNumber"
                      placeholder="Credit card number"
                      @focus="isCardFlipped = false"
                      @accept="creditcardMaskNumberOnAccept"
                    />
                    <!-- eslint-disable vue/no-v-html -->
                    <div
                      id="creditcardIcon"
                      class="creditcardIcon"
                      v-html="creditcardIcon"
                    ></div>
                    <!-- eslint-enable vue/no-v-html -->
                  </VControl>
                </VField>
              </div>
              <div class="column is-6">
                <VField id="expirationdate" v-slot="{ id }" label="Expiration">
                  <VControl>
                    <VIMaskInput
                      :id="id"
                      v-model="creditcardInput.expiry"
                      autocomplete="cc-exp"
                      class="input"
                      :options="creditcardMaskDate"
                      placeholder="MM / YY"
                      @focus="isCardFlipped = false"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6">
                <VField id="securitycode" v-slot="{ id }" label="CVC">
                  <VControl>
                    <VIMaskInput
                      :id="id"
                      v-model="creditcardInput.cvc"
                      autocomplete="cc-csc"
                      class="input"
                      :options="creditcardMaskCVC"
                      placeholder="3 digits code"
                      @focus="isCardFlipped = true"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12">
                <div class="button-wrap">
                  <VButton type="submit" color="primary" raised fullwidth>
                    Save Payment Method
                  </VButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.saas-billing-wrapper {
  max-width: 980px;
  margin: 0 auto;

  .plans-wrapper {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--fade-grey-dark-4);
    padding-bottom: 20px;
    margin-bottom: 20px;

    .left {
      width: 50%;

      .inner-wrap {
        > h3 {
          font-family: var(--font-alt);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--dark-text);
          margin-bottom: 10px;
        }
      }

      .plans {
        display: flex;
        flex-wrap: wrap;
        margin-inline-start: -8px;
        margin-inline-end: -8px;

        .plan {
          position: relative;
          width: calc(50% - 16px);
          max-width: calc(50% - 16px);
          margin: 8px;

          input {
            position: absolute;
            top: 0;
            inset-inline-start: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            cursor: pointer;
            z-index: 1;

            &:checked + .plan-inner {
              border-color: var(--primary);
              box-shadow: var(--light-box-shadow);

              img {
                filter: grayscale(0);
                opacity: 1;
              }

              .checkmark {
                display: flex;
              }
            }
          }

          .plan-inner {
            @include vuero-s-card;

            width: 100%;
            flex: 0;
            display: flex;
            align-items: center;
            transition: all 0.3s; // transition-all test

            img {
              display: block;
              height: 32px;
              width: 32px;
              min-width: 32px;
              filter: grayscale(1);
              opacity: 0.6;
              pointer-events: none;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
            }

            .meta {
              margin-inline-start: 12px;
              line-height: 1.3;

              span {
                display: block;
                font-family: var(--font);

                &:first-child {
                  font-family: var(--font-alt);
                  font-size: 0.95rem;
                  font-weight: 600;
                  color: var(--dark-text);
                }

                &:nth-child(2) {
                  color: var(--light-text);
                  font-size: 0.85rem;
                }
              }
            }

            .checkmark {
              margin-inline-start: auto;
              display: none;
              justify-content: center;
              align-items: center;
              height: 32px;
              width: 32px;
              min-width: 32px;
              border-radius: var(--radius-rounded);
              background: var(--white);
              border: 1px solid var(--fade-grey-dark-3);
              box-shadow: var(--light-box-shadow);
              color: var(--success);

              svg {
                width: 16px;
                height: 16px;
                stroke-width: 3px;
              }
            }
          }
        }
      }
    }

    .right {
      width: 45%;
      padding: 20px 0;
      margin-inline-start: auto;

      .plan-details {
        > h3 {
          font-family: var(--font);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--dark-text);
          margin-bottom: 10px;
        }

        .plan-details-inner {
          .plan-description {
            display: flex;
            align-items: center;

            .left {
              max-width: 200px;

              img {
                display: block;
                height: 160px;
                width: 160px;
                min-width: 160px;
                margin: 0 auto;
              }
            }

            .right {
              flex-grow: 2;

              .plan-pricing {
                padding: 5px 0 10px;
                font-family: var(--font);
                line-height: 1.3;

                span {
                  display: block;
                  font-size: 0.9rem;
                  font-weight: 500;
                  color: var(--primary);
                  font-family: var(--font-alt);

                  &:first-child {
                    color: var(--dark-text);
                  }

                  b {
                    font-size: 2rem;
                    font-family: var(--font);
                  }
                }
              }

              .plan-moto {
                p {
                  font-size: 0.9rem;
                }
              }
            }
          }

          .plan-summary {
            .plan-features {
              ul {
                font-family: var(--font-alt);
                font-size: 0.95rem;
                color: var(--dark-text);
              }
            }
          }
        }
      }
    }
  }

  .billing-options-wrapper {
    display: flex;
    align-items: flex-start;

    .left {
      width: 50%;

      .option-block {
        @include vuero-s-card;

        margin-bottom: 20px;

        .block-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;

          h3 {
            font-family: var(--font-alt);
            font-size: 1rem;
            font-weight: 600;
            color: var(--dark-text);
          }

          span {
            font-family: var(--font);
            color: var(--light-text);
          }

          a {
            font-family: var(--font);
            color: var(--light-text);

            &:hover,
            &:focus {
              color: var(--primary);
            }
          }
        }

        .block-body {
          &.is-seats {
            display: flex;
            padding-bottom: 10px;

            .v-avatar {
              margin-inline-end: 8px;
            }

            .add-seat {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
              width: 40px;
              min-width: 40px;
              border-radius: var(--radius-rounded);
              border: 1.6px dashed var(--light-text);
              color: var(--light-text);
              padding: 0;
              background: none;
              margin-inline-start: 4px;
              cursor: pointer;
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;

              &:hover,
              &:focus {
                border: 1.6px solid var(--primary);
                color: var(--primary);
              }

              svg {
                height: 16px;
                width: 16px;
              }
            }
          }
        }
      }
    }

    .right {
      width: 45%;
      margin-inline-start: auto;

      .payment-form {
        padding: 20px 30px;
        background: var(--white);
        border-radius: var(--radius);
        border: 1px solid var(--fade-grey-dark-3);

        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          h3 {
            font-family: var(--font-alt);
            font-size: 1rem;
            font-weight: 600;
            color: var(--dark-text);
          }

          span {
            font-family: var(--font);
            color: var(--light-text);
            cursor: pointer;
          }
        }

        .form-container {
          padding: 30px 0 20px;
          max-width: 330px;
          margin: 0 auto;
          color: #707070;

          .column {
            padding: 0.25rem 0.75rem;
          }

          .field {
            margin-bottom: 0;

            .control {
              position: relative;

              .creditcardIcon {
                svg {
                  height: 30px;
                  position: absolute;
                  inset-inline-end: -2px;
                  top: 4px;
                  width: 60px;
                }
              }
            }
          }

          .button-wrap {
            padding-top: 16px;

            .v-button {
              min-height: 50px;
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .saas-billing-wrapper {
    .plans-wrapper {
      border-color: var(--dark-sidebar-light-20);

      .left {
        .inner-wrap {
          > h3 {
            color: var(--dark-dark-text);
          }
        }

        .plans {
          .plan {
            input {
              &:checked + .plan-inner {
                border-color: var(--primary) !important;
              }
            }

            .plan-inner {
              @include vuero-card--dark;

              .meta span {
                &:first-child {
                  color: var(--dark-dark-text);
                }
              }

              .checkmark {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-12);
              }
            }
          }
        }
      }

      .right {
        .plan-details {
          .plan-details-inner {
            .plan-description {
              .right {
                .plan-pricing span {
                  &:first-child {
                    color: var(--dark-dark-text);
                  }

                  &:nth-child(2) {
                    color: var(--primary);
                  }
                }
              }
            }

            .plan-summary {
              .plan-features {
                ul {
                  color: var(--dark-dark-text);
                }
              }
            }
          }
        }
      }
    }

    .billing-options-wrapper {
      .left {
        .option-block {
          @include vuero-card--dark;

          .block-header {
            h3 {
              color: var(--dark-dark-text);
            }

            a:hover {
              color: var(--primary);
            }
          }

          .block-body {
            &.is-seats {
              .add-seat:hover {
                border-color: var(--primary);
                color: var(--primary);
              }
            }
          }
        }
      }

      .right {
        .payment-form {
          background: var(--dark-sidebar-light-6);
          border-color: var(--dark-sidebar-light-12);

          .form-header {
            h3 {
              color: var(--dark-dark-text);
            }

            span:hover,
            a:hover {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .saas-billing-wrapper {
    .plans-wrapper {
      flex-direction: column;

      .left,
      .right {
        width: 100%;
        max-width: 100%;
      }

      .left {
        .plans {
          .plan {
            .plan-inner {
              position: relative;
              flex-direction: column;
              text-align: center;

              .checkmark {
                position: absolute;
                top: 10px;
                inset-inline-end: 10px;
              }
            }
          }
        }
      }

      .right {
        .plan-details {
          .plan-details-inner {
            .plan-summary {
              .plan-features {
                .columns {
                  display: flex;
                }
              }
            }
          }
        }
      }
    }

    .billing-options-wrapper {
      flex-direction: column;

      .left,
      .right {
        width: 100%;
        max-width: 100%;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .saas-billing-wrapper {
    max-width: 690px;

    .plans-wrapper {
      flex-direction: column;

      .left,
      .right {
        width: 100%;
        max-width: 100%;
      }

      .left {
        .plans {
          .plan {
            .plan-inner {
              position: relative;
              flex-direction: column;
              text-align: center;

              .checkmark {
                position: absolute;
                top: 10px;
                inset-inline-end: 10px;
              }
            }
          }
        }
      }

      .right {
        .plan-details {
          .plan-details-inner {
            .plan-summary {
              .plan-features {
                .columns {
                  display: flex;
                }
              }
            }
          }
        }
      }
    }

    .billing-options-wrapper {
      flex-direction: column;

      .left,
      .right {
        width: 100%;
        max-width: 100%;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .saas-billing-wrapper {
    .plans-wrapper {
      .left {
        .plans {
          .plan {
            .plan-inner {
              .checkmark {
                position: absolute;
                top: 10px;
                inset-inline-end: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
