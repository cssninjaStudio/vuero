<template>
  <div class="placeload-wrap is-flex">
    <slot />
  </div>
</template>

<style lang="scss">
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
        margin-inline-start: auto;
        margin-inline-end: auto;

        .content-shape {
          margin-inline-start: auto;
          margin-inline-end: auto;
        }
      }

      > .content-shape {
        margin-top: 0.5rem;
        max-width: 70%;
        margin-inline-start: auto;
        margin-inline-end: auto;
      }
    }
  }
}
</style>
