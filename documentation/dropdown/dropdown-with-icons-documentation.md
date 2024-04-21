### Menu with Icons

`<VDropdown />` menu items can have icons and a more structured layout.
Use the `spaced` prop with the provided markup in the code example.

<!--code-->

```vue
<template>
  <VDropdown title="Dropdown with icon" spaced>
    <template #content>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-coins" />
        </div>
        <div class="meta">
          <span>Invest</span>
          <span>Buy more stocks</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media is-active">
        <div class="icon">
          <i class="lnil lnil-dollar-up" />
        </div>
        <div class="meta">
          <span>Compare</span>
          <span>Compare with others</span>
        </div>
      </a>
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-bank" />
        </div>
        <div class="meta">
          <span>Trade</span>
          <span>View opportunities</span>
        </div>
      </a>
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item is-media">
        <div class="icon">
          <i class="lnil lnil-wallet-alt-1" />
        </div>
        <div class="meta">
          <span>Wallet</span>
          <span>Open stock wallet</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal style="gap: 0.5rem;">
  <VControl>
    <VDropdown title="Dropdown with icon" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-coins"></i>
          </div>
          <div class="meta">
            <span>Invest</span>
            <span>Buy more stocks</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <div class="icon">
            <i class="lnil lnil-dollar-up"></i>
          </div>
          <div class="meta">
            <span>Compare</span>
            <span>Compare with others</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-bank"></i>
          </div>
          <div class="meta">
            <span>Trade</span>
            <span>View opportunities</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="lnil lnil-wallet-alt-1"></i>
          </div>
          <div class="meta">
            <span>Wallet</span>
            <span>Open stock wallet</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </VControl>

  <VControl>
    <VDropdown title="With unicons" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <VIcon icon="uil:pagelines"/>
          </div>
          <div class="meta">
            <span>Invest</span>
            <span>Buy more stocks</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <div class="icon">
            <VIcon icon="uil:meeting-board"/>
          </div>
          <div class="meta">
            <span>Compare</span>
            <span>Compare with others</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <VIcon icon="uil:social-distancing"/>
          </div>
          <div class="meta">
            <span>Trade</span>
            <span>View opportunities</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <VIcon icon="uil:palette"/>
          </div>
          <div class="meta">
            <span>Wallet</span>
            <span>Open stock wallet</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </VControl>
</VField>

<!--/example-->
