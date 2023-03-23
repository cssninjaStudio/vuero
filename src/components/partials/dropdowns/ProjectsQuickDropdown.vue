<script setup lang="ts">
import type { VAvatarColor } from '/@src/components/base/avatar/VAvatar.vue'

const projects: {
  initials: string
  color: VAvatarColor
  name: string
  subtitle: string
}[] = [
  {
    initials: 'D',
    color: 'warning',
    name: 'Delivery App Project',
    subtitle: 'Food For Good',
  },
  {
    initials: 'H',
    color: 'h-green',
    name: 'Health and Fitness Dashboard',
    subtitle: "Fit'n'Dance",
  },
  {
    initials: 'LT',
    color: 'info',
    name: 'Learning Tracker Dashboard',
    subtitle: "Fit'n'Dance",
  },
  {
    initials: 'B',
    color: 'h-purple',
    name: 'Banking and Finance Dashboard',
    subtitle: 'VNeo Bank',
  },
]
const selectedProject = ref(projects[1])
</script>

<template>
  <VDropdown class="project-dropdown" spaced>
    <template #button="{ toggle }">
      <VAvatar
        size="small"
        :color="selectedProject.color"
        :initials="selectedProject.initials"
        tabindex="0"
        @keydown.space.prevent="toggle"
        @click="toggle"
      />
    </template>

    <template #content="{ close }">
      <a
        v-for="project in projects"
        :key="project.initials"
        class="dropdown-item dropdown-block"
        :class="[project.initials === selectedProject.initials && 'is-active']"
        role="button"
        tabindex="0"
        @keydown.space.prevent="
          () => {
            selectedProject = project
            close()
          }
        "
        @click="
          () => {
            selectedProject = project
            close()
          }
        "
      >
        <VAvatar size="small" :color="project.color" :initials="project.initials" />

        <div class="meta">
          <span class="dark-inverted">{{ project.name }}</span>
          <span>{{ project.subtitle }}</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
