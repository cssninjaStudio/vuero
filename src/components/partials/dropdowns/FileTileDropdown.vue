<template>
  <V-Dropdown icon="feather:more-vertical" spaced right>
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
          <i aria-hidden="true" class="lnil lnil-cloud-upload"></i>
        </div>
        <div class="meta">
          <span>Upload</span>
          <span>Upload a new version</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-lock"></i>
        </div>
        <div class="meta">
          <span>Permissions</span>
          <span>Manage file permissions</span>
        </div>
      </a>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-share"></i>
        </div>
        <div class="meta">
          <span>Share</span>
          <span>Share this file</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>Delete</span>
          <span>Delete this file</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
