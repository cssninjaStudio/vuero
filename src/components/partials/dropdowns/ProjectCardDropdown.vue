<template>
  <V-Dropdown icon="feather:more-vertical" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-eye"></i>
        </div>
        <div class="meta">
          <span>View</span>
          <span>View this project</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-pencil"></i>
        </div>
        <div class="meta">
          <span>Edit</span>
          <span>Edit this project</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-archive"></i>
        </div>
        <div class="meta">
          <span>Archive</span>
          <span>Archive this project</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
