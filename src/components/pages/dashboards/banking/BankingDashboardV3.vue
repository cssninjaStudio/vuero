<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'
import { useBitcoinPriceChart } from '/@src/data/dashboards/banking-v3/bitcoinPriceChart'
import { useEvolutionRadialChart } from '/@src/data/dashboards/banking-v3/evolutionRadialChart'
import { usePopularityGaugeChart } from '/@src/data/dashboards/banking-v3/popularityGaugeChart'
import { popovers } from '/@src/data/users/userPopovers'

const { bitcoinChartOptions } = useBitcoinPriceChart()
const { evolutionRadialOptions } = useEvolutionRadialChart()
const { popularityGaugeOptions } = usePopularityGaugeChart()
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
          <VAction dark="3">Hour</VAction>
          <VAction dark="3">Day</VAction>
          <VAction dark="3" active>Week</VAction>
          <VAction dark="3">Month</VAction>
          <VAction dark="3">Year</VAction>
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
          <ApexChart
            id="currency-chart"
            :height="bitcoinChartOptions.chart.height"
            :type="bitcoinChartOptions.chart.type"
            :series="bitcoinChartOptions.series"
            :options="bitcoinChartOptions"
          >
          </ApexChart>
        </div>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="dashboard-card">
              <ApexChart
                id="radial-chart"
                :height="evolutionRadialOptions.chart.height"
                :type="evolutionRadialOptions.chart.type"
                :series="evolutionRadialOptions.series"
                :options="evolutionRadialOptions"
              >
              </ApexChart>
            </div>
          </div>
          <div class="column is-6">
            <div class="dashboard-card">
              <ApexChart
                id="radial-gauge"
                :height="popularityGaugeOptions.chart.height"
                :type="popularityGaugeOptions.chart.type"
                :series="popularityGaugeOptions.series"
                :options="popularityGaugeOptions"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <!--Info-->
        <div class="dashboard-card is-side">
          <VBlock title="Bitcoin" subtitle="BTC" center m-responsive>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/btc.svg" />
            </template>
            <template #action>
              <GraphDropdown />
            </template>
          </VBlock>
          <div class="currency-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vide, quantum,
              inquam, fallare, Torquate. Quid censes in Latino fore? Optime, inquam. Ratio
              quidem vestra sic cogit. Prave, nequiter, turpiter cenabat; Duo Reges:
              constructio interrete.
            </p>
          </div>
          <div class="button-wrap">
            <VButton color="primary" elevated>Buy BTC</VButton>
            <VButton dark-outlined>Compare</VButton>
          </div>
        </div>

        <div class="dashboard-card is-side">
          <div class="subheading-wrap">
            <h4 class="subheading dark-inverted">Followers</h4>
            <a class="action-link" tabindex="0">View All</a>
          </div>

          <div class="people">
            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                :offset="[0, 40]"
                placement="top-end"
              >
                <VAvatar picture="/demo/avatars/21.jpg" />
                <template #content>
                  <UserPopoverContent :user="popovers.user21" />
                </template>
              </Tippy>
            </div>
            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                :offset="[0, 40]"
                placement="top-end"
              >
                <VAvatar initials="SC" color="h-purple" />
                <template #content>
                  <UserPopoverContent :user="popovers.user120" />
                </template>
              </Tippy>
            </div>
            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                :offset="[0, 40]"
                placement="top-end"
              >
                <VAvatar picture="/demo/avatars/7.jpg" />
                <template #content>
                  <UserPopoverContent :user="popovers.user7" />
                </template>
              </Tippy>
            </div>
            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                :offset="[0, 40]"
                placement="top-end"
              >
                <VAvatar initials="AT" color="success" />
                <template #content>
                  <UserPopoverContent :user="popovers.user124" />
                </template>
              </Tippy>
            </div>

            <div>
              <Tippy
                class="has-help-cursor"
                interactive
                :offset="[0, 40]"
                placement="top-end"
              >
                <VAvatar picture="/demo/avatars/31.jpg" />
                <template #content>
                  <UserPopoverContent :user="popovers.user31" />
                </template>
              </Tippy>
            </div>
            <VAvatar initials="50K" color="h-yellow" />
          </div>
        </div>

        <div class="dashboard-card is-side">
          <div class="subheading-wrap">
            <h4 class="subheading dark-inverted">Popular Coins</h4>
            <a class="action-link" tabindex="0">View All</a>
          </div>

          <VBlock title="Monero" subtitle="XMR" center>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/xmr.svg" size="small" />
            </template>
            <template #action>
              <VIconButton icon="feather:plus" circle dark-outlined />
            </template>
          </VBlock>

          <VBlock title="Litecoin" subtitle="LTC" center>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/ltc.svg" size="small" />
            </template>
            <template #action>
              <VIconButton icon="feather:plus" circle dark-outlined />
            </template>
          </VBlock>

          <VBlock title="ChainLink" subtitle="LINK" center>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/link.svg" size="small" />
            </template>
            <template #action>
              <VIconButton icon="feather:plus" circle dark-outlined />
            </template>
          </VBlock>

          <VBlock title="Binance Coin" subtitle="BNB" center>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/bnb.svg" size="small" />
            </template>
            <template #action>
              <VIconButton icon="feather:plus" circle dark-outlined />
            </template>
          </VBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.banking-dashboard-v3 {
  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font);
    margin-bottom: 20px;

    .left {
      > span {
        color: var(--light-text);
      }

      .currency {
        .amount {
          position: relative;
          font-size: 2rem;
          font-weight: 600;
          color: var(--dark-text);

          &.is-positive {
            &::after {
              color: var(--green);
            }
          }

          &.is-negative {
            &::after {
              color: var(--red);
            }
          }

          &::after {
            content: '+3.4%';
            position: relative;
            top: -8px;
            inset-inline-end: calc(var(--transform-direction) * -8px);
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  .dashboard-tiles {
    display: flex;
    margin-inline-start: -8px;
    margin-inline-end: -8px;
    margin-top: -8px;
    margin-bottom: 1rem;

    .dashboard-tile {
      @include vuero-s-card;

      width: calc(33.3% - 16px);
      margin: 8px;

      span {
        display: block;
        font-family: var(--font);

        &:first-child {
          font-size: 0.9rem;
          color: var(--light-text);
          margin-bottom: 4px;
        }

        &:nth-child(2) {
          font-weight: 500;
          font-size: 1.2rem;
          color: var(--dark-text);
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-side {
      padding: 30px;

      .people {
        display: flex;
        gap: 0.5rem;
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
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--dark-text);
      }

      .action-link {
        font-size: 0.9rem;
      }
    }

    .currency-description {
      padding: 10px 0 20px;
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
        @include vuero-card--dark;
      }
    }

    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (width <= 767px) {
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

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
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

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
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
