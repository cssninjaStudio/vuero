<script setup lang="ts">
import type { NavbarMegamenu } from './navbar.types'

const props = withDefaults(defineProps<{
  children: NavbarMegamenu[]
}>(), {
  children: () => [],
})
</script>

<template>
  <div class="navbar-subnavbar-inner">
    <div v-if="'start' in $slots" class="menu-grid-start">
      <slot name="start" />
    </div>

    <div class="menu-grid-wrapper">
      <div v-if="'top' in $slots" class="menu-grid-top">
        <slot name="top" />
      </div>
      <div class="menu-grid-container has-slimscroll">
        <div class="menu-grid">
          <div
            v-for="group in props.children"
            :key="group.id"
            class="menu-block"
          >
            <h4 class="block-heading">
              <VIcon
                :icon="group.icon"
              />
              <span>{{ group.label }}</span>
            </h4>
            <ul class="block-links">
              <li v-for="link in group.children" :key="link.to">
                <VLink :to="link.to">
                  <span>{{ link.label }}</span>
                  <VTag
                    v-if="link.tag"
                    color="primary"
                    size="tiny"
                    outlined
                  >
                    {{ link.tag }}
                  </VTag>
                </VLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="'bottom' in $slots" class="menu-grid-bottom">
        <slot name="bottom" />
      </div>
    </div>

    <div v-if="'end' in $slots" class="menu-grid-end">
      <slot name="end" />
    </div>
  </div>
</template>

<style lang="scss">
.navbar-subnavbar-inner {
  justify-content: space-between;

  &.is-active {
    display: flex !important;
  }
}

.menu-grid-start,
.menu-grid-end {
  min-width: 260px;
}
// .menu-grid-wrapper-wrapper {
//   border-bottom: 4px solid green;

//   display: flex;
//   flex-direction: column;
//   flex-grow: 2;
//   // flex: 1 1 0;

//   > div {
//     width: 100%;
//   }
// }
.menu-grid-top,
.menu-grid-bottom {
  width: 100%;
}

.menu-grid-wrapper {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
}

.menu-grid-container {
  height: 100%;
}

.menu-grid {
  width: 100%;
  max-height: 100%;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  gap: 0 4rem;
  padding: 1.5rem 0;

  // display: grid;
  // grid-template-rows: 1fr 1fr 1fr;
  // grid-auto-flow: column dense;

  &.is-horizontal {
    flex-direction: row;
    gap: 1rem 8rem;
  }
}

.menu-block {
  min-width: 170px;
  padding-bottom: 2rem;

  .block-heading {
    font-family: var(--font-alt);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--dark-text);
    text-transform: uppercase;
    margin-bottom: 12px;
    display: flex;
    align-items: top;
    gap: 0.5rem;

    .iconify {
      font-size: 18px;
      opacity: 0.3;
    }
  }

  .block-links {
    li {
      padding-inline-start: 26px;
      transition:
        color 0.3s,
        background-color 0.3s,
        border-color 0.3s,
        height 0.3s,
        width 0.3s;
      margin-bottom: 6px;

      &:hover,
      &:focus {
        a {
          color: var(--primary);
        }
      }

      &.is-active {
        border-radius: 0;

        a {
          color: color-mix(in oklab, var(--primary), black 14%);

          .iconify {
            opacity: 1;
            fill: var(--primary);
          }
        }
      }

      .router-link-exact-active {
        color: color-mix(in oklab, var(--primary), black 14%);

        .iconify {
          opacity: 1;
          fill: var(--primary);
        }
      }

      a {
        display: flex;
        align-items: center;
        color: color-mix(in oklab, var(--light-text), white 5%);
        gap: 0.225rem;

        span {
          font-family: var(--font);
          font-size: 0.9rem;
        }

        .lnil,
        .lnir,
        .fas,
        .fal,
        .fab,
        .far {
          margin-inline-end: 10px;
        }

        .tag {
          line-height: 1.6;
          height: 1.7em;
          font-size: 0.65rem;
          margin-inline-start: 0.25rem;
        }

        .iconify {
          opacity: 0;
          position: relative;
          top: 0;
          margin-inline-start: 12px;
          height: 6px;
          width: 6px;
          stroke-width: 2px;
          fill: var(--primary);
          transition:
            color 0.3s,
            background-color 0.3s,
            border-color 0.3s,
            height 0.3s,
            width 0.3s;
        }
      }

      &:hover {
        a {
          opacity: 1;
          color: var(--primary);
        }
      }

    }
  }
}

.is-dark .navbar-subnavbar-inner {
  background: color-mix(in oklab, var(--dark-sidebar), black 2%);
}
</style>
