<template>
  <div class="flex-table-toolbar">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss">
.flex-table-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

@media (width <= 767px) {
  .flex-table-toolbar {
    margin-bottom: 10px;

    .left {
      flex-grow: 2;
    }

    .right {
      display: none;
    }
  }
}
</style>
