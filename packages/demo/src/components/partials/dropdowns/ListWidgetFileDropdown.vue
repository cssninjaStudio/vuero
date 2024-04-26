<template>
  <VDropdown
    icon="lucide:more-vertical"
    dots
    right
    spaced
  >
    <template #content>
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-cloud-download"
          />
        </div>
        <div class="meta">
          <span>Download</span>
          <span>Download this file</span>
        </div>
      </a>
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-cloud-upload"
          />
        </div>
        <div class="meta">
          <span>Upload</span>
          <span>Upload a new version</span>
        </div>
      </a>
      <hr class="dropdown-divider">
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-lock"
          />
        </div>
        <div class="meta">
          <span>Permissions</span>
          <span>Manage file permissions</span>
        </div>
      </a>
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-share"
          />
        </div>
        <div class="meta">
          <span>Share</span>
          <span>Share this file</span>
        </div>
      </a>
      <hr class="dropdown-divider">
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-trash-can-alt"
          />
        </div>
        <div class="meta">
          <span>Delete</span>
          <span>Delete this file</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
