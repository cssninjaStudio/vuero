<template>
  <!-- Datatable -->
  <div class="table-wrapper" data-simplebar>
    <table
      id="empty-datatable"
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

    <!--Empty Placeholder-->
    <div class="section-placeholder">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/@images/illustrations/placeholders/search-4.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@images/illustrations/placeholders/search-4-dark.svg"
          alt=""
        />
        <h3 class="dark-inverted">No data to show</h3>
        <p>There is currently no data to show in this list.</p>
      </div>
    </div>
  </div>

  <div id="paging-first-datatable" class="pagination datatable-pagination">
    <div class="datatable-info">
      <span></span>
    </div>
  </div>
</template>
