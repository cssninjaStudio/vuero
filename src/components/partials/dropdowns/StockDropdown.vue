<template>
  <V-Dropdown class="end-action" icon="feather:more-vertical" spaced right>
    <template #content>
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-coins"></i>
        </div>
        <div class="meta">
          <span>Invest</span>
          <span>Buy more stocks</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-bank"></i>
        </div>
        <div class="meta">
          <span>Trade</span>
          <span>View opportunities</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-reload"></i>
        </div>
        <div class="meta">
          <span>Refresh</span>
          <span>Refresh data</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
