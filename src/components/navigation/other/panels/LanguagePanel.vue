<script lang="ts">
import { defineComponent } from 'vue'
import { ChevronRightIcon, CheckIcon } from '@zhuowenli/vue-feather-icons'

const LanguagePanel = defineComponent({
  name: 'LanguagePanel',
  components: {
    ChevronRightIcon,
    CheckIcon,
  },
  setup() {
    // LanguagePanel - Composition API

    return {}
  },
})

export default LanguagePanel
</script>

<template>
  <div id="languages-panel" class="right-panel-wrapper is-languages">
    <div class="panel-overlay"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <h3>Select Language</h3>
        <a class="close-panel">
          <ChevronRightIcon />
        </a>
      </div>
      <div class="right-panel-body has-slimscroll">
        <div class="languages-boxes">
          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" checked />
              <div class="language-option-inner">
                <img
                  src="/img/icons/flags/united-states-of-america.svg"
                  alt=""
                />
                <div class="indicator">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/img/icons/flags/france.svg" alt="" />
                <div class="indicator">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/img/icons/flags/spain.svg" alt="" />
                <div class="indicator">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/img/icons/flags/germany.svg" alt="" />
                <div class="indicator">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/img/icons/flags/mexico.svg" alt="" />
                <div class="indicator">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/img/icons/flags/china.svg" alt="" />
                <div class="indicator">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="img-wrap has-text-centered">
          <img
            class="light-image"
            src="/img/illustrations/right-panel/languages.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/img/illustrations/right-panel/languages-dark.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
