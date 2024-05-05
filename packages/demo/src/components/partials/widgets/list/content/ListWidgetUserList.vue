<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    users?: any[]
    squared?: boolean
  }>(),
  {
    users: () => [],
  },
)
</script>

<template>
  <div>
    <VBlock
      v-for="user in props.users"
      :key="user.id"
      center
      lighter
      class="inner-list-item"
    >
      <template #icon>
        <VAvatar
          :picture="user.picture"
          :squared="props.squared"
        />
      </template>
      <template #action>
        <a
          v-if="user.progress < 0"
          href="#"
          class="go-icon is-down"
          :data-content="user.progress + '%'"
        >
          <VIcon
            icon="lucide:chevron-right"
          />
        </a>
        <a
          v-else
          href="#"
          class="go-icon is-up"
          :data-content="'+' + user.progress + '%'"
        >
          <VIcon
            icon="lucide:chevron-right"
          />
        </a>
      </template>

      <a href="#">{{ user.name }}</a>
      <span>{{ user.position }}</span>
    </VBlock>
  </div>
</template>

<style lang="scss">
.list-widget {
  .go-icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    border-radius: var(--radius-rounded);
    background: var(--widget-grey);
    color: var(--light-text);

    &::before {
      content: attr(data-content);
      position: absolute;
      inset-inline-start: -45px;
      font-family: var(--font);
      font-size: 0.95rem;
      font-weight: 500;
    }

    &.is-squared {
      border-radius: 10px;
    }

    &.is-up {
      &::before {
        color: var(--green);
      }
    }

    &.is-down {
      &::before {
        color: var(--red);
      }
    }

    .iconify {
      height: 16px;
      width: 16px;
      font-size: 16px;
      stroke-width: 3px;
    }
  }
}

.is-dark {
  .list-widget {
    .go-icon {
      background: color-mix(in oklab, var(--dark-sidebar), white 3%);
      border: 1px solid color-mix(in oklab, var(--dark-sidebar), white 12%);
    }
  }
}
</style>
