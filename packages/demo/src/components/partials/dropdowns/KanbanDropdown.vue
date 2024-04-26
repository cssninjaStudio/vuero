<script setup lang="ts">
const emit = defineEmits(['rename', 'collapse'])
</script>

<template>
  <VDropdown
    icon="lucide:more-vertical"
    right
    :options="{ clickOutside: false }"
  >
    <template #content>
      <a
        class="dropdown-item kanban-rename kill-drop"
        role="button"
        tabindex="0"
        @keydown.enter.prevent="emit('rename')"
        @click="emit('rename')"
      >
        Rename
      </a>
      <a
        class="dropdown-item kanban-collapse kill-drop"
        role="button"
        tabindex="0"
        @keydown.enter.prevent="emit('collapse')"
        @click="emit('collapse')"
      >
        Collapse
      </a>
      <hr class="dropdown-divider">
      <div class="dropdown-item has-child">
        Settings
        <VIcon
          class="rtl-reflect"
          icon="lucide:chevron-right"
        />

        <div class="child-dropdown">
          <div class="inner">
            <ul>
              <li>
                <div class="column-setting">
                  <VField>
                    <VSwitchSegment />
                  </VField>
                  <div class="text">
                    <span>Lock</span>
                    <span>Locks the column</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="column-setting">
                  <VField>
                    <VSwitchSegment />
                  </VField>
                  <div class="text">
                    <span>Notifications</span>
                    <span>Enables or disables notifications</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="column-setting">
                  <VField>
                    <VSwitchSegment />
                  </VField>
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
    </template>
  </VDropdown>
</template>
