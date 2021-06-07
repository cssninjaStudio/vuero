<script setup lang="ts">
import { bitcoinChartOptions } from '/@src/data/dashboards/banking-v3/bitcoinPriceChart'
import { evolutionRadialOptions } from '/@src/data/dashboards/banking-v3/evolutionRadialChart'
import { popularityGaugeOptions } from '/@src/data/dashboards/banking-v3/popularityGaugeChart'
import { popovers } from '/@src/data/users/userPopovers'
</script>

<template>
  <div class="banking-dashboard banking-dashboard-v3">
    <!--Header-->
    <div class="dashboard-header">
      <div class="left">
        <span>Latest Bitcoin (BTC) Price Chart</span>
        <div class="currency">
          <span class="amount is-positive dark-inverted">$10584.30</span>
        </div>
      </div>
      <div class="right">
        <div class="buttons">
          <V-Action dark="3">Hour</V-Action>
          <V-Action dark="3">Day</V-Action>
          <V-Action dark="3" active>Week</V-Action>
          <V-Action dark="3">Month</V-Action>
          <V-Action dark="3">Year</V-Action>
        </div>
      </div>
    </div>

    <!--Body-->
    <div class="columns">
      <div class="column is-8">
        <!--Tiles-->
        <div class="dashboard-tiles">
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Market Cap</span>
            <span class="dark-inverted">$129,992,260,090</span>
          </div>
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Volume 24h</span>
            <span class="dark-inverted">$453,178 K</span>
          </div>
          <!--Tile-->
          <div class="dashboard-tile">
            <span>Low/high 24h</span>
            <span class="dark-inverted">$10,212 - $10,584</span>
          </div>
        </div>

        <!--Chart-->
        <div class="dashboard-card">
          <apexchart
            id="currency-chart"
            :height="bitcoinChartOptions.chart.height"
            :type="bitcoinChartOptions.chart.type"
            :series="bitcoinChartOptions.series"
            :options="bitcoinChartOptions"
          >
          </apexchart>
        </div>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="dashboard-card">
              <apexchart
                id="radial-chart"
                :height="evolutionRadialOptions.chart.height"
                :type="evolutionRadialOptions.chart.type"
                :series="evolutionRadialOptions.series"
                :options="evolutionRadialOptions"
              >
              </apexchart>
            </div>
          </div>
          <div class="column is-6">
            <div class="dashboard-card">
              <apexchart
                id="radial-gauge"
                :height="popularityGaugeOptions.chart.height"
                :type="popularityGaugeOptions.chart.type"
                :series="popularityGaugeOptions.series"
                :options="popularityGaugeOptions"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <!--Info-->
        <div class="dashboard-card is-side">
          <V-Block title="Bitcoin" subtitle="BTC" center m-responsive>
            <template #icon>
              <V-Avatar picture="/images/icons/cryptocurrencies/btc.svg" />
            </template>
            <template #action>
              <GraphDropdown />
            </template>
          </V-Block>
          <div class="currency-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vide,
              quantum, inquam, fallare, Torquate. Quid censes in Latino fore?
              Optime, inquam. Ratio quidem vestra sic cogit. Prave, nequiter,
              turpiter cenabat; Duo Reges: constructio interrete.
            </p>
          </div>
          <div class="button-wrap">
            <V-Button color="primary" elevated>Buy BTC</V-Button>
            <V-Button dark-outlined>Compare</V-Button>
          </div>
        </div>

        <div class="dashboard-card is-side">
          <div class="subheading-wrap">
            <h4 class="subheading dark-inverted">Followers</h4>
            <a href="#" class="action-link">View All</a>
          </div>

          <div class="people">
            <tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <V-Avatar picture="/demo/avatars/21.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user21" />
              </template>
            </tippy>
            <tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <V-Avatar initials="SC" color="h-purple" />
              <template #content>
                <UserPopoverContent :user="popovers.user120" />
              </template>
            </tippy>
            <tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <V-Avatar picture="/demo/avatars/7.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user7" />
              </template>
            </tippy>
            <tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <V-Avatar initials="AT" color="success" />
              <template #content>
                <UserPopoverContent :user="popovers.user124" />
              </template>
            </tippy>
            <tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <V-Avatar picture="/demo/avatars/31.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user31" />
              </template>
            </tippy>
            <V-Avatar initials="50K" color="h-yellow" />
          </div>
        </div>

        <div class="dashboard-card is-side">
          <div class="subheading-wrap">
            <h4 class="subheading dark-inverted">Popular Coins</h4>
            <a href="#" class="action-link">View All</a>
          </div>

          <V-Block title="Monero" subtitle="XMR" center>
            <template #icon>
              <V-Avatar
                picture="/images/icons/cryptocurrencies/xmr.svg"
                size="small"
              />
            </template>
            <template #action>
              <V-IconButton icon="feather:plus" circle dark-outlined />
            </template>
          </V-Block>

          <V-Block title="Litecoin" subtitle="LTC" center>
            <template #icon>
              <V-Avatar
                picture="/images/icons/cryptocurrencies/ltc.svg"
                size="small"
              />
            </template>
            <template #action>
              <V-IconButton icon="feather:plus" circle dark-outlined />
            </template>
          </V-Block>

          <V-Block title="ChainLink" subtitle="LINK" center>
            <template #icon>
              <V-Avatar
                picture="/images/icons/cryptocurrencies/link.svg"
                size="small"
              />
            </template>
            <template #action>
              <V-IconButton icon="feather:plus" circle dark-outlined />
            </template>
          </V-Block>

          <V-Block title="Binance Coin" subtitle="BNB" center>
            <template #icon>
              <V-Avatar
                picture="/images/icons/cryptocurrencies/bnb.svg"
                size="small"
              />
            </template>
            <template #action>
              <V-IconButton icon="feather:plus" circle dark-outlined />
            </template>
          </V-Block>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';

