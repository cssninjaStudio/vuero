<script setup lang="ts">
import { users } from '/@src/data/layouts/user-grid-v3'

const props = withDefaults(
  defineProps<{
    activeTab?: 'all' | 'team'
  }>(),
  {
    activeTab: 'all',
  },
)

const filters = ref('')
const tab = ref(props.activeTab)

const filteredData = computed(() => {
  if (!filters.value) {
    return users
  }
  else {
    return users.filter((item) => {
      return (
        item.username.match(new RegExp(filters.value, 'i'))
        || item.location.match(new RegExp(filters.value, 'i'))
        || item.position.match(new RegExp(filters.value, 'i'))
        || item.badge.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="user-grid-toolbar is-reversed tabs-wrapper is-slider">
      <VControl icon="lucide:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        >
      </VControl>

      <div class="tabs-inner">
        <VTabs
          v-model:selected="tab"
          slider
          align="centered"
          :tabs="[
            {
              label: 'All',
              value: 'all',
            },
            {
              label: 'Team',
              value: 'team',
            },
          ]"
        />
      </div>
    </div>

    <div class="user-grid user-grid-v3">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        :class="[filteredData.length !== 0 && 'is-hidden']"
        title="We couldn't find any matching results."
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/images/illustrations/placeholders/search-5.svg"
            alt=""
          >
          <img
            class="dark-image"
            src="/images/illustrations/placeholders/search-5-dark.svg"
            alt=""
          >
        </template>
      </VPlaceholderPage>

      <!--Active Tab-->
      <div v-if="tab === 'all'">
        <TransitionGroup
          name="list"
          tag="div"
          class="columns is-multiline is-flex-tablet-p is-half-tablet-p"
        >
          <!--Grid item-->
          <div
            v-for="item in filteredData"
            :key="item.id"
            class="column is-3"
          >
            <TabbedGridItem :user="item" />
          </div>
        </TransitionGroup>
      </div>

      <!--inactive Tab-->
      <div v-else-if="tab === 'team'">
        <!--Empty placeholder-->
        <VPlaceholderPage
          title="No team members."
          subtitle="Looks like you don't have any team members yet. When you'll start
              adding some to your team, they will be showing up in here."
        >
          <template #image>
            <img
              class="light-image is-larger"
              src="/images/illustrations/placeholders/team.svg"
              alt=""
            >
            <img
              class="dark-image is-larger"
              src="/images/illustrations/placeholders/team-dark.svg"
              alt=""
            >
          </template>
        </VPlaceholderPage>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.user-grid-v3 {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }

  .grid-item {
    @include vuero-s-card;

    text-align: center;

    > .v-avatar {
      display: block;
      margin: 0 auto 4px;
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-size: 0.85rem;
      margin-bottom: 16px;
    }

    .icon-tabs-wrapper {
      padding-bottom: 20px;

      .icon-tabs {
        width: 100%;
        max-width: 180px;
        margin: 0 auto;
        border: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);
        border-radius: 8px;
        background: var(--white);
        box-shadow: var(--light-box-shadow);
        margin-bottom: 16px;

        .icon-tabs-inner {
          position: relative;
          display: flex;
          width: 100%;

          .tab-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 33.3%;
            color: var(--light-text);
            padding: 4px 8px;
            margin: 8px 0;

            &.is-active {
              color: var(--primary);
            }

            &:first-child {
              &.is-active ~ .icon-tabs-naver {
                margin-inline-start: 0;
              }
            }

            &:nth-child(2) {
              border-inline-start: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);
              border-inline-end: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);

              &.is-active ~ .icon-tabs-naver {
                margin-inline-start: 33% !important;
              }
            }

            &:nth-child(3) {
              &.is-active ~ .icon-tabs-naver {
                margin-inline-start: 66.6%;
              }
            }

            .iconify {
              pointer-events: none;
              height: 16px;
              width: 16px;
              stroke-width: 1.6px;
            }
          }

          .icon-tabs-naver {
            position: absolute;
            bottom: -1px;
            inset-inline-start: 0;
            display: block;
            width: 33.3% !important;
            height: 2px;
            background: var(--primary);
            z-index: 1;
            transition: all 0.3s; // transition-all test
            border-radius: 12px;
          }
        }
      }

      .icon-tabs-content {
        display: none;
        animation: fadeInLeft 0.5s;
        padding-top: 16px;

        &.is-active {
          display: block;
        }
      }

      .chart-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 165px;
        margin: 0 auto;

        .stats {
          span {
            display: block;

            &:first-child {
              font-family: var(--font);
              font-size: 1.8rem;
              color: var(--dark-text);
              font-weight: 700;
              line-height: 1;
            }

            &:nth-child(2) {
              font-family: var(--font-alt);
              color: var(--light-text);
            }
          }
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;

      .button,
      .v-button {
        width: calc(50% - 4px);
        color: var(--light-text);
        margin-bottom: 0;

        &:hover,
        &:focus {
          border-color: color-mix(in oklab, var(--fade-grey), black 4%);
          color: var(--primary);
          box-shadow: var(--light-box-shadow);
        }
      }
    }
  }
}

.is-dark {
  .user-grid-v3 {
    .grid-item {
      @include vuero-card--dark;

      .icon-tabs-wrapper {
        .icon-tabs {
          background: color-mix(in oklab, var(--dark-sidebar), white 2%);
          border-color: color-mix(in oklab, var(--dark-sidebar), white 10%);

          .icon-tabs-inner {
            .tab-item {
              border-color: color-mix(in oklab, var(--dark-sidebar), white 10%);

              &.is-active {
                color: var(--primary);
              }
            }

            .icon-tabs-naver {
              background: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>
