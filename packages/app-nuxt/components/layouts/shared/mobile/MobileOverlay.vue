<template>
  <div class="mobile-overlay" />
</template>

<style lang="scss">
.mobile-overlay {
  background: rgb(0 0 0 / 30%);
  position: fixed;
  top: 0;
  bottom: 0;
  inset-inline-start: 0;
  inset-inline-end: 0;
  z-index: 20;
  backdrop-filter: blur(1px);
}
</style>
