<script setup lang="ts">
const modelValue = defineModel<boolean>({
  default: false,
})
</script>

<template>
  <a
    class="navbar-burger burger is-hidden-desktop"
    :class="[modelValue && 'is-active']"
    role="button"
    aria-label="menu"
    aria-expanded="false"
    tabindex="0"
    @keydown.enter.prevent="modelValue = !modelValue"
    @click="modelValue = !modelValue"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
</template>

<style scoped lang="scss">
.navbar-burger {
  height: 60px;
  width: 60px;
  margin-inline-start: 0 !important;
  background: transparent !important;
  display: flex;

  .is-active,
  &:hover,
  &:focus {
    background-color: rgb(0 0 0 / 2%);
  }

  span {
    height: 2px;
    background-color: var(--muted-grey);
  }
}
</style>
