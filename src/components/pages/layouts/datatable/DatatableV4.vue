<script setup lang="ts">
import { datatableV4 } from '/@src/data/layouts/datatable-v4'
</script>

<template>
  <VSimpleDatatables>
    <thead>
      <tr>
        <th scope="col" data-sortable="false">
          <VField>
            <VControl>
              <VCheckbox color="primary" circle outlined />
            </VControl>
          </VField>
        </th>
        <th scope="col" data-sortable="false">Type</th>
        <th scope="col">Name</th>
        <th scope="col">Size</th>
        <th scope="col">Version</th>
        <th scope="col">Last Updated</th>
        <th scope="col" data-sortable="false"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="datatableV4.length === 0">
        <td colspan="7">
          <!--Empty Placeholder-->
          <VPlaceholderSection
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
          </VPlaceholderSection>
        </td>
      </tr>
    </tbody>
  </VSimpleDatatables>
</template>
