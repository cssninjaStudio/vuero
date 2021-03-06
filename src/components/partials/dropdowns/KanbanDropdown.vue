<script setup lang="ts">
import { defineEmit } from 'vue'
import useDropdown from '/@src/composable/useDropdown'
const { dropdownElement, isOpen, toggle } = useDropdown()

const emit = defineEmit(['rename', 'collapse'])
</script>

<template>
  <div
    ref="dropdownElement"
    :class="[isOpen && 'is-active']"
    class="dropdown is-right dropdown-trigger"
  >
    <div class="is-trigger" aria-haspopup="true" @click="toggle">
      <i class="iconify" data-icon="feather:more-vertical"></i>
    </div>

    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a
          class="dropdown-item kanban-rename kill-drop"
          @click="emit('rename')"
        >
          Rename
        </a>
        <a
          class="dropdown-item kanban-collapse kill-drop"
          @click="emit('collapse')"
        >
          Collapse
        </a>
        <hr class="dropdown-divider" />
        <div class="dropdown-item has-child">
          Settings
          <i class="iconify" data-icon="feather:chevron-right"></i>
          <div class="child-dropdown">
            <div class="inner">
              <ul>
                <li>
                  <div class="column-setting">
                    <label class="form-switch">
                      <input type="checkbox" class="is-switch" />
                      <i></i>
                    </label>
                    <div class="text">
                      <span>Lock</span>
                      <span>Locks the column</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="column-setting">
                    <label class="form-switch">
                      <input type="checkbox" class="is-switch" checked />
                      <i></i>
                    </label>
                    <div class="text">
                      <span>Notifications</span>
                      <span>Enables or disables notifications</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="column-setting">
                    <label class="form-switch">
                      <input type="checkbox" class="is-switch" />
                      <i></i>
                    </label>
                    <div class="text">
                      <span>Sorting</span>
                      <span>Enables or disables sorting</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
