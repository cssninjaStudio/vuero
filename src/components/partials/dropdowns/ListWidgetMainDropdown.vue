<template>
  <VDropdown
    icon="lucide:more-vertical"
    dots
    right
    spaced
  >
    <template #content>
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-reload"
          />
        </div>
        <div class="meta">
          <span>Reload</span>
          <span>Reload Widget</span>
        </div>
      </a>
      <a
        href="#"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-cogs"
          />
        </div>
        <div class="meta">
          <span>Configure</span>
          <span>Configure widget</span>
        </div>
      </a>
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
          <span>Widget Settings</span>
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
            class="lnil lnil-trash-can-alt"
          />
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove from view</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
