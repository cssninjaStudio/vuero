<template>
  <V-Dropdown
    icon="feather:more-vertical"
    class="is-pushed-mobile"
    spaced
    right
  >
    <a role="menuitem" href="#" class="dropdown-item is-media">
      <div class="icon">
        <i aria-hidden="true" class="lnil lnil-pencil"></i>
      </div>
      <div class="meta">
        <span class="dark-inverted">Edit</span>
        <span>Edit this record</span>
      </div>
    </a>
    <a role="menuitem" href="#" class="dropdown-item is-media">
      <div class="icon">
        <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
      </div>
      <div class="meta">
        <span class="dark-inverted">Delete</span>
        <span>Delete this record</span>
      </div>
    </a>
  </V-Dropdown>
</template>
