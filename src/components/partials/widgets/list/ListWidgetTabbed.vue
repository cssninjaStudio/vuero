<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    labels?: string[]
    straight?: boolean
    toggled?: boolean
  }>(),
  {
    title: 'List Widget',
    labels: () => ['Recent', 'Popular'],
  }
)

const state = ref(props.toggled)

const toggleTabs = () => {
  state.value = !state.value
}
</script>

<template>
  <div class="list-widget tabbed-widget" :class="[straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ title }}</h3>
      <div class="tabbed-controls">
        <a
          class="tabbed-control"
          role="button"
          :class="[!state && 'is-active']"
          tabindex="0"
          @keydown.space.prevent="toggleTabs"
          @click="toggleTabs"
        >
          <span>{{ labels[0] }}</span>
        </a>
        <a
          class="tabbed-control"
          role="button"
          :class="[state && 'is-active']"
          tabindex="0"
          @keydown.space.prevent="toggleTabs"
          @click="toggleTabs"
        >
          <span>{{ labels[1] }}</span>
        </a>
        <div class="tabbed-naver"></div>
      </div>
    </div>

    <div class="inner-list-wrapper" :class="[!state && 'is-active']">
      <div class="inner-list">
        <slot name="tab1"></slot>
      </div>
    </div>

    <div class="inner-list-wrapper" :class="[state && 'is-active']">
      <div class="inner-list">
        <slot name="tab2"></slot>
      </div>
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

  &.tabbed-widget {
    .widget-head {
      .tabbed-controls {
        position: relative;
        display: flex;
        min-width: 140px;
        height: 32px;
        background: var(--widget-grey-dark-2);
        font-family: var(--font);
        border-radius: 8px;

        .tabbed-control {
          position: relative;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
          color: var(--light-text);
          z-index: 1;

          &.is-active {
            color: var(--smoke-white);

            &:first-child {
              ~ .tabbed-naver {
                margin-inline-start: 0;
              }
            }

            &:nth-child(2) {
              ~ .tabbed-naver {
                margin-inline-start: 50%;
              }
            }
          }
        }

        .tabbed-naver {
          position: absolute;
          top: 0;
          inset-inline-start: 0;
          width: 50%;
          height: 100%;
          border-radius: 8px;
          background: var(--primary);
          margin-inline-start: 0;
          transition: all 0.3s; // transition-all test
          z-index: 0;
        }
      }
    }

    .inner-list-wrapper {
      display: none;
      animation: fadeInLeft 0.5s;

      &.is-active {
        display: block;
      }
    }
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

    &.tabbed-widget {
      .widget-head {
        .tabbed-controls {
          background: var(--dark-sidebar-light-3);

          .tabbed-naver {
            background: var(--primary);
          }
        }
      }
    }
  }
}
</style>
