<script setup lang="ts">
const filters = ref('')
</script>

<template>
  <div>
    <div class="list-view-toolbar">
      <VField>
        <VControl icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </VControl>
      </VField>

      <div class="list-info">
        <span>Loading records</span>
      </div>

      <div class="buttons">
        <VButton color="primary" icon="fas fa-check" elevated disabled> Approve </VButton>
      </div>
    </div>

    <div class="list-view list-view-v1">
      <div class="list-view-inner">
        <!--Item-->
        <div v-for="key in 10" :key="key" class="list-view-item">
          <VPlaceloadWrap>
            <VPlaceloadAvatar size="medium" />

            <VPlaceloadText last-line-width="60%" class="mx-2" />
            <VPlaceload class="mx-2" disabled />
            <VPlaceload class="mx-2 h-hidden-tablet-p" />
            <VPlaceload class="mx-2 h-hidden-tablet-p" />
            <VPlaceload class="mx-2" />
          </VPlaceloadWrap>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.list-view-v1 {
  .list-view-item {
    @include vuero-r-card;

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: center;

      .meta-left {
        margin-inline-start: 16px;

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 1rem;
          line-height: 1;
        }

        > span:not(.tag) {
          font-size: 0.9rem;
          color: var(--light-text);

          svg {
            height: 12px;
            width: 12px;
          }
        }
      }

      .meta-right {
        margin-inline-start: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .tags {
          margin-inline-end: 30px;
          margin-bottom: 0;

          .tag {
            margin-bottom: 0;
          }
        }

        .stats {
          display: flex;
          align-items: center;
          margin-inline-end: 30px;

          .stat {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            color: var(--light-text);

            > span {
              font-family: var(--font);

              &:first-child {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--dark-text);
                line-height: 1.4;
              }

              &:nth-child(2) {
                text-transform: uppercase;
                font-family: var(--font-alt);
                font-size: 0.75rem;
              }
            }

            svg {
              height: 16px;
              width: 16px;
            }

            i {
              font-size: 1.4rem;
            }
          }

          .separator {
            height: 25px;
            width: 2px;
            border-inline-end: 1px solid var(--fade-grey-dark-3);
            margin: 0 16px;
          }
        }

        .network {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-width: 145px;

          > span {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
            margin-inline-start: 6px;
          }
        }

        .dropdown {
          margin-inline-start: 30px;
        }
      }
    }
  }
}

.is-dark {
  .list-view-v1 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;
          }
        }

        .meta-right {
          .stats {
            .stat {
              span {
                &:first-child {
                  color: var(--dark-dark-text);
                }
              }
            }

            .separator {
              border-color: var(--dark-sidebar-light-16) !important;
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .list-view-v1 {
    .list-view-item {
      .list-view-item-inner {
        position: relative;
        flex-direction: column;

        .v-avatar {
          margin-bottom: 10px;
        }

        .meta-left {
          margin-inline-start: 0;
        }

        .meta-right {
          flex-direction: column;
          margin-inline-start: 0;

          .tags {
            margin: 10px 0;
          }

          .stats {
            margin: 10px 0;
          }

          .network {
            margin: 10px 0 0;
            justify-content: center;

            > span {
              display: none;
            }
          }

          .dropdown {
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            margin-inline-start: 0;
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .list-view-v1 {
    display: flex;
    flex-wrap: wrap;

    .list-view-item {
      margin: 10px;
      width: calc(50% - 20px);

      .list-view-item-inner {
        position: relative;
        flex-direction: column;

        .v-avatar {
          margin-bottom: 10px;
        }

        .meta-left {
          margin-inline-start: 0;
        }

        .meta-right {
          flex-direction: column;
          margin-inline-start: 0;

          .tags {
            margin: 10px 0;
          }

          .stats {
            margin: 10px 0;
          }

          .network {
            margin: 10px 0 0;
            justify-content: center;

            > span {
              display: none;
            }
          }

          .dropdown {
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            margin-inline-start: 0;
          }
        }
      }
    }
  }
}
</style>
