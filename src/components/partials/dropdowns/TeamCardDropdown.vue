<script setup lang="ts">
import useDropdown from '/@src/composable/useDropdown'
const { dropdownElement, isOpen, toggle } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-spaced is-dots is-right dropdown-trigger end-action"
  >
    <div class="is-trigger" aria-haspopup="true" @click="toggle">
      <i class="iconify" data-icon="feather:more-vertical"></i>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-eye"></i>
          </div>
          <div class="meta">
            <span>View</span>
            <span>View member profile</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="meta">
            <span>Edit Role</span>
            <span>Edit member role</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-bubble"></i>
          </div>
          <div class="meta">
            <span>Message</span>
            <span>Send a message</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-trash-can-alt-1"></i>
          </div>
          <div class="meta">
            <span>Remove</span>
            <span>Remove from team</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
