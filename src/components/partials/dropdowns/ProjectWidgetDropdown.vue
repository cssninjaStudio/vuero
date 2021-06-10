<template>
  <V-Dropdown class="end-action" icon="feather:more-vertical" spaced right>
    <template #content>
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-whiteboard-alt-2"></i>
        </div>
        <div class="meta">
          <span>View</span>
          <span>View project board</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-pencil"></i>
        </div>
        <div class="meta">
          <span>Edit</span>
          <span>Edit project</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
        </div>
        <div class="meta">
          <span>Tasks</span>
          <span>View pending tasks</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-hierchy-alt"></i>
        </div>
        <div class="meta">
          <span>Team</span>
          <span>View project team</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
