<template>
  <V-Dropdown dots right spaced>
    <template #button="{ open }">
      <button class="is-trigger" @click="open">
        <i class="iconify" data-icon="feather:more-vertical"></i>
      </button>
    </template>

    <template #content>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-cloud-download"></i>
        </div>
        <div class="meta">
          <span>Download</span>
          <span>Download this file</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-cloud-upload"></i>
        </div>
        <div class="meta">
          <span>Upload</span>
          <span>Upload a new version</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-lock"></i>
        </div>
        <div class="meta">
          <span>Permissions</span>
          <span>Manage file permissions</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-share"></i>
        </div>
        <div class="meta">
          <span>Share</span>
          <span>Share this file</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>Delete</span>
          <span>Delete this file</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
