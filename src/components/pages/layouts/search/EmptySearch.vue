<script setup lang="ts">
type TabId = 'all' | 'people' | 'records'
const activeTab = ref<TabId>('all')
</script>

<template>
  <div class="search-results-wrapper">
    <div class="search-results-header">
      <VField raw>
        <VControl icon="feather:search">
          <VInput placeholder="Search again..." />
        </VControl>
      </VField>

      <div class="search-info">
        <span>0 results found</span>
      </div>

      <div class="tabs-inner">
        <div class="tabs is-disabled">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="activeTab = 'all'"
                @click="activeTab = 'all'"
                ><span>All</span></a
              >
            </li>
            <li :class="[activeTab === 'people' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="activeTab = 'people'"
                @click="activeTab = 'people'"
                ><span>People</span></a
              >
            </li>
            <li :class="[activeTab === 'records' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="activeTab = 'records'"
                @click="activeTab = 'records'"
                ><span>Records</span></a
              >
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="search-results-body">
      <!--Search Placeholder -->
      <VPlaceholderPage
        title="We couldn't find any matching results."
        subtitle="Too bad. Looks like we couldn't find any matching results for the search terms
            you've entered. Please try different search terms or criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-7.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-7-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .search-results-wrapper {
    padding-top: 30px;
  }
}

.search-results-wrapper {
  .search-results-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .control {
      margin-inline-end: 10px;
    }

    .search-info {
      span {
        font-family: var(--font);
        color: var(--light-text);
      }
    }

    .tabs-inner {
      margin-inline-start: auto;

      .tabs {
        margin-bottom: 0;
        min-width: 280px;
      }
    }
  }

  .search-results-body {
    .filter-box {
      @include vuero-s-card;

      margin-bottom: 16px;

      h4 {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 10px;
      }

      .field {
        margin-bottom: 0;

        .control {
          display: flex;
          align-items: center;

          .checkbox {
            padding: 0.75em 0;
          }

          .control-end {
            margin-inline-start: auto;
          }
        }
      }
    }

    .search-results-group {
      padding-inline-start: 30px;
      margin-bottom: 20px;

      .group-header {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--fade-grey-dark-6);
        padding: 0 0 12px;
        margin-bottom: 12px;

        .icon-wrap {
          height: 32px;
          width: 32px;
          min-width: 32px;
          border-radius: var(--radius-rounded);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-inline-end: 6px;
          background: var(--white);
          border: 1px solid var(--primary);
          color: var(--primary);

          svg {
            height: 14px;
            width: 14px;
          }
        }

        h4 {
          font-family: var(--font-alt);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--light-text);
        }
      }

      .search-results-list {
        padding: 10px 0;

        .search-results-item {
          @include vuero-s-card;

          margin-bottom: 16px;

          > img {
            display: block;
            height: 50px;
            width: 50px;
            min-width: 50px;
          }
        }
      }
    }
  }
}

/* ==========================================================================
2. Search Results Page Dark mode
========================================================================== */

.is-dark {
  .search-results-wrapper {
    .search-results-body {
      .filter-box {
        @include vuero-card--dark;
      }

      .search-results-group {
        .search-results-list {
          .search-results-item {
            @include vuero-card--dark;
          }
        }

        .group-header {
          border-color: var(--dark-sidebar-light-20);

          .icon-wrap {
            background: var(--dark-sidebar-light-2);
            border-color: var(--primary);
            color: var(--primary);
          }
        }
      }
    }
  }
}

/* ==========================================================================
3. Media Queries
========================================================================== */

@media only screen and (width <= 767px) {
  .search-results-wrapper {
    .search-results-header {
      flex-direction: column;

      .control,
      .tabs-inner {
        margin: 0;
      }

      .control {
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
      }

      .search-info {
        padding: 10px 0;
      }
    }

    .search-results-body {
      .search-results-group {
        padding-inline-start: 0;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .search-results-wrapper {
    .search-results-body {
      .search-results-group {
        padding-inline-start: 0;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .search-results-wrapper {
    .search-results-body {
      .search-results-group {
        padding-inline-start: 10px;
      }
    }
  }
}
</style>