.banking-dashboard-v3 {
  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $font;
    margin-bottom: 20px;

    .left {
      > span {
        color: $light-text;
      }

      .currency {
        .amount {
          position: relative;
          font-size: 2rem;
          font-weight: 600;
          color: $dark-text;

          &.is-positive {
            &::after {
              color: $h-green;
            }
          }

          &.is-negative {
            &::after {
              color: $h-red;
            }
          }

          &::after {
            content: '+3.4%';
            position: relative;
            top: -8px;
            right: -8px;
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  .dashboard-tiles {
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
    margin-top: -8px;
    margin-bottom: 1rem;

    .dashboard-tile {
      @include vuero-s-card();

      width: calc(33.3% - 16px);
      margin: 8px;

      span {
        display: block;
        font-family: $font;

        &:first-child {
          font-size: 0.9rem;
          color: $light-text;
          margin-bottom: 4px;
        }

        &:nth-child(2) {
          font-weight: 500;
          font-size: 1.2rem;
          color: $dark-text;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card();

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-side {
      padding: 30px;

      .people {
        .v-avatar {
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }
      }
    }

    &.is-wallet {
      img {
        display: block;
        max-width: 200px;
        margin: 0 auto;
      }
    }

    .subheading-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .subheading {
        font-family: $font-alt;
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: $dark-text;
      }

      .action-link {
        font-size: 0.9rem;
      }
    }

    .currency-description {
      padding: 10px 0 20px 0;
    }

    .button-wrap {
      display: flex;
      justify-content: space-between;

      .button {
        width: 49%;
      }
    }
  }
}

.is-dark {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        @include vuero-card--dark();
      }
    }

    .dashboard-card {
      @include vuero-card--dark();
    }
  }
}

@media only screen and (max-width: 767px) {
  .banking-dashboard-v3 {
    .dashboard-header {
      flex-direction: column;

      .left {
        margin-bottom: 1.5rem;
      }
    }

    .dashboard-tiles {
      flex-wrap: wrap;

      .dashboard-tile {
        width: calc(100% - 16px) !important;
        min-width: calc(100% - 16px) !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        span {
          &:nth-child(2) {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        span {
          &:nth-child(2) {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
