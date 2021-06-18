<template>
  <V-Dropdown icon="feather:more-vertical" dots right spaced>
    <template #content>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-reload"></i>
        </div>
        <div class="meta">
          <span>Reload</span>
          <span>Reload Widget</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cogs"></i>
        </div>
        <div class="meta">
          <span>Configure</span>
          <span>Configure widget</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>Widget Settings</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove from view</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
