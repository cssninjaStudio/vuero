<script setup lang="ts">
import type { NavsearchItem } from './navsearch.types'

const props = defineProps<{
  items?: NavsearchItem[]
}>()
</script>

<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div v-if="'default' in $slots" class="sidebar-title">
        <slot />
      </div>

      <div v-if="'default' in $slots" class="navbar-divider" />

      <ul
        class="submenu"
        data-simplebar
      >
        <li v-for="item of props.items" :key="item.to">
          <RouterLink :to="item.to">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-subsidebar {
  position: fixed;
  top: 60px;
  inset-inline-start: 0;
  height: calc(100% - 60px);
  width: 280px;
  background: var(--white);
  border-top: 1px solid var(--fade-grey);
  border-inline-end: 1px solid var(--fade-grey);
  z-index: 99;

  .navbar-divider {
    width: 83%;
    margin: 5px auto;
    display: block;
  }

  .inner {
    margin-inline-start: 0;
    width: 100%;
    position: relative;
    height: 100%;

    .sidebar-title {
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 20px;

      h3 {
        font-family: var(--font-alt);
        color: var(--muted-grey);
        font-weight: 500;
        font-size: 1.4rem;
      }
    }

    .submenu {
      height: calc(100% - 70px);
      overflow-y: auto;
      margin-top: 10px;
      padding: 0 20px 20px;

      li {
        &.is-active {
          a {
            color: var(--primary);
            font-weight: 500;
          }
        }

        &.has-children {
          display: block;
          height: unset;
          min-height: 36px;

          &.active {
            .collapse-wrap {
              a {
                color: var(--dark-text);
                font-weight: 600;

                .iconify {
                  transform: rotate(90deg) !important;
                }
              }
            }
          }

          &.is-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .tag {
              margin-inline-start: auto;
              margin-inline-end: 20px;
              border-radius: 100px;
              background: var(--danger);
              color: var(--white);
              font-size: 0.8rem;
              font-weight: 600;
            }
          }

          .collapse-wrap {
            display: flex;
            height: 100%;
            min-height: 36px;
            align-items: stretch;

            > a {
              font-family: var(--font-alt);
              display: flex;
              align-items: center;
              font-size: 0.9rem;
              font-weight: 500;
              color: var(--light-text);

              .iconify {
                position: relative;
                top: 1px;
                font-size: 18px;
                margin-inline-start: auto;
                transform: rotate(calc(var(--transform-direction) * 0));
                transition:
                  color 0.3s,
                  background-color 0.3s,
                  border-color 0.3s,
                  height 0.3s,
                  width 0.3s;
              }
            }
          }

          ul {
            padding: 0;
            overflow: hidden;

            li {
              height: 32px;

              &.has-divider {
                height: auto;
              }

              .is-submenu {
                display: flex;
                align-items: center;
                padding-inline-start: 16px;
                font-size: 0.95rem;

                &.is-active {
                  font-weight: 500;
                  color: var(--primary);
                }

                .iconify, .lnil {
                  margin-inline-end: 8px;
                }

                .iconify {
                  font-size: 8px;
                }
              }
            }
          }
        }

        &.divider {
          cursor: default;
          pointer-events: none;
          height: 10px;
          margin: 5px 0 10px;
          border-bottom: 1px solid rgb(0 0 0 / 15%);

          &.with-label {
            border-bottom: 0;
            margin-top: 25px;

            &::after,
            &::before {
              flex: 0;
            }

            .divider-label {
              font-size: 0.7rem;
            }
          }
        }

        a {
          padding: 6px 0;
          width: 100%;
          display: block;
          color: var(--light-text);
        }
      }
    }

    .bottom-action {
      position: absolute;
      bottom: 0;
      inset-inline-start: 0;
      width: 100%;
      padding: 10px;

      .button {
        .iconify {
          font-size: 18px;
        }
      }
    }
  }
}

.is-dark {
  .mobile-subsidebar {
    background: var(--dark-sidebar-light-2);
    border-color: var(--dark-sidebar-light-4);

    .submenu {
      li {
        &.is-active {
          a {
            color: var(--primary) !important;
          }
        }

        &.has-children {
          &.active {
            .collapse-wrap {
              > a {
                color: var(--smoke-white);
              }
            }
          }
        }
      }
    }
  }
}
</style>
