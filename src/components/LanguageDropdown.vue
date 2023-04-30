<script setup lang="ts">
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
    case 'en':
    default:
      return '/images/icons/flags/united-states-of-america.svg'
  }
})
</script>

<template>
  <div class="navbar-item has-dropdown is-hoverable lang-dropdown">
    <a class="navbar-link is-arrowless">
      <img :src="localFlagSrc" :alt="locale" />
    </a>

    <div class="navbar-dropdown is-boxed is-right">
      <a href="#" role="button" class="navbar-item" @click="locale = 'en'">
        <img src="/images/icons/flags/united-states-of-america.svg" alt="" />
        <span>English</span>
      </a>
      <a href="#" role="button" class="navbar-item" @click="locale = 'fr'">
        <img src="/images/icons/flags/france.svg" alt="" />
        <span>Français</span>
      </a>
      <a href="#" role="button" class="navbar-item" @click="locale = 'es'">
        <img src="/images/icons/flags/spain.svg" alt="" />
        <span>Español</span>
      </a>
      <a href="#" role="button" class="navbar-item" @click="locale = 'de'">
        <img src="/images/icons/flags/germany.svg" alt="" />
        <span>Deutch</span>
      </a>
      <a href="#" role="button" class="navbar-item" @click="locale = 'es-MX'">
        <img src="/images/icons/flags/mexico.svg" alt="" />
        <span>Español mexicano</span>
      </a>
      <a href="#" role="button" class="navbar-item" @click="locale = 'zh-CN'">
        <img src="/images/icons/flags/china.svg" alt="" />
        <span>中国人</span>
      </a>
      <a href="#" role="button" class="navbar-item" @click="locale = 'ar'">
        <img src="/images/icons/flags/china.svg" alt="" />
        <span>ar</span>
      </a>
      <hr class="navbar-divider" />
      <a class="navbar-item">
        <small>Suggest Others</small>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lang-dropdown {
  .navbar-link img {
    width: 30px;
  }

  .navbar-dropdown {
    width: 180px;

    .navbar-item {
      display: flex;
      align-items: center;

      img {
        display: block;
        height: 26px;
        width: 26px;
        min-width: 26px;
        border-radius: 50%;
      }

      span {
        display: block;
        margin-left: 10px;
      }
    }
  }
}
</style>
