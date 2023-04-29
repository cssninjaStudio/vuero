<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

export interface VViewWrapperProps {
  topNav?: boolean
  full?: boolean
}

const viewWrapper = useViewWrapper()
const props = defineProps<VViewWrapperProps>()
</script>

<template>
  <div
    class="view-wrapper"
    :class="[
      props.topNav && 'has-top-nav',
      props.full && 'view-wrapper-full',
      viewWrapper.isPushed && 'is-pushed-full',
      viewWrapper.isPushedBlock && 'is-pushed-block',
    ]"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/ltr';

.view-wrapper {
  &.has-top-nav {
    margin-#{$start-direction}: 0 !important;
    width: 100% !important;
    padding-top: 1px;

    .is-stuck {
      position: fixed;
      top: 78px;
      #{$start-direction}: 0;
      margin-#{$start-direction}: 0;
      border-#{$start-direction}: 0 !important;
      width: 100%;
      z-index: 14;

      &.stuck-header {
        padding-#{$end-direction}: 20px !important;

        .form-head-inner,
        .form-header-inner {
          max-width: 1240px;
          margin: 0 auto;
        }
      }
    }

    .page-title {
      display: none;
    }

    .has-navbar-spacing {
      margin-top: -20px;
    }

    .is-navbar-md {
      margin-top: 90px;
    }

    .is-navbar-lg {
      margin-top: 110px;
    }

    .is-navbar-xl {
      margin-top: 130px;
    }
  }

  &.view-wrapper-full {
    width: 100%;
    margin-#{$start-direction}: 0;

    &.is-pushed-block {
      margin-#{$start-direction}: 280px;
      width: calc(100% - 280px);

      .is-stuck {
        margin-#{$start-direction}: 280px;
        width: calc(100% - 280px);
      }
    }
  }
}

.view-wrapper {
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: calc(100% - 80px);
  padding: 0 0 60px;
  margin-#{$start-direction}: 80px;
  background: var(--background-grey);
  transition: all 0.3s; // transition-all test

  &.is-pushed-full {
    margin-#{$start-direction}: 320px;
    width: calc(100% - 320px);

    .is-stuck {
      margin-#{$start-direction}: 320px;
      width: calc(100% - 320px);
    }
  }

  &.is-pushed-messages {
    margin-#{$start-direction}: 160px !important;
    width: calc(100% - 160px) !important;
  }

  .is-stuck {
    position: fixed;
    top: 0;
    #{$start-direction}: 0;
    margin-#{$start-direction}: 80px;
    width: calc(100% - 80px);
    z-index: 14;
  }
}

.is-dark {
  .view-wrapper {
    background: var(--dark-sidebar-light-10);
    border-color: var(--dark-sidebar-light-10);
  }
}

@media (width <= 767px) {
  .view-wrapper {
    &.has-top-nav {
      .is-navbar-md,
      .is-navbar-lg,
      .is-navbar-xl {
        margin-top: 0;
      }

      .page-title {
        display: flex !important;
      }
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .view-wrapper {
    &.has-top-nav {
      .is-navbar-md,
      .is-navbar-lg,
      .is-navbar-xl {
        margin-top: 0;
      }

      .page-title {
        display: flex !important;
      }
    }
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .view-wrapper {
    width: calc(100% - 60px) !important;
    margin-#{$start-direction}: 60px !important;

    &.is-pushed-messages {
      margin-#{$start-direction}: 140px !important;
      width: calc(100% - 140px) !important;
    }
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  // Layout
  .view-wrapper {
    width: 100% !important;
    margin-#{$start-direction}: 0 !important;
    margin-top: 60px !important;
    padding-#{$start-direction}: 40px;
    padding-#{$end-direction}: 40px;

    &.is-explore {
      padding-#{$start-direction}: 0 !important;
      padding-#{$end-direction}: 0 !important;
    }
  }
}
@media (width <= 767px) {
  // Layout
  .view-wrapper {
    width: 100% !important;
    margin-#{$start-direction}: 0 !important;
    margin-top: 60px !important;
  }
}
</style>
