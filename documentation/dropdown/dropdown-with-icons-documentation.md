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
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
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
  </div>

  <div class="control">
    <VDropdown title="With unicons" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="iconify" data-icon="uil:pagelines"></i>
          </div>
          <div class="meta">
            <span>Invest</span>
            <span>Buy more stocks</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <div class="icon">
            <i class="iconify" data-icon="uil:meeting-board"></i>
          </div>
          <div class="meta">
            <span>Compare</span>
            <span>Compare with others</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="iconify" data-icon="uil:social-distancing"></i>
          </div>
          <div class="meta">
            <span>Trade</span>
            <span>View opportunities</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <i class="iconify" data-icon="uil:palette"></i>
          </div>
          <div class="meta">
            <span>Wallet</span>
            <span>Open stock wallet</span>
          </div>
        </a>
      </template>
    </VDropdown>
  </div>
</div>

<!--/example-->
