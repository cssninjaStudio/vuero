<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

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

const localFlagSrc = computed(() => {
  switch (locale.value) {
    case 'fr':
      return '/images/icons/flags/france.svg'
    case 'es':
      return '/images/icons/flags/spain.svg'
    case 'es-MX':
      return '/images/icons/flags/mexico.svg'
    case 'de':
      return '/images/icons/flags/germany.svg'
    case 'zh-CN':
      return '/images/icons/flags/china.svg'
    case 'ar':
      return '/images/icons/flags/saudi-arabia.svg'
    case 'en':
    default:
      return '/images/icons/flags/united-states-of-america.svg'
  }
})

const open = ref(false)
const target = ref(null)

onClickOutside(target, () => (open.value = false))
</script>

<template>
  <div
    ref="target"
    class="dropdown lang-dropdown"
    :class="open ? 'is-active' : ''"
  >
    <a
      href="#"
      class="dropdown-trigger"
      @click.prevent="open = true"
    >
      <img
        :src="localFlagSrc"
        :alt="locale"
      >
    </a>

    <div class="dropdown-menu">
      <div class="dropdown-content">
        <a
          href="#"
          role="button"
          class="dropdown-item"
          @click="locale = 'en'"
        >
          <img
            src="/images/icons/flags/united-states-of-america.svg"
            alt=""
          >
          <span>English</span>
        </a>
        <a
          href="#"
          role="button"
          class="dropdown-item"
          @click="locale = 'fr'"
        >
          <img
            src="/images/icons/flags/france.svg"
            alt=""
          >
          <span>Français</span>
        </a>
        <a
          href="#"
          role="button"
          class="dropdown-item"
          @click="locale = 'es'"
        >
          <img
            src="/images/icons/flags/spain.svg"
            alt=""
          >
          <span>Español</span>
        </a>
        <a
          href="#"
          role="button"
          class="dropdown-item"
          @click="locale = 'de'"
        >
          <img
            src="/images/icons/flags/germany.svg"
            alt=""
          >
          <span>Deutch</span>
        </a>
        <a
          href="#"
          role="button"
          class="dropdown-item"
          @click="locale = 'es-MX'"
        >
          <img
            src="/images/icons/flags/mexico.svg"
            alt=""
          >
          <span>Español mexicano</span>
        </a>
        <a
          href="#"
          role="button"
          class="dropdown-item"
          @click="locale = 'zh-CN'"
        >
          <img
            src="/images/icons/flags/china.svg"
            alt=""
          >
          <span>中国人</span>
        </a>
        <a
          href="#"
          role="button"
          class="dropdown-item"
          @click="locale = 'ar'"
        >
          <img
            src="/images/icons/flags/saudi-arabia.svg"
            alt=""
          >
          <span>عربي</span>
        </a>
        <hr class="dropdown-divider">
        <a class="dropdown-item">
          <small>Suggest Others</small>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lang-dropdown {
  .dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  .dropdown-menu {
    width: 220px;
    max-width: 220px;

    .dropdown-content {
      padding: 0.75rem;
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      padding-inline-start: 0.75rem;
      padding-inline-end: 0.75rem;

      img {
        display: block;
        height: 26px;
        width: 26px;
        min-width: 26px;
        border-radius: 50%;
      }

      span {
        display: block;
        margin-inline-start: 10px;
      }
    }
  }
}

.is-dark {
  .lang-dropdown {
    .dropdown-menu {
      .dropdown-content {
        background: var(--dark-sidebar) !important;
        border-color: var(--dark-sidebar-light-8) !important;

        .dropdown-item {
          color: var(--light-text);

          &:hover {
            background: var(--dark-sidebar-light-10) !important;
          }
        }

        .dropdown-divider {
          background-color: var(--dark-sidebar-light-12);
        }
      }
    }
  }
}

[dir='rtl'] .lang-dropdown .dropdown-menu {
  left: auto;
  right: 0;
}
</style>
