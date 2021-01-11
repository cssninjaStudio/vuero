<template>
  <div id="languages-panel" class="right-panel-wrapper is-languages">
    <div class="panel-overlay"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <h3>Select Language</h3>
        <a class="close-panel">
          <Icon icon="feather:chevron-right" />
        </a>
      </div>
      <div class="right-panel-body has-slimscroll">
        <div class="languages-boxes">
          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" checked />
              <div class="language-option-inner">
                <img
                  src="/src/assets/images/icons/flags/united-states-of-america.svg"
                  alt=""
                />
                <div class="indicator">
                  <Icon icon="feather:check" />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/src/assets/images/icons/flags/france.svg" alt="" />
                <div class="indicator">
                  <Icon icon="feather:check" />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/src/assets/images/icons/flags/spain.svg" alt="" />
                <div class="indicator">
                  <Icon icon="feather:check" />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/src/assets/images/icons/flags/germany.svg" alt="" />
                <div class="indicator">
                  <Icon icon="feather:check" />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/src/assets/images/icons/flags/mexico.svg" alt="" />
                <div class="indicator">
                  <Icon icon="feather:check" />
                </div>
              </div>
            </div>
          </div>

          <div class="language-box">
            <div class="language-option">
              <input type="radio" name="language_selection" />
              <div class="language-option-inner">
                <img src="/src/assets/images/icons/flags/china.svg" alt="" />
                <div class="indicator">
                  <Icon icon="feather:check" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="img-wrap has-text-centered">
          <img
            class="light-image"
            src="/src/assets/images/illustrations/right-panel/languages.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/src/assets/images/illustrations/right-panel/languages-dark.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
