<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'

import { usePanels } from '/@src/stores/panels'

const panels = usePanels()
const { locale, t } = useI18n()

/**
 * We use the same storage key as we use in the /src/i18n.ts file
 * so if user reload the page, the selected language will be the same
 */
const defaultLocale = useStorage('locale', navigator?.language || 'en')

/**
 * Each time we change the locale, we persit it in the storage
 */
watch(locale, () => {
  defaultLocale.value = locale.value
})
</script>

<template>
  <div
    id="languages-panel"
    :class="[panels.active === 'languages' && 'is-active']"
    class="right-panel-wrapper is-languages"
  >
    <div
      class="panel-overlay"
      tabindex="0"
      @keydown.space.prevent="panels.close()"
      @click="panels.close()"
    ></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <h3>{{ t('select-language') }}</h3>
        <a
          class="close-panel"
          tabindex="0"
          @keydown.space.prevent="panels.close()"
          @click="panels.close()"
        >
          <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
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
              />
              <div class="language-option-inner">
                <img src="/images/icons/flags/united-states-of-america.svg" alt="" />
                <div class="indicator">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input v-model="locale" type="radio" name="language_selection" value="fr" />
              <div class="language-option-inner">
                <img src="/images/icons/flags/france.svg" alt="" />
                <div class="indicator">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input v-model="locale" type="radio" name="language_selection" value="es" />
              <div class="language-option-inner">
                <img src="/images/icons/flags/spain.svg" alt="" />
                <div class="indicator">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input v-model="locale" type="radio" name="language_selection" value="de" />
              <div class="language-option-inner">
                <img src="/images/icons/flags/germany.svg" alt="" />
                <div class="indicator">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
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
                value="es-MX"
              />
              <div class="language-option-inner">
                <img src="/images/icons/flags/mexico.svg" alt="" />
                <div class="indicator">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
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
              />
              <div class="language-option-inner">
                <img src="/images/icons/flags/china.svg" alt="" />
                <div class="indicator">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="img-wrap has-text-centered">
          <img
            class="light-image"
            src="/@src/assets/illustrations/right-panel/languages.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/right-panel/languages-dark.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/mixins';

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
              left: 0;
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
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;

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
                right: -4px;
                height: 26px;
                width: 26px;
                border-radius: var(--radius-rounded);
                display: none;
                justify-content: center;
                align-items: center;
                background: var(--primary);
                border: 3px solid var(--white);

                svg {
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
                border-color: var(--dark-sidebar-light-12);
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
