<script setup lang="ts">
import type { VAvatarColor } from '/@src/components/base/VAvatar.vue'

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
    subtitle: 'Fit\'n\'Dance',
  },
  {
    initials: 'LT',
    color: 'info',
    name: 'Learning Tracker Dashboard',
    subtitle: 'Fit\'n\'Dance',
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
  <VDropdown
    class="project-dropdown"
    spaced
  >
    <template #button="{ toggle }">
      <VAvatar
        size="small"
        :color="selectedProject.color"
        :initials="selectedProject.initials"
        tabindex="0"
        @keydown.enter.prevent="toggle"
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
        @keydown.enter.prevent="
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
        <VAvatar
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
  </VDropdown>
</template>
<style lang="scss">
.project-dropdown {
  margin-inline-end: 12px;
  cursor: pointer !important;

  > img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  .dropdown-menu {
    margin-top: 8px;

    .dropdown-content {
      padding-top: 0;
      padding-bottom: 0;
      overflow: hidden;

      .dropdown-block {
        display: flex;
        align-items: center;
        padding: 16px;

        &:hover,
        &:focus {
          background: color-mix(in oklab, var(--fade-grey), white 4%);
        }

        .meta {
          margin-inline-start: 12px;
          font-family: var(--font);

          span {
            display: block;

            &:first-child {
              font-size: 0.95rem;
              font-weight: 500;
              color: var(--dark-text);
              line-height: 1.2;
              max-width: 140px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            &:nth-child(2) {
              // text-transform: uppercase;
              color: var(--light-text);
              font-size: 0.85rem;
            }
          }
        }
      }
    }
  }
}
</style>
