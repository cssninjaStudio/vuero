<template>
  <div class="search-history">
    <div class="search-history-title">
      Search History
    </div>
    <div class="search-history-links">
      <ul>
        <li>
          <RouterLink to="#">
            Personal V1
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            UI Widgets
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            Clean Navbar
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            Map V2
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            Writer
          </RouterLink>
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
  a {
    color: var(--light-text);
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
    background: var(--dark-sidebar-dark-4);
  }
}
</style>
