<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'

import { activePanel } from '/@src/state/activePanelState'

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
    :class="[activePanel === 'languages' && 'is-active']"
    class="right-panel-wrapper is-languages"
  >
    <div class="panel-overlay" @click="activePanel = 'none'"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <h3>{{ t('select-language') }}</h3>
        <a class="close-panel" @click="activePanel = 'none'">
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="feather:chevron-right"
          ></i>
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
                <img
                  src="/images/icons/flags/united-states-of-america.svg"
                  alt=""
                />
                <div class="indicator">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
              />
              <div class="language-option-inner">
                <img src="/images/icons/flags/france.svg" alt="" />
                <div class="indicator">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
              />
              <div class="language-option-inner">
                <img src="/images/icons/flags/spain.svg" alt="" />
                <div class="indicator">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
              />
              <div class="language-option-inner">
                <img src="/images/icons/flags/germany.svg" alt="" />
                <div class="indicator">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
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
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/layout/_right-panel.scss';
</style>
