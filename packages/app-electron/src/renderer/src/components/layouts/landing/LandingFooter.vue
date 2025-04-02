<script setup lang="ts">
import type { LandingFooterColumn, LandingSocialItem } from './landing.types'
const props = defineProps<{
  title?: string
  subtitle?: string

  links?: LandingFooterColumn[]
  social?: LandingSocialItem[]
}>()
</script>

<template>
  <footer class="vuero-footer is-relative">
    <div class="container">
      <div v-if="'action' in $slots || props.title || props.subtitle" class="footer-head">
        <div v-if="props.title || props.subtitle" class="head-text">
          <h3 v-if="props.title">
            {{ props.title }}
          </h3>
          <p v-if="props.subtitle">
            {{ props.subtitle }}
          </p>
        </div>
        <div class="head-action">
          <div class="is-flex is-align-items-center">
            <slot name="action" />
          </div>
        </div>
      </div>
      <div v-if="'default' in $slots || props.social?.length || props.links?.length" class="columns footer-body">
        <!-- Column -->
        <div v-if="'default' in $slots || props.social?.length" class="column is-4">
          <slot />
          <div v-if="props.social">
            <div class="social-links p-b-10">
              <VLink
                v-for="item in social"
                :key="item.icon"
                :to="item.link"
              >
                <VIcon :icon="item.icon" class="icon" />
              </VLink>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div
          class="column"
          :class="'default' in $slots || props.social?.length ? 'is-6 is-offset-2' : 'is-12 has-text-centered'"
        >
          <div class="columns is-flex-tablet-p">
            <!-- Column -->
            <div
              v-for="column in props.links"
              :key="column.label"
              class="column"
            >
              <ul class="footer-column">
                <li class="column-header">
                  {{ column.label }}
                </li>
                <li
                  v-for="link in column.children"
                  :key="link.label"
                  class="column-item"
                >
                  <VLink :to="link.to">
                    {{ link.label }}
                  </VLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright has-text-centered">
        <slot name="copyright" />
      </div>
    </div>
  </footer>
  <!-- /Simple light footer -->
</template>

<style lang="scss">
.vuero-footer {
  padding-bottom: 0 !important;
  padding-top: 4rem !important;
  background: var(--body-color);

  .footer-head {
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);

    .head-text {
      h3 {
        font-family: var(--font);
        font-size: 1.8rem;
        color: var(--dark-text);
      }

      p {
        font-size: 1.1rem;
        color: var(--light-text);
      }
    }

    .head-action {
      .buttons {
        .button {
          &.action-button {
            height: 36px;
            min-width: 140px;
          }

          &.chat-button {
            background: transparent;
            border: none;
            box-shadow: none;
            color: var(--primary);
            font-weight: 500;
          }
        }
      }
    }
  }

  .footer-body {
    padding-top: 3rem;

    .footer-column {
      padding-top: 20px;

      .column-header {
        font-family: var(--font-alt);
        text-transform: uppercase;
        color: var(--dark-text);
        font-size: 1rem;
        font-weight: 700;
        margin: 10px 0;
      }

      .column-item {
        padding-bottom: 10px;

        a {
          font-family: var(--font);
          color: var(--light-text);

          &:hover,
          &:focus {
            color: var(--primary);
          }
        }
      }
    }

    .social-links {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .icon {
        color: var(--light-text);
        font-size: 16px;
        margin-inline-end: 0.6rem;

        &:hover,
        &:focus {
          color: var(--primary);
        }
      }
    }

    .footer-description {
      color: var(--light-text);
    }

    .small-footer-logo {
      height: 36px;
    }
  }

  .footer-copyright {
    font-family: var(--font);
    color: var(--light-text);
    padding: 4rem 0 2rem;

    a {
      color: var(--light-text);

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }
  }
}

.is-dark {
  .landing-page-wrapper {
    .vuero-footer {
      background: color-mix(in oklab, var(--landing-xxx), white 8%);

      .footer-head {
        border-color: color-mix(in oklab, var(--landing-xxx), white 18%);

        .head-text {
          h3 {
            color: var(--dark-dark-text);
          }

          p {
            font-size: 1.1rem;
            color: var(--light-text);
          }
        }

        .head-action {
          .buttons {
            .button {
              &.action-button {
                background: var(--primary);
                border-color: var(--primary);
              }

              &.chat-button {
                color: var(--primary);
                background: none !important;
              }
            }
          }
        }
      }

      .footer-body {
        .footer-column {
          .column-header {
            color: var(--dark-dark-text);
          }

          .column-item {
            a:hover {
              color: var(--primary);
            }
          }
        }

        .social-links {
          a:hover {
            color: var(--primary);
          }
        }
      }

      .footer-copyright {
        a {
          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
}

@media (width <= 767px) {
  .vuero-footer {
    .footer-head {
      flex-direction: column;
      text-align: center;

      .head-text {
        padding-bottom: 20px;
      }
    }

    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }

    .footer-description {
      max-width: 400px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-inline-start: 20px;
      padding-inline-end: 20px;
    }
  }
}
</style>
