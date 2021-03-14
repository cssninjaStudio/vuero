<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import { plans } from '/@src/data/apps/saas-billing'
import useCreditcardMask from '/@src/composable/useCreditcardMask'
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
</script>

<template>
  <!--SaaS Billing-->
  <div class="saas-billing-wrapper">
    <div class="plans-wrapper">
      <div class="left">
        <div class="inner-wrap">
          <h3>Select a Plan</h3>
          <div class="plans">
            <div v-for="plan in plans" :key="plan.id" class="plan">
              <input
                type="radio"
                name="plan_selection"
                :checked="selectedPlanId === plan.id"
                @click="selectedPlanId = plan.id"
              />
              <div class="plan-inner">
                <img :src="plan.icon" alt="" />
                <div class="meta">
                  <span>{{ plan.name }}</span>
                  <span>{{ plan.slogan }}</span>
                </div>
                <div class="checkmark">
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="plan-details">
          <div v-if="selectedPlan" class="plan-details-inner">
            <div class="plan-description">
              <div class="left">
                <img
                  class="light-image"
                  :src="selectedPlan.logo.light"
                  alt=""
                />
                <img class="dark-image" :src="selectedPlan.logo.dark" alt="" />
              </div>
              <div class="right">
                <div class="plan-pricing">
                  <span>
                    <b>{{ selectedPlan.costs.monthly }}</b>
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
            <tippy class="has-help-cursor" interactive placement="bottom-start">
              <V-Avatar picture="/images/avatars/photos/8.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user8" />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="bottom-start">
              <V-Avatar color="warning" initials="BT" />
              <template #content>
                <UserPopoverContent :user="popovers.user122" />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="bottom">
              <V-Avatar picture="/images/avatars/photos/18.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user18" />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="bottom">
              <V-Avatar color="info" initials="JD" />
              <template #content>
                <UserPopoverContent :user="popovers.user123" />
              </template>
            </tippy>

            <tippy class="has-help-cursor" interactive placement="bottom">
              <V-Avatar picture="/images/avatars/photos/7.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user7" />
              </template>
            </tippy>

            <button class="add-seat">
              <i class="iconify" data-icon="feather:plus"></i>
            </button>
          </div>
        </div>

        <div class="option-block">
          <div class="block-header">
            <h3>Options</h3>
          </div>
          <div class="block-body">
            <V-SwitchBlock
              v-model="invoces"
              label="Send new invoices to my inbox"
              color="primary"
            />
            <V-SwitchBlock
              v-model="warnBilling"
              label="Warn me before the end of the billing period"
              color="primary"
            />
          </div>
        </div>

        <div class="option-block">
          <div class="block-header">
            <h3>Billing Cycle</h3>
            <a>My Invoices</a>
          </div>
          <div class="block-body">
            <V-Field>
              <V-Control>
                <label class="radio">
                  <input
                    type="radio"
                    name="billing_radio"
                    value="monthly"
                    checked
                  />
                  <span></span>
                  Monthly
                </label>

                <label class="radio is-outlined is-primary">
                  <input type="radio" name="billing_radio" value="yearly" />
                  <span></span>
                  Yearly
                </label>
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="payment-form">
          <div class="form-header">
            <h3>Payment information</h3>
            <span @click="randomCard">Randomize</span>
          </div>

          <V-CreditCard
            :color="creditcardColor"
            :flipped="isCardFlipped"
            :name="creditcardInput.name"
            :number="creditcardInput.number"
            :cvc="creditcardInput.cvc"
            :expiry="creditcardInput.expiry"
            @flip="isCardFlipped = !isCardFlipped"
          >
            <!-- eslint-disable vue/no-v-html -->
            <div
              v-if="creditcardLogo"
              id="ccsingle"
              v-html="creditcardLogo"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
          </V-CreditCard>

          <div class="form-container">
            <div class="columns is-multiline">
              <div class="column is-12">
                <V-Field>
                  <label for="name">Name</label>
                  <V-Control>
                    <input
                      id="name"
                      v-model="creditcardInput.name"
                      autocomplete="cc-given-name"
                      class="input"
                      maxlength="20"
                      type="text"
                      placeholder="The name on the card"
                      @focus="isCardFlipped = false"
                    />
                  </V-Control>
                </V-Field>
              </div>
              <div class="column is-12">
                <V-Field>
                  <label for="cardnumber">Card Number</label>
                  <V-Control>
                    <V-IMaskInput
                      id="cardnumber"
                      v-model="creditcardInput.number"
                      autocomplete="cc-number"
                      class="input"
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
                  </V-Control>
                </V-Field>
              </div>
              <div class="column is-6">
                <V-Field>
                  <label for="expirationdate">Expiration</label>
                  <V-Control>
                    <V-IMaskInput
                      id="expirationdate"
                      v-model="creditcardInput.expiry"
                      autocomplete="cc-exp"
                      class="input"
                      :options="creditcardMaskDate"
                      placeholder="MM / YY"
                      @focus="isCardFlipped = false"
                    />
                  </V-Control>
                </V-Field>
              </div>
              <div class="column is-6">
                <V-Field>
                  <label for="securitycode">CVC</label>
                  <V-Control>
                    <V-IMaskInput
                      id="securitycode"
                      v-model="creditcardInput.cvc"
                      autocomplete="cc-csc"
                      class="input"
                      :options="creditcardMaskCVC"
                      placeholder="3 digits code"
                      @focus="isCardFlipped = true"
                    />
                  </V-Control>
                </V-Field>
              </div>
              <div class="column is-12">
                <div class="button-wrap">
                  <V-Button color="primary" raised fullwidth>
                    Save Payment Method
                  </V-Button>
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
@import '../../../assets/scss/abstracts/_variables.scss';
@import '../../../assets/scss/abstracts/_mixins.scss';

