<script setup lang="ts">
import { datatableV3 } from '/@src/data/layouts/datatable-v3'
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
      <tr v-for="(row, index) in datatableV3" :key="index">
        <td>
          <VField>
            <VControl>
              <VCheckbox color="primary" circle outlined />
            </VControl>
          </VField>
        </td>
        <td>
          <img class="file-icon" :src="row[0]" alt="" />
        </td>
        <td>
          <span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">{{
            row[1]
          }}</span>
        </td>
        <td>
          <span class="light-text">{{ row[2] }}</span>
        </td>
        <td>
          <span class="light-text">{{ row[3] }}</span>
        </td>
        <td>
          <div class="flex-media">
            <VAvatar :picture="row[4]" size="small" />

            <div class="meta">
              <span>{{ row[5] }}</span>
              <span>{{ row[6] }}</span>
            </div>
          </div>
        </td>
        <td>
          <WidgetDropdown />
        </td>
      </tr>
    </tbody>
  </VSimpleDatatables>
</template>
