<template>
  <V-Dropdown
    icon="feather:more-vertical"
    class="is-pushed-mobile"
    spaced
    right
  >
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-eye"></i>
        </div>
        <div class="meta">
          <span>View</span>
          <span>View user details</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>Projects</span>
          <span>View user projects</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-calendar"></i>
        </div>
        <div class="meta">
          <span>Schedule</span>
          <span>Schedule a meeting</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove from list</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
