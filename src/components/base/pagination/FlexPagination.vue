<template>
  <nav
    class="flex-pagination pagination is-rounded"
    aria-label="pagination"
    data-filter-hide
  >
    <a class="pagination-previous has-chevron"
      ><i class="iconify" data-icon="feather:chevron-left"
    /></a>
    <a class="pagination-next has-chevron"
      ><i class="iconify" data-icon="feather:chevron-right"
    /></a>
    <ul class="pagination-list">
      <li>
        <a class="pagination-link" aria-label="Goto page 1">1</a>
      </li>
      <li><span class="pagination-ellipsis">…</span></li>
      <li>
        <a class="pagination-link" aria-label="Goto page 45">45</a>
      </li>
      <li>
        <a
          class="pagination-link is-current"
          aria-label="Page 46"
          aria-current="page"
          >46</a
        >
      </li>
      <li>
        <a class="pagination-link" aria-label="Goto page 47">47</a>
      </li>
      <li><span class="pagination-ellipsis">…</span></li>
      <li>
        <a class="pagination-link" aria-label="Goto page 86">86</a>
      </li>
    </ul>
  </nav>
</template>
