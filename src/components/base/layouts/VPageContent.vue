<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style lang="scss">
/* ==========================================================================
3. Page Content
========================================================================== */
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

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .page-content {
    padding: 0 10px;

    &.is-explore {
      padding: 0 !important;
    }
  }
}
@media (max-width: 767px) {
  .page-content {
    padding: 0 10px !important;

    &.projects-content {
      padding: 0 16px;
    }
  }
}
</style>
