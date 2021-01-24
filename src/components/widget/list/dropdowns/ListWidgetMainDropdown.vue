<template>
  <V-Dropdown dots right spaced>
    <template #button="{ open }">
      <button class="is-trigger" @click="open">
        <i class="iconify" data-icon="feather:more-vertical"></i>
      </button>
    </template>

    <template #content>
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
    </template>
  </V-Dropdown>
</template>
