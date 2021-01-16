<template>
  <!-- Datatable -->
  <div class="table-wrapper" data-simplebar>
    <table
      id="files-datatable"
      class="table is-datatable is-hoverable table-is-bordered"
    >
      <thead>
        <tr>
          <th>
            <div class="control">
              <label class="checkbox is-primary is-outlined is-circle">
                <input type="checkbox" />
                <span></span>
              </label>
            </div>
          </th>
          <th>Type</th>
          <th>Name</th>
          <th class="has-text-centered">Size</th>
          <th class="has-text-centered">Version</th>
          <th>Last Updated</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>

  <div id="paging-first-datatable" class="pagination datatable-pagination">
    <div class="datatable-info">
      <span></span>
    </div>
  </div>
</template>
