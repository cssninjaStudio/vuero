<script setup lang="ts">
import { popovers } from '/@src/data/users/userPopovers'
</script>

<template>
  <div class="invoice-wrapper">
    <div class="invoice-header">
      <div class="left">
        <h3>Invoice FC-456-14</h3>
      </div>
      <div class="right">
        <div class="controls">
          <a class="action">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:printer"
            ></i>
          </a>
          <a class="action">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:download-cloud"
            ></i>
          </a>
          <a class="action">
            <i aria-hidden="true" class="iconify" data-icon="feather:mail"></i>
          </a>
          <a class="action">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:arrow-left"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div class="invoice-body">
      <div class="invoice-card">
        <div class="invoice-section is-flex is-bordered">
          <tippy class="has-help-cursor" interactive placement="bottom-start">
            <VAvatar size="large" picture="/demo/avatars/13.jpg" />
            <template #content>
              <UserPopoverContent :user="popovers.user13" />
            </template>
          </tippy>

          <div class="meta">
            <h3>Tara Svenson</h3>
            <span>tarasvenson@vuero.io</span>
            <span>+1 546-5491</span>
          </div>
          <div class="end">
            <h3>Invoice FC-456-14</h3>
            <span>Issued: May 27, 2020</span>
            <span>Payment Due: June 27, 2015</span>
          </div>
        </div>

        <div class="invoice-section is-flex is-bordered">
          <VAvatar
            size="large"
            class="is-customer"
            picture="/demo/photos/brands/airbnb.svg"
          />

          <div class="meta">
            <h3>Airbnb</h3>
            <span>888 Brannan St, San Francisco,</span>
            <span>CA 94103, USA</span>
          </div>
          <div class="end is-left">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod
              equidem non reprehendo.
            </p>
          </div>
        </div>
        <div class="invoice-section">
          <div class="flex-table">
            <!--Table header-->
            <div class="flex-table-header">
              <span class="is-grow">Description</span>
              <span class="cell-end">Unit</span>
              <span>Quantity</span>
              <span>Rate</span>
              <span>Subtotal</span>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-grow" data-th="">
                <span class="dark-text">Website Redesign</span>
              </div>
              <div class="flex-table-cell cell-end" data-th="Unit">
                <span class="light-text">hrs</span>
              </div>
              <div class="flex-table-cell" data-th="Quantity">
                <span class="light-text">54</span>
              </div>
              <div class="flex-table-cell" data-th="Rate">
                <span class="dark-inverted">$24</span>
              </div>
              <div class="flex-table-cell has-text-right" data-th="Subtotal">
                <span class="dark-inverted">$1,296</span>
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-grow" data-th="">
                <span class="dark-text">Logo Design</span>
              </div>
              <div class="flex-table-cell cell-end" data-th="Unit">
                <span class="light-text">hrs</span>
              </div>
              <div class="flex-table-cell" data-th="Quantity">
                <span class="light-text">12</span>
              </div>
              <div class="flex-table-cell" data-th="Rate">
                <span class="dark-inverted">$24</span>
              </div>
              <div class="flex-table-cell has-text-right" data-th="Subtotal">
                <span class="dark-inverted">$288</span>
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-grow" data-th="">
                <span class="dark-text">Custom Illustrations</span>
              </div>
              <div class="flex-table-cell cell-end" data-th="Unit">
                <span class="light-text">hrs</span>
              </div>
              <div class="flex-table-cell" data-th="Quantity">
                <span class="light-text">7</span>
              </div>
              <div class="flex-table-cell" data-th="Rate">
                <span class="dark-inverted">$32</span>
              </div>
              <div class="flex-table-cell has-text-right" data-th="Subtotal">
                <span class="dark-inverted">$224</span>
              </div>
            </div>
          </div>

          <div class="flex-table sub-table">
            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-grow is-vhidden" data-th="">
                <span class="dark-text">Website Development</span>
              </div>
              <div class="flex-table-cell cell-end is-vhidden" data-th="Unit">
                <span class="light-text">hrs</span>
              </div>
              <div class="flex-table-cell is-vhidden" data-th="Quantity">
                <span class="light-text">2</span>
              </div>
              <div class="flex-table-cell" data-th="">
                <span class="table-label">Subtotal</span>
              </div>
              <div class="flex-table-cell has-text-right" data-th="">
                <span class="table-total dark-inverted">$1,808</span>
              </div>
            </div>
            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-grow is-vhidden" data-th="">
                <span class="dark-text">Website Development</span>
              </div>
              <div class="flex-table-cell cell-end is-vhidden" data-th="Unit">
                <span class="light-text">hrs</span>
              </div>
              <div class="flex-table-cell is-vhidden" data-th="Quantity">
                <span class="light-text">2</span>
              </div>
              <div class="flex-table-cell" data-th="">
                <span class="table-label">Taxes</span>
              </div>
              <div class="flex-table-cell has-text-right" data-th="">
                <span class="table-total dark-inverted">$273</span>
              </div>
            </div>
            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-grow is-vhidden" data-th="">
                <span class="dark-text">Website Development</span>
              </div>
              <div class="flex-table-cell cell-end is-vhidden" data-th="Unit">
                <span class="light-text">hrs</span>
              </div>
              <div class="flex-table-cell is-vhidden" data-th="Quantity">
                <span class="light-text">2</span>
              </div>
              <div class="flex-table-cell" data-th="">
                <span class="table-label">Total</span>
              </div>
              <div class="flex-table-cell has-text-right" data-th="">
                <span class="table-total is-bigger dark-inverted">$2,081</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_mixins.scss';

