<script setup lang="ts">
const props = defineProps<{
  topNav?: boolean
  full?: boolean
}>()
</script>

<template>
  <div
    class="view-wrapper"
    :class="[
      props.topNav && 'has-top-nav',
      props.full && 'view-wrapper-full',
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss">
.view-wrapper {
  &.has-top-nav {
    margin-inline-start: 0 !important;
    width: 100% !important;
    padding-top: 1px;

    .is-stuck {
      position: fixed;
      top: 78px;
      inset-inline-start: 0;
      margin-inline-start: 0;
      border-inline-start: 0 !important;
      width: 100%;
      z-index: 14;

      &.stuck-header {
        padding-inline-end: 20px !important;

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
      margin-top: 64px;
    }

    .is-navbar-lg {
      margin-top: 100px;
    }

    .is-navbar-xl {
      margin-top: 130px;
    }

    .page-content-wrapper {
      padding-top: 30px;
    }
  }

  &.view-wrapper-full {
    width: 100%;
    margin-inline-start: 0;

    &.is-pushed-block {
      margin-inline-start: 280px;
      width: calc(100% - 280px);

      .is-stuck {
        margin-inline-start: 280px;
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
  // padding: 0 0 60px;
  margin-inline-start: 80px;
  background: var(--background-grey);
  transition: all 0.3s; // transition-all test

  &.is-pushed-full {
    margin-inline-start: 320px;
    width: calc(100% - 320px);

    .is-stuck {
      margin-inline-start: 320px;
      width: calc(100% - 320px);
    }
  }

  .is-stuck {
    position: fixed;
    top: 0;
    inset-inline-start: 0;
    margin-inline-start: 80px;
    width: calc(100% - 80px);
    z-index: 14;
  }
}

.is-dark {
  .view-wrapper {
    background: color-mix(in oklab, var(--dark-sidebar), white 10%);
    border-color: color-mix(in oklab, var(--dark-sidebar), white 10%);
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

      .page-content-wrapper {
        padding-top: 0;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
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

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .view-wrapper {
    width: calc(100% - 60px) !important;
    margin-inline-start: 60px !important;
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  // Layout
  .view-wrapper {
    width: 100% !important;
    margin-inline-start: 0 !important;
    margin-top: 60px !important;
    padding-inline-start: 40px;
    padding-inline-end: 40px;

    &.is-explore {
      padding-inline-start: 0 !important;
      padding-inline-end: 0 !important;
    }
  }
}

@media (width <= 767px) {
  // Layout
  .view-wrapper {
    width: 100% !important;
    margin-inline-start: 0 !important;
    margin-top: 60px !important;
  }
}
</style>
