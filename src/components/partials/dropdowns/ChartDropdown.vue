<template>
  <V-Dropdown icon="feather:more-vertical" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-reload"></i>
        </div>
        <div class="meta">
          <span>Reload</span>
          <span>Reload chart</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-users-alt"></i>
        </div>
        <div class="meta">
          <span>Customers</span>
          <span>View customer reports</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-gift-alt-1"></i>
        </div>
        <div class="meta">
          <span>Products</span>
          <span>View product reports</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-bank"></i>
        </div>
        <div class="meta">
          <span>Finance</span>
          <span>View financial reports</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
