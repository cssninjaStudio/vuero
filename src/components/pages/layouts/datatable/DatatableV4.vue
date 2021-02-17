<script setup lang="ts">
import { datatableV4 } from '/@src/data/layouts/datatable-v4'
</script>

<template>
  <!-- Datatable -->
  <V-SimpleDatatables>
    <thead>
      <tr>
        <th data-sortable="false">
          <V-Control>
            <label class="checkbox is-primary is-outlined is-circle">
              <input id="head-checkbox" type="checkbox" />
              <span></span>
            </label>
          </V-Control>
        </th>
        <th data-sortable="false">Type</th>
        <th>Name</th>
        <th>Size</th>
        <th>Version</th>
        <th>Last Updated</th>
        <th data-sortable="false"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="datatableV4.length === 0">
        <td colspan="7">
          <!--Empty Placeholder-->
          <V-PlaceholderSection
            title="No data to show"
            subtitle="There is currently no data to show in this list."
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
          </V-PlaceholderSection>
        </td>
      </tr>
    </tbody>
  </V-SimpleDatatables>
</template>
