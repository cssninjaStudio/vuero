<script setup lang="ts">
import useDropdown from '/@src/composition/use/useDropdown'
const { dropdownElement, isOpen, open } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-spaced is-dots is-right dropdown-trigger is-pushed-mobile"
  >
    <div class="is-trigger" aria-haspopup="true" @click="open">
      <Icon icon="feather:more-vertical" />
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-reload"></i>
          </div>
          <div class="meta">
            <span>Reload</span>
            <span>Reload Widget</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-cogs"></i>
          </div>
          <div class="meta">
            <span>Configure</span>
            <span>Configure widget</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-cog"></i>
          </div>
          <div class="meta">
            <span>Settings</span>
            <span>Widget Settings</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-trash-can-alt"></i>
          </div>
          <div class="meta">
            <span>Remove</span>
            <span>Remove from view</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
