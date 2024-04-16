<template>
  <VDropdown
    class="end-action"
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
            class="lnil lnil-eye"
          />
        </div>
        <div class="meta">
          <span>View</span>
          <span>View member profile</span>
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
            class="lnil lnil-pencil"
          />
        </div>
        <div class="meta">
          <span>Edit Role</span>
          <span>Edit member role</span>
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
            class="lnil lnil-trash-can-alt-1"
          />
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove from team</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
