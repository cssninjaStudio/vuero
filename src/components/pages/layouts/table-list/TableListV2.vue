<script setup lang="ts">
import * as listData from '/@src/data/layouts/flex-list-v2'

import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'

export interface ProjectData {
  id: number
  name: string
  customer: string
  duration: string
  picture: string
  industry: string
  status: string
  team: VAvatarProps[]
}

const page = ref(42)
const filters = ref('')

const projects = listData.projects as ProjectData[]
const filteredData = computed(() => {
  if (!filters.value) {
    return projects
  } else {
    const filterRe = new RegExp(filters.value, 'i')
    return projects.filter((item) => {
      return (
        item.name.match(filterRe) ||
        item.customer.match(filterRe) ||
        item.industry.match(filterRe) ||
        item.status.match(filterRe) ||
        item.duration.match(filterRe)
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="datatable-toolbar">
      <VField>
        <VControl icon="feather:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </VControl>
      </VField>

      <VButtons>
        <VButton color="primary" icon="fas fa-plus" elevated> New Project </VButton>
      </VButtons>
    </div>
    <div class="datatable-wrapper">
      <div class="table-container">
        <table class="table datatable-table is-fullwidth">
          <thead>
            <th>Id</th>
            <th>Project</th>
            <th>Customer</th>
            <th>Industry</th>
            <th>Status</th>
            <th>Team</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr v-for="project in filteredData" :key="project.id">
              <td>{{ project.id }}</td>
              <td>
                <div class="flex-media">
                  <VAvatar :picture="project.picture" alt="Avatar" />
                  <div class="meta">
                    <h3>{{ project.name }}</h3>
                    <span>{{ project.duration }}</span>
                  </div>
                </div>
              </td>
              <td>{{ project.customer }}</td>
              <td>{{ project.industry }}</td>
              <td><VTag :label="project.status" /></td>
              <td>
                <div>
                  <VAvatarStack :avatars="project.team" size="small" :limit="3" />
                </div>
              </td>
              <td>
                <FlexTableDropdown />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <VPlaceholderPage
        v-if="filteredData.length === 0"
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

    <!--Table Pagination-->
    <VFlexPagination
      v-if="filteredData.length > 5"
      v-model:current-page="page"
      :item-per-page="10"
      :total-items="873"
      :max-links-displayed="7"
      no-router
      class="mt-4"
    />
  </div>
</template>

<style lang="scss" scoped>
.is-navbar {
  .datatable-toolbar {
    padding-top: 30px;
  }
}

.datatable-toolbar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &.is-reversed {
    flex-direction: row-reverse;
  }

  .field {
    margin-bottom: 0;

    .control {
      .button {
        color: var(--light-text);

        &:hover,
        &:focus {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--primary--color-invert);
        }
      }
    }
  }

  .buttons {
    margin-left: auto;
    margin-bottom: 0;

    .v-button {
      margin-bottom: 0;
    }
  }
}

.is-dark {
  .datatable-toolbar {
    .field {
      .control {
        .button {
          background: var(--dark-sidebar) !important;
          color: var(--light-text);

          &:hover,
          &:focus {
            background: var(--primary) !important;
            border-color: var(--primary) !important;
            color: var(--smoke-white) !important;
          }
        }
      }
    }
  }
}

.datatable-wrapper {
  width: 100%;

  .datatable-container {
    background: var(--white);
    border: none !important;
    overflow-x: auto;

    .table,
    table {
      width: 100%;
    }

    &::-webkit-scrollbar {
      height: 8px !important;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px !important;
      background: rgb(0 0 0 / 20%) !important;
    }
  }
}

.datatable-table {
  border: 1px solid var(--fade-grey);
  border-collapse: collapse;
  border-radius: 0.75rem;

  th {
    padding: 16px 20px;
    font-family: var(--font-alt);
    font-size: 0.8rem;
    color: var(--dark-text);
    text-transform: uppercase;
    border: 1px solid var(--fade-grey);
    font-weight: 600;

    &:last-child {
      text-align: right;
    }
  }

  td {
    font-family: var(--font);
    vertical-align: middle;
    padding: 12px 20px;
    border-bottom: 1px solid var(--fade-grey);

    &:last-child {
      text-align: right;
    }

    &.datatables-empty {
      opacity: 0;
    }
  }

  .light-text {
    color: var(--light-text);
  }

  .flex-media {
    display: flex;
    align-items: center;

    .meta {
      margin-left: 10px;
      line-height: 1.3;

      span {
        display: block;
        font-size: 0.8rem;
        color: var(--light-text);
        font-family: var(--font);

        &:first-child {
          font-family: var(--font-alt);
          color: var(--dark-text);
        }
      }
    }
  }

  .row-action {
    display: flex;
    justify-content: flex-end;
  }

  .checkbox {
    padding: 0;
  }

  .product-photo {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  .file-icon {
    width: 46px;
    height: 46px;
    object-fit: contain;
  }

  .drinks-icon {
    display: block;
    max-width: 48px;
    border-radius: var(--radius-rounded);
    border: 1px solid var(--fade-grey);
  }

  .negative-icon,
  .positive-icon {
    svg {
      height: 16px;
      width: 16px;
    }
  }

  .positive-icon {
    .iconify {
      color: var(--success);

      * {
        stroke-width: 4px;
      }
    }
  }

  .negative-icon {
    &.is-danger {
      .iconify {
        color: var(--danger) !important;
      }
    }

    .iconify {
      color: var(--light-text);

      * {
        stroke-width: 4px;
      }
    }
  }

  .price {
    color: var(--dark-text);
    font-weight: 500;

    &::before {
      content: '$';
    }

    &.price-free {
      color: var(--light-text);
    }
  }

  .status {
    display: flex;
    align-items: center;

    &.is-available {
      i {
        color: var(--success);
      }
    }

    &.is-busy {
      i {
        color: var(--danger);
      }
    }

    &.is-offline {
      i {
        color: var(--light-text);
      }
    }

    i {
      margin-right: 8px;
      font-size: 8px;
    }

    span {
      font-family: var(--font);
      font-size: 0.9rem;
      color: var(--light-text);
    }
  }
}

.is-dark {
  .datatable-wrapper {
    .datatable-container {
      border-color: var(--dark-sidebar-light-12);
      background: var(--dark-sidebar-light-6);
    }
  }

  .datatable-table {
    border-color: var(--dark-sidebar-light-12);

    th,
    td {
      border-color: var(--dark-sidebar-light-12);
      color: var(--dark-dark-text);
    }

    .drinks-icon {
      border-color: var(--dark-sidebar-light-12);
    }
  }
}
</style>