/* ==========================================================================
1. SaaS Billing
========================================================================== */

.saas-billing-wrapper {
  max-width: 980px;
  margin: 0 auto;

  .plans-wrapper {
    display: flex;
    align-items: center;
    border-bottom: 1px solid darken($fade-grey, 4%);
    padding-bottom: 20px;
    margin-bottom: 20px;

    .left {
      width: 50%;

      .inner-wrap {
        > h3 {
          font-family: $font-alt;
          font-size: 1.1rem;
          font-weight: 600;
          color: $dark-text;
          margin-bottom: 10px;
        }
      }

      .plans {
        display: flex;
        flex-wrap: wrap;
        margin-left: -8px;
        margin-right: -8px;

        .plan {
          position: relative;
          width: calc(50% - 16px);
          max-width: calc(50% - 16px);
          margin: 8px;

          input {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            cursor: pointer;
            z-index: 1;

            &:checked + .plan-inner {
              border-color: $primary;
              box-shadow: $light-box-shadow;

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
            @include vuero-s-card();

            width: 100%;
            flex: 0;
            display: flex;
            align-items: center;
            transition: all 0.3s;

            img {
              display: block;
              height: 32px;
              width: 32px;
              min-width: 32px;
              filter: grayscale(1);
              opacity: 0.6;
              pointer-events: none;
              transition: all 0.3s;
            }

            .meta {
              margin-left: 12px;
              line-height: 1.3;

              span {
                display: block;
                font-family: $font;

                &:first-child {
                  font-family: $font-alt;
                  font-size: 0.95rem;
                  font-weight: 600;
                  color: $dark-text;
                }

                &:nth-child(2) {
                  color: $light-text;
                  font-size: 0.85rem;
                }
              }
            }

            .checkmark {
              margin-left: auto;
              display: none;
              justify-content: center;
              align-items: center;
              height: 32px;
              width: 32px;
              min-width: 32px;
              border-radius: $radius-rounded;
              background: $white;
              border: 1px solid darken($fade-grey, 3%);
              box-shadow: $light-box-shadow;
              color: $success;

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
      margin-left: auto;

      .plan-details {
        > h3 {
          font-family: $font;
          font-size: 1.1rem;
          font-weight: 500;
          color: $dark-text;
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
                padding: 5px 0 10px 0;
                font-family: $font;
                line-height: 1.3;

                span {
                  display: block;
                  font-size: 0.9rem;
                  font-weight: 500;
                  color: $primary;
                  font-family: $font-alt;

                  &:first-child {
                    color: $dark-text;
                  }

                  b {
                    font-size: 2rem;
                    font-family: $font;
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
                font-family: $font-alt;
                font-size: 0.95rem;
                color: $dark-text;
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
        @include vuero-s-card();

        margin-bottom: 20px;

        .block-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;

          h3 {
            font-family: $font-alt;
            font-size: 1rem;
            font-weight: 600;
            color: $dark-text;
          }

          span {
            font-family: $font;
            color: $light-text;
          }

          a {
            font-family: $font;
            color: $light-text;

            &:hover {
              color: $primary;
            }
          }
        }

        .block-body {
          &.is-seats {
            display: flex;
            padding-bottom: 10px;

            .v-avatar {
              margin-right: 8px;
            }

            .add-seat {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 40px;
              width: 40px;
              min-width: 40px;
              border-radius: $radius-rounded;
              border: 1.6px dashed $light-text;
              color: $light-text;
              outline: none;
              padding: 0;
              background: none;
              margin-left: 4px;
              cursor: pointer;
              transition: all 0.3s;

              &:hover {
                border: 1.6px solid $primary;
                color: $primary;
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
      margin-left: auto;

      .payment-form {
        padding: 20px 30px;
        background: $white;
        border-radius: $radius;
        border: 1px solid darken($fade-grey, 3%);

        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          h3 {
            font-family: $font-alt;
            font-size: 1rem;
            font-weight: 600;
            color: $dark-text;
          }

          span {
            font-family: $font;
            color: $light-text;
            cursor: pointer;
          }
        }

        .form-container {
          padding: 30px 0 20px 0;
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
                  right: -2px;
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

        .card-container {
          width: 100%;
          height: 170px;
          padding: 20px 0;
          perspective: 1000px;

          &.preload * {
            transition: none !important;
          }

          .creditcard {
            width: 100%;
            max-width: 260px;
            transform-style: preserve-3d;
            transition: transform 0.6s;
            margin: 0 auto;
            cursor: pointer;

            &.flipped {
              -webkit-transform: rotateY(180deg);
              transform: rotateY(180deg);
            }

            .front,
            .back {
              position: absolute;
              width: 100%;
              max-width: 260px;
              backface-visibility: hidden;
              -webkit-font-smoothing: antialiased;
              color: #47525d;
            }

            .back {
              transform: rotateY(180deg);
            }

            svg#cardfront,
            svg#cardback {
              width: 100%;
              box-shadow: $light-box-shadow;
              border-radius: 18px;
            }

            #cardfront {
              .st2 {
                fill: #fff;
              }

              .st3 {
                font-family: 'Source Code Pro', monospace;
                font-weight: 600;
              }

              .st4 {
                font-size: 54.7817px;
              }

              .st5 {
                font-family: 'Source Code Pro', monospace;
                font-weight: 400;
              }

              .st6 {
                font-size: 33.1112px;
              }

              .st7 {
                opacity: 0.6;
                fill: #fff;
              }

              .st8 {
                font-size: 24px;
              }

              .st9 {
                font-size: 36.5498px;
              }

              .st10 {
                font-family: 'Source Code Pro', monospace;
                font-weight: 300;
              }

              .st11 {
                font-size: 16.1716px;
              }

              .st12 {
                fill: #4c4c4c;
              }
            }

            #cardback {
              .st0 {
                fill: none;
                color: #0f0f0f;
                stroke-miterlimit: 10;
              }

              .st2 {
                fill: #111;
              }

              .st3 {
                fill: #f2f2f2;
              }

              .st4 {
                fill: #d8d2db;
              }

              .st5 {
                fill: #c4c4c4;
              }

              .st6 {
                font-family: 'Source Code Pro', monospace;
                font-weight: 400;
              }

              .st7 {
                font-size: 27px;
              }

              .st8 {
                opacity: 0.6;
              }

              .st9 {
                fill: #fff;
              }

              .st10 {
                font-size: 24px;
              }

              .st11 {
                fill: #eaeaea;
              }

              .st12 {
                font-family: 'Rock Salt', cursive;
              }

              .st13 {
                font-size: 37.769px;
              }
            }

            #svgname {
              text-transform: uppercase;
            }

            #ccsingle {
              position: absolute;
              right: 15px;
              top: 20px;

              svg {
                width: 100px;
                max-height: 60px;
              }
            }

            .lightcolor,
            .darkcolor {
              transition: fill 0.5s;
            }

            .lightblue {
              fill: #03a9f4;
            }

            .lightbluedark {
              fill: #0288d1;
            }

            .red {
              fill: #ef5350;
            }

            .reddark {
              fill: #d32f2f;
            }

            .purple {
              fill: #ab47bc;
            }

            .purpledark {
              fill: #7b1fa2;
            }

            .cyan {
              fill: #26c6da;
            }

            .cyandark {
              fill: #0097a7;
            }

            .green {
              fill: #66bb6a;
            }

            .greendark {
              fill: #388e3c;
            }

            .lime {
              fill: #d4e157;
            }

            .limedark {
              fill: #afb42b;
            }

            .yellow {
              fill: #ffeb3b;
            }

            .yellowdark {
              fill: #f9a825;
            }

            .orange {
              fill: #ff9800;
            }

            .orangedark {
              fill: #ef6c00;
            }

            .grey {
              fill: #bdbdbd;
            }

            .greydark {
              fill: #616161;
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
2. SaaS Billing Dark mode
========================================================================== */

.is-dark {
  .saas-billing-wrapper {
    .plans-wrapper {
      border-color: lighten($dark-sidebar, 20%);

      .left {
        .inner-wrap {
          > h3 {
            color: $dark-dark-text;
          }
        }

        .plans {
          .plan {
            input {
              &:checked + .plan-inner {
                border-color: $accent !important;
              }
            }

            .plan-inner {
              @include vuero-card--dark();

              .meta span {
                &:first-child {
                  color: $dark-dark-text;
                }
              }

              .checkmark {
                background: lighten($dark-sidebar, 2%);
                border-color: lighten($dark-sidebar, 12%);
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
                    color: $dark-dark-text;
                  }

                  &:nth-child(2) {
                    color: $accent;
                  }
                }
              }
            }

            .plan-summary {
              .plan-features {
                ul {
                  color: $dark-dark-text;
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
          @include vuero-card--dark();

          .block-header {
            h3 {
              color: $dark-dark-text;
            }

            a:hover {
              color: $accent;
            }
          }

          .block-body {
            &.is-seats {
              .add-seat:hover {
                border-color: $accent;
                color: $accent;
              }
            }
          }
        }
      }

      .right {
        .payment-form {
          background: lighten($dark-sidebar, 6%);
          border-color: lighten($dark-sidebar, 12%);

          .form-header {
            h3 {
              color: $dark-dark-text;
            }

            span:hover,
            a:hover {
              color: $accent;
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
3. SaaS Billing Media Queries
========================================================================== */

@media only screen and (max-width: 767px) {
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
                right: 10px;
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

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
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
                right: 10px;
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

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .saas-billing-wrapper {
    .plans-wrapper {
      .left {
        .plans {
          .plan {
            .plan-inner {
              .checkmark {
                position: absolute;
                top: 10px;
                right: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
