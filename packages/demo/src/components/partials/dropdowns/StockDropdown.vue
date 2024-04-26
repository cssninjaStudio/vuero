<template>
  <VDropdown
    class="end-action"
    icon="lucide:more-vertical"
    spaced
    right
  >
    <template #content>
      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-coins"
          />
        </div>
        <div class="meta">
          <span>Invest</span>
          <span>Buy more stocks</span>
        </div>
      </a>

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-bank"
          />
        </div>
        <div class="meta">
          <span>Trade</span>
          <span>View opportunities</span>
        </div>
      </a>

      <hr class="dropdown-divider">

      <a
        href="#"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i
            aria-hidden="true"
            class="lnil lnil-reload"
          />
        </div>
        <div class="meta">
          <span>Refresh</span>
          <span>Refresh data</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
