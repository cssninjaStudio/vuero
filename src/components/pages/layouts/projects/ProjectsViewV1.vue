<script setup lang="ts">
import { h } from 'vue'

import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'
import { flexRowsBasic as data } from '/@src/data/documentation/table'
import VTag from '/@src/components/base/tags/VTag.vue'
import FlexTableDropdown from '/@src/components/partials/dropdowns/FlexTableDropdown.vue'
import VAvatarStack from '/@src/components/base/avatar/VAvatarStack.vue'

const columns = {
  company: {
    label: 'Company',
    bold: true,
    sortable: true,
    searchable: true,
  },
  type: 'Type',
  industry: 'Industry',
  status: {
    label: 'Status',
    // we can use custom render function for each rows
    renderRow: (row: any) =>
      h(
        VTag,
        {
          rounded: true,
          color:
            row.status === 'Active'
              ? 'success'
              : row.status === 'New'
              ? 'info'
              : row.status === 'Suspended'
              ? 'orange'
              : undefined,
        },
        // note that notation is to render content in the default slot
        {
          default() {
            return `${row.status}`
          },
        }
      ),
  },
  contacts: {
    label: 'Contacts',
    renderRow: (row: any) =>
      // We can render custom components and set props
      h(VAvatarStack, {
        class: 'is-pushed-mobile',
        size: 'small',
        avatars: row.contacts,
        limit: 3,
      }),
  },
  actions: {
    label: 'Actions',
    align: 'end',
    renderRow: (row: any) =>
      h(FlexTableDropdown, {
        // We can catch all events from vue
        onClick: () => {
          console.log('clicked on FlexTableDropdown', row)
        },
      }),
  },
} as const
</script>

<template>
  <div class="all-projects">
    <ProjectsToolbar />

    <h3 class="section-heading">Recently viewed</h3>

    <div class="columns is-multiline project-grid is-flex-tablet-p is-half-tablet-p">
      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/images/icons/logos/slicer.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>The Slicer project</h3>
          <p>Design project</p>
          <progress class="progress is-primary is-tiny" value="31" max="100">
            31%
          </progress>
        </a>
      </div>

      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/images/icons/logos/metamovies.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>Metamovies reworked</h3>
          <p>Design project</p>
          <progress class="progress is-primary is-tiny" value="84" max="100">
            84%
          </progress>
        </a>
      </div>

      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/@src/assets/illustrations/dashboards/flights/company1.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>Supreme Flights app</h3>
          <p>Software project</p>
          <progress class="progress is-primary is-tiny" value="45" max="100">
            45%
          </progress>
        </a>
      </div>

      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/images/icons/logos/fastpizza.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>Fastpizza delivery app</h3>
          <p>Software project</p>
          <progress class="progress is-primary is-tiny" value="90" max="100">
            90%
          </progress>
        </a>
      </div>

      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/images/icons/logos/drop.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>Drop website redesign</h3>
          <p>Design project</p>
          <progress class="progress is-primary is-tiny" value="12" max="100">
            12%
          </progress>
        </a>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <VFlexTable :data="data" :columns="columns" rounded compact></VFlexTable>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';
@import '../../../../scss/pages/projects/projects';
</style>
