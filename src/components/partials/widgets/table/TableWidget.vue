<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    data: any[]
    title?: string
    actionLabel?: string
    straight?: boolean
    squared?: boolean
    circled?: boolean
  }>(),
  {
    title: 'Widget Title',
    actionLabel: 'Add Item',
  }
)
</script>

<template>
  <div class="stat-widget table-widget-v1" :class="[props.straight && 'is-straight']">
    <div class="widget-head">
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <button class="button v-button is-primary is-elevated">
        <span class="icon is-small">
          <i aria-hidden="true" class="fas fa-plus"></i>
        </span>
        <span>{{ props.actionLabel }}</span>
      </button>
    </div>

    <table class="table is-hoverable is-fullwidth">
      <tbody>
        <TableWidgetRowMembers
          :rows="props.data"
          :squared="props.squared"
          :circled="props.circled"
        />
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.stat-widget {
  &.table-widget-v1 {
    .table {
      margin-top: 1.5rem;

      tbody {
        tr,
        td {
          border: none;
        }

        tr {
          border-radius: 10px;
        }

        td {
          padding: 1em 0.75em;

          .double-line {
            line-height: 1.4;

            span {
              display: block;

              &:first-child {
                font-family: var(--font-alt);
                font-size: 1rem;
                font-weight: 600;
                color: var(--dark-text);
              }

              &:nth-child(2) {
                color: var(--light-text);
                font-size: 0.9rem;
              }
            }
          }

          .avatars {
            > .v-avatar {
              margin: 0 0.15rem;
            }
          }

          .rating-wrap {
            text-align: inset-inline-end;

            span {
              color: var(--light-text);
            }

            .rating {
              i {
                color: var(--widget-grey-dark-8);

                &.selected {
                  color: var(--yellow) !important;
                }
              }
            }
          }

          .tag-wrap {
            text-align: inset-inline-end;
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .stat-widget {
    &.table-widget-v1 {
      .table {
        tbody {
          td {
            &:nth-child(4),
            &:nth-child(5) {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
