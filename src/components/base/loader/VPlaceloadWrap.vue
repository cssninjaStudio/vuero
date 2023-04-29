<template>
  <div class="placeload-wrap is-flex">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/ltr';

.placeload-wrap {
  &.is-flex {
    display: flex;
    align-items: center;
  }
}

@media only screen and (width <= 767px) {
  .placeload-wrap {
    &.is-flex {
      flex-direction: column;
      padding: 1rem 0;

      .content-shape-group {
        margin-top: 0.5rem;
        max-width: 70%;
        margin-#{$start-direction}: auto;
        margin-#{$end-direction}: auto;

        .content-shape {
          margin-#{$start-direction}: auto;
          margin-#{$end-direction}: auto;
        }
      }

      > .content-shape {
        margin-top: 0.5rem;
        max-width: 70%;
        margin-#{$start-direction}: auto;
        margin-#{$end-direction}: auto;
      }
    }
  }
}
</style>
