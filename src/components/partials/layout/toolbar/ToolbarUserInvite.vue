<template>
  <VDropdown
    spaced
    right
  >
    <template #button="{ open }">
      <VIconButton
        icon="lucide:plus"
        circle
        @click="open"
      />
    </template>
    <template #content>
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-analytics-alt-1"
          />
        </div>
        <div class="meta">
          <span>New Dashboard</span>
          <span>Add a new dashboard</span>
        </div>
      </a>
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-users-alt"
          />
        </div>
        <div class="meta">
          <span>Invite</span>
          <span>Invite new members</span>
        </div>
      </a>
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-briefcase"
          />
        </div>
        <div class="meta">
          <span>New Project</span>
          <span>Add a new project</span>
        </div>
      </a>
      <hr class="dropdown-divider">
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-cog"
          />
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>Manage team settings</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
