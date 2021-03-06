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
            <i class="lnil lnil-whiteboard-alt-2"></i>
          </div>
          <div class="meta">
            <span>View</span>
            <span>View project board</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-pencil"></i>
          </div>
          <div class="meta">
            <span>Edit</span>
            <span>Edit project</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-checkmark-circle"></i>
          </div>
          <div class="meta">
            <span>Tasks</span>
            <span>View pending tasks</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-hierchy-alt"></i>
          </div>
          <div class="meta">
            <span>Team</span>
            <span>View project team</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
