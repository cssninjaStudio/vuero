<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Elements Hub')

useHead({
  title: 'Elements - Vuero',
})
</script>

<template>
  <div class="page-content-inner card-hub">
    <div class="columns">
      <div class="column is-12">
        <div class="hub-wrapper">
          <div class="hub-header has-text-centered">
            <VAvatar
              size="xl"
              picture="/images/avatars/svg/vuero-1.svg"
              badge="/demo/photos/misc/buoy.jpg"
            />

            <h3 class="title is-4 is-narrow is-thin">Vuero Elements</h3>
            <p class="light-text">
              This is the Vuero elements library with detailed code examples.
            </p>
          </div>

          <div class="hub-body">
            <div class="body-inner">
              <!--Component/buttons-->
              <HubCard
                title="Buttons"
                content="Get familiar with the Vuero button styles. Code examples included."
              >
                <RouterLink to="/elements/button"> Get Started </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/buttons.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/buttons-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/icons-->
              <HubCard
                title="Icons"
                content="Get familiar with the Vuero icon libraries. Code examples included."
              >
                <RouterLink to="/elements/icons/line-icons-light">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/icons.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/icons-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/dropdowns-->
              <HubCard
                title="Dropdowns"
                content="Get familiar with the Vuero dropdown styles. Code examples included."
              >
                <RouterLink to="/elements/dropdown"> Get Started </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/dropdown.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/dropdown-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/modals-->
              <HubCard
                title="Modals"
                content="Get familiar with the Vuero modal styles. Code examples included."
              >
                <RouterLink to="/elements/modal"> Get Started </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/modal.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/modal-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/progress-->
              <HubCard
                title="Progress"
                content="Get familiar with the Vuero progress bar styles. Code examples included."
              >
                <RouterLink to="/elements/progress"> Get Started </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/progress.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/progress-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/forms-->
              <HubCard
                title="Forms"
                content="Get familiar with the Vuero form elements. Code examples included."
              >
                <RouterLink to="/elements/forms/inputs"> Get Started </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/forms.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/forms-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/checkbox-->
              <HubCard
                title="Checkboxes"
                content="Get familiar with the Vuero checkboxes styles. Code examples included."
              >
                <RouterLink to="/elements/checkbox"> Get Started </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/checkboxes.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/checkboxes-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>

              <!--Component/switch-block-->
              <HubCard
                title="Switches"
                content="Get familiar with the Vuero switches styles. Code examples included."
              >
                <RouterLink to="/elements/switch-block"> Get Started </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/@src/assets/illustrations/components/switches.svg"
                    alt=""
                  />
                  <img
                    class="dark-image"
                    src="/@src/assets/illustrations/components/switches-dark.svg"
                    alt=""
                  />
                </template>
              </HubCard>
            </div>
          </div>

          <div class="hub-footer">
            <p><a class="action-link" tabindex="0">Online Documentation</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-hub {
  max-width: 840px;
  margin: 0 auto;

  .hub-header {
    text-align: center;

    > img {
      display: block;
      margin: 0 auto;
      max-width: 300px;
    }

    .v-avatar {
      margin: 0 auto 12px;
    }

    .anim-icon {
      margin-bottom: 12px;
    }

    p {
      font-size: 1.15rem;
    }
  }

  .hub-body {
    padding: 10px 0 20px;

    .body-inner {
      display: flex;
      flex-wrap: wrap;

      .hub-card {
        background-color: var(--white);
        border-radius: var(--radius-large);
        border: 1px solid var(--fade-grey-dark-3);
        width: calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 10px;
        transition: all 0.3s; // transition-all test

        &:hover {
          box-shadow: var(--light-box-shadow);

          .hub-card-body {
            img {
              filter: grayscale(0);
              opacity: 1;
            }
          }
        }

        .hub-card-body {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 24px;

          .inner-content {
            .title {
              font-size: 1.3rem;
              margin-bottom: 8px;
            }

            p {
              max-width: 220px;
            }

            .partner-name {
              span {
                font-weight: 500;
                color: var(--dark-text);
              }
            }
          }

          img {
            display: block;
            width: 100%;
            max-width: 100px;
            height: 100px;
            filter: grayscale(1);
            opacity: 0.6;
            transition: all 0.3s; // transition-all test
          }
        }

        .hub-card-foot {
          border-top: 1px dashed var(--fade-grey-dark-4);
          border-top-width: 1.6px;
          padding: 18px 24px;

          a {
            color: var(--primary);
            opacity: 0.6;
            font-weight: 500;
            transition: opacity 0.3s;

            &:hover,
            &:focus {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .hub-footer {
    text-align: center;
    padding-top: 20px;

    p {
      font-weight: 500;

      a {
        position: relative;
        transition: color 0.3s;
      }
    }
  }
}

.is-dark {
  .card-hub {
    .hub-header {
      .v-avatar {
        .badge {
          border-color: var(--dark-sidebar-light-6) !important;
        }
      }
    }

    .hub-body {
      .body-inner {
        .hub-card {
          background: var(--dark-sidebar-light-6);
          border-color: var(--dark-sidebar-light-12);

          .hub-card-foot {
            border-color: var(--muted-grey-dark-25);

            a {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .card-hub {
    .hub-body {
      .body-inner {
        .hub-card {
          width: calc(100% - 20px);
          max-width: calc(100% - 20px);
        }
      }
    }
  }
}
</style>