/* ==========================================================================
4. Invoice
========================================================================== */

.invoice-wrapper {
  max-width: 740px;
  margin: 0 auto;

  &.is-navbar {
    margin-top: 30px;
  }

  .invoice-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--fade-grey-dark-4);

    .left {
      h3 {
        font-family: var(--font-alt);
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }

    .right {
      .controls {
        display: flex;

        .action {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 32px;
          width: 32px;
          min-width: 32px;
          border-radius: var(--radius-rounded);
          color: var(--light-text);
          margin: 0 4px;
          transition: all 0.3s;

          &:hover {
            color: var(--dark-text);
            background: var(--fade-grey-dark-4);
          }

          svg {
            height: 16px;
            width: 16px;
            stroke-width: 1.6px;
          }
        }
      }
    }
  }

  .invoice-body {
    .invoice-card {
      @include vuero-s-card();

      padding: 0;

      .invoice-section {
        padding: 40px;

        &.is-flex {
          display: flex;
          align-items: center;

          .meta {
            margin-left: 16px;
            font-family: var(--font);

            h3 {
              font-family: var(--font-alt);
              font-size: 1.1rem;
              font-weight: 600;
              line-height: 1;
            }

            span {
              display: block;
              color: var(--light-text);
              font-weight: 400;
              font-size: 0.9rem;
            }
          }

          .end {
            margin-left: auto;
            text-align: right;

            &.is-left {
              text-align: left;
              max-width: 300px;

              p {
                padding-top: 4px;
                font-size: 0.95rem;
                line-height: 1.2;
              }
            }

            h3 {
              font-family: var(--font-alt);
              font-size: 1.1rem;
              font-weight: 600;
              line-height: 1;
            }

            span {
              display: block;
              color: var(--light-text);
              font-weight: 400;
              font-size: 0.9rem;
            }
          }
        }

        &.is-bordered {
          border-bottom: 1px solid var(--fade-grey-dark-3);
        }

        .v-avatar {
          &.is-customer {
            border: 1.6px solid var(--fade-grey-dark-3);
            border-radius: var(--radius-rounded);
            box-shadow: var(--light-box-shadow);
          }
        }

        .flex-table {
          &.sub-table {
            .flex-table-item {
              padding-top: 0;
              padding-bottom: 0;
              margin-bottom: 0;
              min-height: 40px;
              border: none;

              .table-label {
                font-family: var(--font);
                text-transform: uppercase;
                font-size: 0.8rem;
                color: var(--light-text);
              }

              .table-total {
                font-family: var(--font);
                color: var(--dark-text);
                font-weight: 500;

                &.is-bigger {
                  font-size: 1.2rem;
                  font-weight: 600;
                }
              }
            }
          }

          .flex-table-header {
            span {
              &:not(:first-child) {
                justify-content: flex-end;
              }
            }
          }

          .flex-table-item {
            .flex-table-cell {
              &:not(:first-child) {
                justify-content: flex-end;
              }
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
5. Invoice Dark mode
========================================================================== */

.is-dark {
  .invoice-wrapper {
    .invoice-header {
      border-color: var(--dark-sidebar-light-20);

      .left {
        h3 {
          color: var(--dark-dark-text);
        }
      }

      .right {
        .controls {
          .action {
            border: 1px solid transparent;

            &:hover {
              background: var(--dark-sidebar-light-2);
              border-color: var(--primary);
              color: var(--primary);
            }
          }
        }
      }
    }

    .invoice-body {
      .invoice-card {
        @include vuero-card--dark();
      }
    }

    .invoice-section {
      border-color: var(--dark-sidebar-light-12) !important;

      &.is-flex {
        .v-avatar {
          border-color: var(--dark-sidebar-light-12) !important;
        }

        .meta,
        .end {
          h3 {
            color: var(--dark-dark-text);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .invoice-wrapper {
    .invoice-section {
      &.is-flex {
        flex-direction: column;
        text-align: center;

        .v-avatar {
          margin-bottom: 16px;
        }

        .meta {
          margin-left: 0 !important;
        }

        .end {
          margin: 16px auto 0 auto;
          text-align: center !important;
        }
      }

      .flex-table {
        &.sub-table {
          padding-top: 16px;

          .is-vhidden {
            display: none !important;
          }

          .flex-table-item:not(.is-vhidden) {
            flex-direction: revert !important;
          }
        }

        .flex-table-item {
          .flex-table-cell {
            &.is-grow {
              > span {
                margin-left: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
