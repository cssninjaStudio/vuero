<template>
  <img
    class="hexagon hexagon-1 light-image"
    src="/images/icons/hexagons/accent.svg"
    alt=""
  >
  <img
    class="hexagon hexagon-1 dark-image"
    src="/images/icons/hexagons/accent-heavy.svg"
    alt=""
  >
  <img
    class="hexagon hexagon-2 light-image"
    src="/images/icons/hexagons/accent.svg"
    alt=""
  >
  <img
    class="hexagon hexagon-2 dark-image"
    src="/images/icons/hexagons/accent-heavy.svg"
    alt=""
  >
  <img
    class="hexagon hexagon-3 light-image"
    src="/images/icons/hexagons/green.svg"
    alt=""
  >
  <img
    class="hexagon hexagon-3 dark-image"
    src="/images/icons/hexagons/green-heavy.svg"
    alt=""
  >
  <img
    class="hexagon hexagon-4 light-image"
    src="/images/icons/hexagons/purple.svg"
    alt=""
  >
  <img
    class="hexagon hexagon-4 dark-image"
    src="/images/icons/hexagons/purple-heavy.svg"
    alt=""
  >
</template>

<style scoped lang="scss">
.hexagon {
  position: absolute;
  animation: rotating 15s infinite;
  animation-timing-function: linear;
  z-index: 0;
  pointer-events: none;

  &.hexagon-1 {
    top: -180px;
    inset-inline-start: -180px;
    height: 450px;
    width: 450px;
    transform: rotate(calc(var(--transform-direction) * 39deg));
  }

  &.hexagon-2 {
    bottom: 80px;
    inset-inline-end: 80px;
    height: 360px;
    width: 360px;
    transform: rotate(calc(var(--transform-direction) * 75deg));
    animation-delay: 2s;
  }

  &.hexagon-3 {
    bottom: 40px;
    inset-inline-start: 40px;
    height: 190px;
    width: 190px;
    transform: rotate(calc(var(--transform-direction) * 95deg));
    animation-delay: 0.5s;
  }

  &.hexagon-4 {
    top: -155px;
    inset-inline-start: 50%;
    height: 230px;
    width: 230px;
    transform: rotate(calc(var(--transform-direction) * 135deg));
    animation-delay: 1s;
  }
}

@media (width <= 767px) {
  .hexagon {
    &.hexagon-1 {
      top: -110px;
      inset-inline-start: -80px;
      height: 230px;
      width: 230px;
    }

    &.hexagon-2 {
      bottom: 45px;
      inset-inline-end: -80px;
      height: 220px;
      width: 220px;
    }

    &.hexagon-3 {
      bottom: 50%;
      inset-inline-start: -110px;
    }

    &.hexagon-4 {
      top: -165px;
      inset-inline-start: 70%;
      height: 230px;
      width: 230px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .hexagon {
    &.hexagon-2 {
      bottom: 45px;
      inset-inline-end: -80px;
    }

    &.hexagon-3 {
      bottom: 50%;
      inset-inline-start: -110px;
    }
  }
}
</style>
