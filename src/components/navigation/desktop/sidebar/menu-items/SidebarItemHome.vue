<template>
  <li>
    <RouterLink
      id="home-sidebar-menu"
      :to="{ name: 'sidebar-dashboards' }"
      data-content="Dashboards"
    >
      <i class="iconify sidebar-svg" data-icon="feather:activity"></i>
    </RouterLink>
  </li>
</template>
