<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    straight?: boolean
  }>(),
  {
    title: 'List Widget',
  }
)
</script>

<template>
  <div class="list-widget" :class="[props.straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <ListWidgetMainDropdown />
    </div>

    <div class="inner-list">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.list-widget {
  @include vuero-l-card;

  padding: 30px;

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  &.is-straight {
    @include vuero-s-card;
  }

  .widget-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    margin-bottom: 10px;

    h3 {
      color: var(--dark-text);
      font-size: 1.1rem;
      font-weight: 500;
    }
  }

  .inner-list {
    padding: 10px 0;

    .inner-list-item {
      + .inner-list-item {
        margin-top: 24px;
      }
    }
  }
}

.is-dark {
  .list-widget {
    @include vuero-card--dark;
  }
}
</style>
