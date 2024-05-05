<script setup lang="ts">
import { FocusTrap } from 'focus-trap-vue'

const panels = usePanels()
const { locale, t } = useI18n()

/**
 * We use the same storage key as we use in the /src/i18n.ts file
 * so if user reload the page, the selected language will be the same
 */
const defaultLocale = useStorage('locale', 'en')

/**
 * Each time we change the locale, we persit it in the storage
 */
watch(locale, () => {
  defaultLocale.value = locale.value
})
</script>

<template>
  <Teleport v-if="panels.active === 'languages'" to="body">
    <FocusTrap :initial-focus="() => ($refs.closeButton as any)?.el">
      <div class="right-panel-wrapper is-languages is-active">
        <div
          class="panel-overlay"
          tabindex="-1"
          role="button"
          @keydown.enter.prevent="panels.close()"
          @click="panels.close()"
        />

        <div class="right-panel">
          <div class="right-panel-head">
            <h3>{{ t('select-language') }}</h3>
            <a
              ref="closeButton"
              class="close-panel"
              tabindex="0"
              role="button"
              @keydown.enter.prevent="panels.close()"
              @click="panels.close()"
            >
              <VIcon
                class="rtl-hidden"
                icon="lucide:chevron-right"
              />
              <VIcon
                class="ltr-hidden"
                icon="lucide:chevron-left"
              />
            </a>
          </div>
          <div class="right-panel-body has-slimscroll">
            <div class="languages-boxes">
              <div class="language-box">
                <div class="language-option">
                  <input
                    v-model="locale"
                    type="radio"
                    name="language_selection"
                    value="en"
                    checked
                  >
                  <div class="language-option-inner">
                    <img
                      src="/images/icons/flags/united-states-of-america.svg"
                      alt=""
                    >
                    <div class="indicator">
                      <VIcon
                        icon="lucide:check"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="language-box">
                <div class="language-option">
                  <input
                    v-model="locale"
                    type="radio"
                    name="language_selection"
                    value="fr"
                  >
                  <div class="language-option-inner">
                    <img
                      src="/images/icons/flags/france.svg"
                      alt=""
                    >
                    <div class="indicator">
                      <VIcon
                        icon="lucide:check"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="language-box">
                <div class="language-option">
                  <input
                    v-model="locale"
                    type="radio"
                    name="language_selection"
                    value="es"
                  >
                  <div class="language-option-inner">
                    <img
                      src="/images/icons/flags/spain.svg"
                      alt=""
                    >
                    <div class="indicator">
                      <VIcon
                        icon="lucide:check"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="language-box">
                <div class="language-option">
                  <input
                    v-model="locale"
                    type="radio"
                    name="language_selection"
                    value="de"
                  >
                  <div class="language-option-inner">
                    <img
                      src="/images/icons/flags/germany.svg"
                      alt=""
                    >
                    <div class="indicator">
                      <VIcon
                        icon="lucide:check"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="language-box">
                <div class="language-option">
                  <input
                    v-model="locale"
                    type="radio"
                    name="language_selection"
                    value="ar"
                  >
                  <div class="language-option-inner">
                    <img
                      src="/images/icons/flags/saudi-arabia.svg"
                      alt=""
                    >
                    <div class="indicator">
                      <VIcon
                        icon="lucide:check"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="language-box">
                <div class="language-option">
                  <input
                    v-model="locale"
                    type="radio"
                    name="language_selection"
                    value="zh-CN"
                  >
                  <div class="language-option-inner">
                    <img
                      src="/images/icons/flags/china.svg"
                      alt=""
                    >
                    <div class="indicator">
                      <VIcon
                        icon="lucide:check"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="img-wrap has-text-centered">
              <img
                class="light-image"
                src="/images/illustrations/right-panel/languages.svg"
                alt=""
              >
              <img
                class="dark-image"
                src="/images/illustrations/right-panel/languages-dark.svg"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  </Teleport>
</template>

<style lang="scss">
.right-panel-wrapper {
  &.is-languages {
    .right-panel-head {
      padding: 0 30px;
    }

    .right-panel-body {
      .languages-boxes {
        display: flex;
        flex-wrap: wrap;
        padding: 30px 0;

        .language-box {
          margin: 8px 8px 16px;
          width: calc(33.3% - 16px);
          display: flex;
          justify-content: center;
          align-items: center;

          .language-option {
            position: relative;

            input {
              position: absolute;
              top: 0;
              inset-inline-start: 0;
              height: 100%;
              width: 100%;
              opacity: 0;
              cursor: pointer;
              z-index: 3;

              &:checked {
                + .language-option-inner {
                  border-color: var(--primary);

                  .indicator {
                    display: flex;
                  }
                }
              }
            }

            .language-option-inner {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 55px;
              width: 55px;
              border-radius: var(--radius-rounded);
              border: 1.6px solid var(--fade-grey);
              background: var(--white);
              box-shadow: var(--light-box-shadow);
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;

              img {
                display: block;
                width: 40px;
                min-width: 40px;
                height: 40px;
                border-radius: var(--radius-rounded);
              }

              .indicator {
                position: absolute;
                top: -4px;
                inset-inline-end: -4px;
                height: 26px;
                width: 26px;
                border-radius: var(--radius-rounded);
                display: none;
                justify-content: center;
                align-items: center;
                background: var(--primary);
                border: 3px solid var(--white);

                .iconify {
                  height: 10px;
                  width: 10px;
                  stroke-width: 3px;
                  color: var(--white);
                }
              }
            }
          }
        }
      }

      .img-wrap > img {
        display: block;
        max-width: 280px;
        margin: 0 auto;
      }
    }
  }
}

.is-dark {
  .right-panel-wrapper {
    &.is-languages {
      .right-panel-body {
        .languages-boxes {
          .language-box {
            .language-option {
              input {
                &:checked {
                  + .language-option-inner {
                    border-color: var(--primary);
                  }
                }
              }

              .language-option-inner {
                border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
                background: var(--dark-sidebar);

                .indicator {
                  background: var(--primary);
                  border-color: var(--dark-sidebar);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
