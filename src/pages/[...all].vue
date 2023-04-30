<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a catch all path on vue-router (404).
 *
 * You will be able to access this page  at http://localhost:3000/non-existing-page
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useDarkmode } from '/@src/stores/darkmode'

const darkmode = useDarkmode()

const { t } = useI18n()

useHead({
  title: `${t('page-title')} - Vuero`,
  meta: [
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
})
</script>

<template>
  <MinimalLayout>
    <div class="error-container">
      <div class="error-nav">
        <label
          class="dark-mode"
          tabindex="0"
          role="button"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
        >
          <input
            data-cy="dark-mode-toggle"
            type="checkbox"
            :checked="!darkmode.isDark"
            @change="darkmode.onChange"
          />
          <span></span>
        </label>
      </div>

      <div class="error-wrapper">
        <div class="error-inner has-text-centered">
          <div class="bg-number">404</div>
          <SVGErrorPlaceholder />

          <h3>{{ t('pages.not-found.page-heading') }}</h3>
          <p>
            {{ t('pages.not-found.page-body') }}
          </p>
          <div class="button-wrap">
            <VButton color="primary" elevated to="/">
              {{ t('pages.not-found.back-button') }}
            </VButton>
          </div>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss">
.error-container {
  width: 100vw;
  min-height: 100vh;

  .error-nav {
    .dark-mode {
      position: absolute;
      inset-inline-end: 0;
      top: 0;
      display: inline-block;
      transform: scale(0.5);
    }
  }

  .error-wrapper {
    max-width: 840px;
    margin: 0 auto;
    padding-top: 40px;

    .error-inner {
      position: relative;
      max-width: 540px;
      margin: 0 auto;

      .bg-number {
        font-family: var(--font);
        position: absolute;
        top: -58px;
        inset-inline-start: -50px;
        inset-inline-end: 0;
        margin: 0 auto;
        font-size: 28rem;
        font-weight: 600;
        opacity: 0.15;
        z-index: 0;
      }

      img,
      svg,
      h3,
      p,
      .button-wrap {
        position: relative;
        z-index: 1;
      }

      img,
      svg {
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }

      h3 {
        font-size: 1.5rem;
        font-family: var(--font-alt);
        color: var(--dark-text);
        font-weight: 600;
        margin-top: 10px;
      }

      p {
        font-family: var(--font);
        font-size: 1.1rem;
        margin-bottom: 16px;
      }

      .button-wrap {
        .button {
          min-width: 220px;
          min-height: 50px;
        }
      }
    }
  }
}

.is-dark {
  .error-container {
    .error-wrapper {
      .error-inner {
        .bg-number {
          opacity: 0.09;
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .error-container {
    .error-wrapper {
      padding-top: 60px;

      .error-inner {
        padding: 10px;

        .bg-number {
          top: -35px;
          inset-inline-start: -18px;
          inset-inline-end: 0;
          font-size: 13rem;
        }

        img,
        svg {
          max-width: 345px;
        }
      }
    }
  }
}
</style>
