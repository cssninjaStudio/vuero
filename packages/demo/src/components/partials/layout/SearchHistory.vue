<template>
  <div class="search-history">
    <div class="search-history-title">
      Search History
    </div>
    <div class="search-history-links">
      <ul>
        <li>
          <VLink to="#">
            Personal V1
          </VLink>
        </li>
        <li>
          <VLink to="#">
            UI Widgets
          </VLink>
        </li>
        <li>
          <VLink to="#">
            Clean Navbar
          </VLink>
        </li>
        <li>
          <VLink to="#">
            Map V2
          </VLink>
        </li>
        <li>
          <VLink to="#">
            Writer
          </VLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-history {
  background: var(--widget-grey);
  height: 100%;
  padding: 2rem;
}

.search-history-title {
  font-family: var(--font-alt);
  margin-bottom: 1rem;
  font-size: 16px;
}

.search-history-links {
  :deep(a) {
    color: color-mix(in oklab, var(--light-text), black 10%);
    display: block;
    transition: color 0.3s;

    &:hover,
    &:focus {
      color: var(--primary);
    }
  }
}

.is-dark {
  .search-history {
    background: color-mix(in oklab, var(--dark-sidebar), black 4%);
  }
}
</style>
