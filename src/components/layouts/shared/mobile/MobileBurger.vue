<script setup lang="ts">
const modelValue = defineModel<boolean>({
  default: false,
})
</script>

<template>
  <div
    class="navbar-burger"
    :class="[modelValue && 'is-active']"
    tabindex="0"
    role="button"
    @keydown.space.prevent="modelValue = !modelValue"
    @click="modelValue = !modelValue"
  >
    <span />
    <span />
    <span />
  </div>
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
