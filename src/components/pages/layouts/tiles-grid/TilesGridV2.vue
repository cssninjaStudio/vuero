<script setup lang="ts">
import { computed, ref } from 'vue'

import { files } from '/@src/data/layouts/tile-grid-v2'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return files
  } else {
    return files.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.size.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

const valueSingle = ref(0)
const optionsSingle = [
  'All Files',
  'Recently Updated',
  'My Files',
  'Team Files',
  'Deprecated',
]
</script>

<template>
  <div>
    <div class="tile-grid-toolbar">
      <V-Control icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
      </V-Control>

      <div class="buttons">
        <V-Field class="h-hidden-mobile">
          <V-Control>
            <Multiselect
              v-model="valueSingle"
              :options="optionsSingle"
              :max-height="145"
              placeholder="Select an option"
            />
          </V-Control>
        </V-Field>
        <V-Button color="primary" raised>
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus"></i>
          </span>
          <span>Add File</span>
        </V-Button>
      </div>
    </div>

    <div class="tile-grid tile-grid-v2">
      <!--List Empty Search Placeholder -->
      <V-PlaceholderPage
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
            src="/@src/assets/illustrations/placeholders/search-4.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
            alt=""
          />
        </template>
      </V-PlaceholderPage>

      <!--Tile Grid v1-->
      <transition-group name="list" tag="div" class="columns is-multiline">
        <!--Grid item-->
        <div v-for="item in filteredData" :key="item.id" class="column is-4">
          <div class="tile-grid-item">
            <div class="tile-grid-item-inner">
              <img
                :src="item.icon"
                alt=""
                @error.once="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
              <div class="meta">
                <span class="dark-inverted">{{ item.name }}</span>
                <span>
                  <span>{{ item.size }}</span>
                  <i
                    aria-hidden="true"
                    class="fas fa-circle icon-separator"
                  ></i>
                  <span>Updated {{ item.updated }}</span>
                </span>
              </div>
              <FileTileDropdown />
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';

.tile-grid {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.tile-grid-v2 {
  .tile-grid-item {
    @include vuero-s-card();

    border-radius: 14px;
    padding: 16px;
    cursor: pointer;

    &:hover {
      border-color: $primary;
      box-shadow: $light-box-shadow;
    }

    .tile-grid-item-inner {
      display: flex;
      align-items: center;

      > img {
        display: block;
        width: 50px;
        height: 50px;
        min-width: 50px;
      }

      .meta {
        margin-left: 10px;
        line-height: 1.4;

        span {
          display: block;
          font-family: $font;

          &:first-child {
            color: $dark-text;
            font-family: $font-alt;
            font-weight: 600;
            font-size: 1rem;
          }

          &:nth-child(2) {
            display: flex;
            align-items: center;

            span {
              display: inline-block;
              color: $light-text;
              font-size: 0.8rem;
              font-weight: 400;
            }

            .icon-separator {
              position: relative;
              font-size: 4px;
              color: $light-text;
              padding: 0 6px;
            }
          }
        }
      }

      .dropdown {
        margin-left: auto;
      }
    }
  }
}

.is-dark {
  .tile-grid {
    .tile-grid-item {
      @include vuero-card--dark();
    }
  }
  .tile-grid-v2 {
    .tile-grid-item {
      @include vuero-card--dark();
      &:hover {
        border-color: $accent !important;
      }
    }
  }
}
</style>
