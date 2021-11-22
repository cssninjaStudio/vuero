<template>
  <div class="page-content-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
/* ==========================================================================
3. Page Content
========================================================================== */

.page-content-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .page-content {
    padding: 0 40px;

    &.is-relative {
      position: relative;
    }

    &.kanban-content {
      padding: 0 20px;
    }

    &.chat-content {
      padding: 0 40px;
    }

    &.card-content {
      padding: 0 20px;
    }

    &.waterfall-content {
      overflow: hidden;
    }

    &.projects-content {
      padding: 0 40px;
    }
  }
}

// Enable this setting if you want the dashboard to be larger
@media only screen and (min-width: 1408px) {
  .page-content-wrapper {
    // max-width: 1380px;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .page-content-wrapper {
    .page-content {
      padding: 0;
    }
  }
}
</style>
