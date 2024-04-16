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
            class="lnil lnil-whiteboard-alt-2"
          />
        </div>
        <div class="meta">
          <span>View</span>
          <span>View project board</span>
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
          <span>Edit</span>
          <span>Edit project</span>
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
            class="lnil lnil-checkmark-circle"
          />
        </div>
        <div class="meta">
          <span>Tasks</span>
          <span>View pending tasks</span>
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
            class="lnil lnil-hierchy-alt"
          />
        </div>
        <div class="meta">
          <span>Team</span>
          <span>View project team</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
