<script setup lang="ts">
import { ref } from 'vue'

const projects = [
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
  <V-Dropdown class="project-dropdown" spaced>
    <template #button="{ toggle }">
      <V-Avatar
        size="small"
        :color="selectedProject.color"
        :initials="selectedProject.initials"
        @click="toggle"
      />
    </template>

    <template #content="{ close }">
      <a
        v-for="project in projects"
        :key="project.initials"
        class="dropdown-item dropdown-block"
        :class="[project.initials === selectedProject.initials && 'is-active']"
        @click="
          () => {
            selectedProject = project
            close()
          }
        "
      >
        <V-Avatar
          size="small"
          :color="project.color"
          :initials="project.initials"
        />

        <div class="meta">
          <span class="dark-inverted">{{ project.name }}</span>
          <span>{{ project.subtitle }}</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
