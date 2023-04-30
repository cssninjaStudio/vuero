<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useDarkmode } from '/@src/stores/darkmode'
import { usePanels } from '/@src/stores/panels'

const darkmode = useDarkmode()
const panels = usePanels()
const { locale } = useI18n()
const { y } = useWindowScroll()
const isOpen = ref(false)
const isScrolling = ref(false)

watchEffect(() => {
  if (y.value <= 30) {
    isOpen.value = false
  }

  isScrolling.value = y.value > 30
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
  <div
    id="circular-menu"
    :class="[isScrolling && 'is-active', isOpen && 'active']"
    class="circular-menu"
  >
    <a
      class="floating-btn"
      role="button"
      tabindex="0"
      @keydown.space.prevent="isOpen = !isOpen"
      @click="isOpen = !isOpen"
    >
      <i aria-hidden="true" class="fas fa-bars"></i>
      <i aria-hidden="true" class="fas fa-times"></i>
    </a>

    <div class="items-wrapper">
      <div class="menu-item is-flex">
        <label class="dark-mode">
          <input
            data-cy="dark-mode-toggle"
            type="checkbox"
            :checked="!darkmode.isDark"
            @change="darkmode.onChange"
          />
          <span></span>
        </label>
      </div>
      <a
        class="menu-item is-flex right-panel-trigger"
        role="button"
        tabindex="0"
        @keydown.space.prevent="panels.setActive('languages')"
        @click="panels.setActive('languages')"
      >
        <img :src="localFlagSrc" alt="" />
      </a>
      <RouterLink to="/sidebar/layouts/profile-notifications" class="menu-item is-flex">
        <i aria-hidden="true" class="iconify" data-icon="feather:bell"></i>
      </RouterLink>
      <a
        class="menu-item is-flex"
        role="button"
        tabindex="0"
        @keydown.space.prevent="panels.setActive('activity')"
        @click="panels.setActive('activity')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.circular-menu {
  position: fixed;
  top: 0.6em;
  inset-inline-end: 1em;
  z-index: 70;
  transform: translateY(-80px);
  pointer-events: none;
  transition: transform 0.3s;

  &.is-active {
    pointer-events: all;
    transform: translateY(0);
  }

  &.active {
    &::after {
      transform: scale3d(5.5, 5.5, 1);
      transition-timing-function: cubic-bezier(0.68, 1.55, 0.265, 1);
    }

    .floating-btn {
      box-shadow: 0 4px 8px 0 hsl(0deg 0% 0% / 30%);

      i {
        &:first-child {
          display: none;
        }

        &:nth-child(2) {
          display: block;
        }
      }
    }

    .menu-item {
      transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:nth-child(1) {
        transform: translate3d(calc(var(--transform-direction) * -7em), -0.5em, 0);
      }

      &:nth-child(2) {
        transform: translate3d(calc(var(--transform-direction) * -6.25em), 3.25em, 0);
      }

      &:nth-child(3) {
        transform: translate3d(calc(var(--transform-direction) * -3.45em), 6.25em, 0);
      }

      &:nth-child(4) {
        transform: translate3d(calc(var(--transform-direction) * 0.5em), 7em, 0);
      }
    }
  }

  &::after {
    display: block;
    content: ' ';
    width: 3.5em;
    height: 3.5em;
    border-radius: var(--radius-rounded);
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    z-index: -2;
    background-color: var(--primary-dark-5);
    box-shadow: var(--primary-box-shadow);
    transition: all 0.3s ease;
  }

  .floating-btn {
    width: 3.5em;
    height: 3.5em;
    border-radius: var(--radius-rounded);
    background-color: var(--primary-light-3);
    box-shadow: var(--primary-box-shadow);
    color: var(--smoke-white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    i {
      font-size: 0.9rem;
      transition: transform 0.2s;

      &:first-child {
        display: block;
      }

      &:nth-child(2) {
        display: none;
      }
    }
  }

  .items-wrapper {
    padding: 0;
    margin: 0;
  }

  .menu-item {
    position: absolute;
    top: 0.2em;
    inset-inline-end: 0.2em;
    z-index: -1;
    display: block;
    text-decoration: none;
    color: hsl(0deg 0% 100%);
    font-size: 1em;
    width: 3em;
    height: 3em;
    border-radius: var(--radius-rounded);
    text-align: center;
    line-height: 3;
    background-color: hsl(0deg 0% 0% / 20%);
    transition: transform 0.3s ease, background-color 0.2s ease;

    &:hover,
    &:focus {
      background-color: hsl(0deg 0% 0% / 30%);
    }

    &.is-flex {
      display: flex;
      align-items: center;
      justify-content: center;

      .dark-mode {
        transform: scale(0.5);
      }

      > img {
        display: block;
        height: 24px;
        width: 24px;
        min-width: 24px;
        border-radius: var(--radius-rounded);
      }

      svg {
        height: 18px;
        width: 18px;
        color: var(--smoke-white);
        stroke-width: 1.6px;
      }
    }
  }
}

.is-dark {
  .circular-menu {
    &::after {
      background: var(--dark-sidebar-dark-2);
      box-shadow: 0 4px 8px 0 hsl(0deg 0% 0% / 30%) !important;
    }

    &.active {
      .floating-btn {
        box-shadow: 0 4px 8px 0 hsl(0deg 0% 0% / 30%) !important;
      }
    }

    .floating-btn {
      background: var(--dark-sidebar-light-2);
      box-shadow: 0 4px 8px 0 hsl(0deg 0% 0% / 30%) !important;
    }
  }
}
</style>
