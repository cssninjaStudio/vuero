<template>
  <V-Dropdown icon="feather:more-vertical" class="end-action" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cloud-download"></i>
        </div>
        <div class="meta">
          <span>Download</span>
          <span>Download this file</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
        </div>
        <div class="meta">
          <span>View Task</span>
          <span>View related task</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cloud-upload"></i>
        </div>
        <div class="meta">
          <span>Update</span>
          <span>Upload a new version</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt-1"></i>
        </div>
        <div class="meta">
          <span>Delete</span>
          <span>Delete this file</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
