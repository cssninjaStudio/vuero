<script setup lang="ts">
const filters = ref('')
const valueSingle = ref(0)
const optionsSingle = [
  'All',
  'UI/UX Design',
  'Web Development',
  'Software Eng.',
  'Business',
]
</script>

<template>
  <div>
    <div class="user-grid-toolbar">
      <VField raw>
        <VControl icon="feather:search">
          <VInput v-model="filters" placeholder="Search..." />
        </VControl>
      </VField>

      <VButtons>
        <VField v-slot="{ id }" class="v-hidden-mobile">
          <VControl>
            <Multiselect
              v-model="valueSingle"
              :attrs="{ id }"
              :options="optionsSingle"
              :max-height="145"
              placeholder="Select an option"
            />
          </VControl>
        </VField>
        <VButton color="primary" raised>
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus"></i>
          </span>
          <span>Add User</span>
        </VButton>
      </VButtons>
    </div>

    <div class="tile-grid tile-grid-v1">
      <!--Tile Grid v1-->
      <div class="columns is-multiline">
        <!--Grid item-->
        <div v-for="key in 30" :key="key" class="column is-4">
          <div class="tile-grid-item">
            <div class="tile-grid-item-inner placeload-wrap is-flex">
              <VPlaceloadAvatar size="medium" />
              <VPlaceloadText width="80%" last-line-width="60%" class="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.tile-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.is-dark {
  .tile-grid {
    .tile-grid-item {
      @include vuero-card--dark;
    }
  }
}

.tile-grid-v1 {
  .tile-grid-item {
    @include vuero-s-card;

    border-radius: 14px;
    padding: 16px;

    .tile-grid-item-inner {
      display: flex;
      align-items: center;

      .meta {
        margin-inline-start: 10px;
        line-height: 1.2;

        span {
          display: block;
          font-family: var(--font);

          &:first-child {
            color: var(--dark-text);
            font-family: var(--font-alt);
            font-weight: 600;
            font-size: 1rem;
          }

          &:nth-child(2) {
            color: var(--light-text);
            font-size: 0.9rem;
          }
        }
      }

      .dropdown {
        position: relative;
        margin-inline-start: auto;
      }
    }
  }
}
</style>
