<template>
  <V-Dropdown icon="feather:more-vertical" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-coins"></i>
        </div>
        <div class="meta">
          <span>Invest</span>
          <span>Buy more stocks</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-dollar-up"></i>
        </div>
        <div class="meta">
          <span>Compare</span>
          <span>Compare with others</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-bank"></i>
        </div>
        <div class="meta">
          <span>Trade</span>
          <span>View opportunities</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-wallet-alt-1"></i>
        </div>
        <div class="meta">
          <span>Wallet</span>
          <span>Open stock wallet</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
