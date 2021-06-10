<template>
  <V-Dropdown icon="feather:more-vertical" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-reload"></i>
        </div>
        <div class="meta">
          <span>Reload</span>
          <span>Refresh search results</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-save"></i>
        </div>
        <div class="meta">
          <span>Save</span>
          <span>Save this search</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>configuration options</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
