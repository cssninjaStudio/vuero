<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>Dashboards</h3>
      </div>

      <ul
        class="submenu"
        data-simplebar
      >
        <VCollapseLinks>
          <template #header>
            Personal
            <VIcon
              icon="lucide:chevron-right"
            />
          </template>

          <RouterLink
            to="app"
            class="is-submenu"
          >
            <i
              aria-hidden="true"
              class="lnil lnil-home"
            />
            <span>Home</span>
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
