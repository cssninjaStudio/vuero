<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a catch allpath on vue-router (404).
 *
 * You will be able to access this page  at http://localhost:3000/non-existing-page
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

onMounted(() => {
  /**
   * replacing path with a leading /404 allow us to detect this
   * on nginx to return a real 404 status code
   *
   * @see /src/nginx/vuejs.conf
   */
  if (!route.path.startsWith('/404')) {
    window.location.href = `/404${route.fullPath}`
  }
})

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

<i18n lang="yaml">
de:
  page-title: 'Seite nicht gefunden'
  page-heading: 'Wir konnten diese Seite nicht finden'
  page-body: 'Die Seite konnte nicht gefunden werden. Bitte versuchen Sie es erneut oder wenden Sie sich an einen Administrator, wenn das Problem weiterhin besteht.'
  back-button: 'Bringen Sie mich zurück'
en:
  page-title: 'Page not found'
  page-heading: "We couldn't find that page"
  page-body: "Looks like we couldn't find that page. Please try again or contact an administrator if the problem persists."
  back-button: 'Take me Back'
es-MX:
  page-title: 'Página no encontrada'
  page-heading: 'No hemos podido encontrar esa página'
  page-body: 'Parece que no hemos podido encontrar esa página. Por favor, inténtalo de nuevo o contacta con un administrador si el problema persiste.'
  back-button: 'Llévame de vuelta'
es:
  page-title: 'Página no encontrada'
  page-heading: 'No hemos podido encontrar esa página'
  page-body: 'Parece que no hemos podido encontrar esa página. Por favor, inténtalo de nuevo o contacta con un administrador si el problema persiste.'
  back-button: 'Llévame de vuelta'
fr:
  page-title: 'Page introuvable'
  page-heading: "Cette page n'a pas été trouvée"
  page-body: "Il semble que nous n'ayons pas trouvé cette page. Veuillez réessayer ou contacter un administrateur si le problème persiste."
  back-button: 'Ramenez-moi en arrière'
zh-CN:
  page-title: '未找到页面'
  page-heading: '我们找不到这个页面'
  page-body: '看起来我们找不到这个页面。如果问题仍然存在，请再试一次或联系管理员。'
  back-button: '带我回去'
</i18n>

<template>
  <LandingLayout theme="darker">
    <div class="error-container">
      <div class="error-wrapper">
        <div class="error-inner has-text-centered">
          <div class="bg-number">404</div>
          <SVGErrorPlaceholder />

          <h3>{{ t('page-heading') }}</h3>
          <p>
            {{ t('page-body') }}
          </p>
          <div class="button-wrap">
            <VButton color="primary" elevated :to="{ name: 'index' }">
              {{ t('back-button') }}
            </VButton>
          </div>
        </div>
      </div>
    </div>
  </LandingLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/mixins';

.error-container {
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
        left: -50px;
        right: 0;
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

@media only screen and (max-width: 767px) {
  .error-container {
    .error-wrapper {
      padding-top: 60px;

      .error-inner {
        padding: 10px;

        .bg-number {
          top: -35px;
          left: -18px;
          right: 0;
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
