<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Components Hub'
})

useHead({
  title: 'Components - Vuero',
})
</script>

<template>
  <main class="card-hub">
    <div class="columns">
      <div class="column is-12">
        <div class="hub-wrapper">
          <div class="hub-header has-text-centered">
            <VAvatar
              size="xl"
              picture="/images/avatars/svg/vuero-2.svg"
              badge="https://media.cssninja.io/content/photos/misc/buoy.jpg"
            />

            <h3 class="title is-4 is-narrow is-thin">
              Vuero Components
            </h3>
            <p class="light-text">
              This is the Vuero components library with detailed code examples.
            </p>
          </div>

          <div class="hub-body">
            <div class="body-inner">
              <!--Component/buttons-->
              <HubCard
                title="Buttons"
                content="Get familiar with the Vuero button styles. Code examples included."
              >
                <RouterLink to="/components/button">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/buttons.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/buttons-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/icons-->
              <HubCard
                title="Icons"
                content="Get familiar with the Vuero icon libraries. Code examples included."
              >
                <RouterLink to="/components/icons/line-icons-light">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/icons.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/icons-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/dropdowns-->
              <HubCard
                title="Dropdowns"
                content="Get familiar with the Vuero dropdown styles. Code examples included."
              >
                <RouterLink to="/components/dropdown">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/dropdown.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/dropdown-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/modals-->
              <HubCard
                title="Modals"
                content="Get familiar with the Vuero modal styles. Code examples included."
              >
                <RouterLink to="/components/modal">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/modal.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/modal-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/progress-->
              <HubCard
                title="Progress"
                content="Get familiar with the Vuero progress bar styles. Code examples included."
              >
                <RouterLink to="/components/progress">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/progress.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/progress-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/forms-->
              <HubCard
                title="Forms"
                content="Get familiar with the Vuero form elements. Code examples included."
              >
                <RouterLink to="/components/forms/inputs">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/forms.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/forms-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/checkbox-->
              <HubCard
                title="Checkboxes"
                content="Get familiar with the Vuero checkboxes styles. Code examples included."
              >
                <RouterLink to="/components/checkbox">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/checkboxes.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/checkboxes-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/switch-block-->
              <HubCard
                title="Switches"
                content="Get familiar with the Vuero switches styles. Code examples included."
              >
                <RouterLink to="/components/switch-block">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/switches.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/switches-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>
              <!--Component/content-->
              <HubCard
                title="Content"
                content="Get familiar with the Vuero content styles. Code examples included."
              >
                <RouterLink to="/components/content">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/lists.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/lists-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/tags-->
              <HubCard
                title="Tags"
                content="Get familiar with the Vuero tags styles. Code examples included."
              >
                <RouterLink to="/components/tag">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/tags.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/tags-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/tabs-->
              <HubCard
                title="Tabs"
                content="Get familiar with the Vuero nav tabs styles. Code examples included."
              >
                <RouterLink to="/components/tabs">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/tabs.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/tabs-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/cards-->
              <HubCard
                title="Cards"
                content="Get familiar with the Vuero card styles. Code examples included."
              >
                <RouterLink to="/components/card/">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/cards.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/cards-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>
              <!--Component/avatars-->
              <HubCard
                title="Avatars"
                content="Get familiar with the Vuero avatar styles. Code examples included."
              >
                <RouterLink to="/components/avatar/">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/avatar.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/avatar-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/accordions-->
              <HubCard
                title="Accordions"
                content="Get familiar with the Vuero accordion styles. Code examples included."
              >
                <RouterLink to="/components/accordion/">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/accordion.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/accordion-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/breadcrumbs-->
              <HubCard
                title="Breadcrumbs"
                content="Get familiar with the Vuero breadcrumb styles. Code examples included."
              >
                <RouterLink to="/components/breadcrumb">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/breadcrumb.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/breadcrumb-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/iconbox-->
              <HubCard
                title="Icon Box"
                content="Get familiar with the Vuero icon boxes styles. Code examples included."
              >
                <RouterLink to="/components/icon-box">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/icon-box.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/icon-box-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/flextables-->
              <HubCard
                title="Flex Table"
                content="Get familiar with the Vuero flex table styles. Code examples included."
              >
                <RouterLink to="/components/flextable/">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/table.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/table-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>

              <!--Component/snacks-->
              <HubCard
                title="Snacks"
                content="Get familiar with the Vuero snacks styles. Code examples included."
              >
                <RouterLink to="/components/snack">
                  Get Started
                </RouterLink>

                <template #icon>
                  <img
                    class="light-image"
                    src="/images/illustrations/components/snacks.svg"
                    alt=""
                  >
                  <img
                    class="dark-image"
                    src="/images/illustrations/components/snacks-dark.svg"
                    alt=""
                  >
                </template>
              </HubCard>
            </div>
          </div>

          <div class="hub-footer">
            <p>
              <a
                class="action-link"
                tabindex="0"
              >Online Documentation</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
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
        border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
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
          border-top: 1px dashed color-mix(in oklab, var(--fade-grey), black 4%);
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
          border-color: color-mix(in oklab, var(--dark-sidebar), white 6%) !important;
        }
      }
    }

    .hub-body {
      .body-inner {
        .hub-card {
          background: color-mix(in oklab, var(--dark-sidebar), white 6%);
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

          .hub-card-foot {
            border-color: color-mix(in oklab, var(--muted-grey), black 25%);

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
