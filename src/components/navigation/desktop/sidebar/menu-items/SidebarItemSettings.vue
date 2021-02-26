<template>
  <li>
    <RouterLink
      id="open-settings"
      :to="{ name: 'admin-layouts-profile-settings' }"
      data-content="Settings"
    >
      <i class="iconify sidebar-svg" data-icon="feather:settings"></i>
    </RouterLink>
  </li>
</template>
