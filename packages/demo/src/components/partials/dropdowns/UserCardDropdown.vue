<template>
  <VDropdown
    icon="lucide:more-vertical"
    spaced
    right
  >
    <template #content>
      <a
        href="#"
        role="menuitem"
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
          <span>Edit permissions</span>
        </div>
      </a>

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-bubble"
          />
        </div>
        <div class="meta">
          <span>Message</span>
          <span>Send a message</span>
        </div>
      </a>

      <a
        href="#"
        role="menuitem"
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
          <span>Share this profile</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-trash-can-alt"
          />
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove from grid</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
