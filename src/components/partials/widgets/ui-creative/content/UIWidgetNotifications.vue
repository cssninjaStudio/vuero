<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    notifications?: any[]
  }>(),
  {
    notifications: () => [],
  }
)
</script>

<template>
  <div class="widget-content">
    <ul>
      <li v-for="notification in props.notifications" :key="notification.id">
        <a>
          <span>{{ notification.category }}</span>
          <VTag rounded :label="notification.count" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.list-widget {
  @include vuero-l-card;

  &.is-straight {
    @include vuero-s-card;
  }

  ul {
    li {
      &:not(:last-child) {
        margin-bottom: 12px;
      }

      a {
        font-family: var(--font);
        display: flex;
        justify-content: space-between;
        color: var(--light-text);

        &:hover,
        &:focus {
          color: var(--primary);
        }
      }
    }
  }
}

.is-dark {
  .list-widget {
    @include vuero-card--dark;

    ul {
      li {
        a {
          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
}
</style>
