<script setup lang="ts">
import useDropdown from '/@src/composition/use/useDropdown'
const { dropdownElement, isOpen, open } = useDropdown()
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-spaced is-dots is-right dropdown-trigger"
  >
    <div class="is-trigger" aria-haspopup="true" @click="open">
      <i class="iconify" data-icon="feather:more-vertical"></i>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-reload"></i>
          </div>
          <div class="meta">
            <span>Reload</span>
            <span>Refresh search results</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-save"></i>
          </div>
          <div class="meta">
            <span>Save</span>
            <span>Save this search</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-cog"></i>
          </div>
          <div class="meta">
            <span>Settings</span>
            <span>configuration options</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
