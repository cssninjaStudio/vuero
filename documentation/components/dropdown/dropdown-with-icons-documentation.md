### Menu with Icons

`<BaseDropdown />` menu items can have icons and a more structured layout. Use the `spaced` prop with the provided markup in the code example.

<!--code-->

```vue {2,4-12}
<template>
  <BaseDropdown title="Dropdown with icon" spaced>
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
  </BaseDropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <BaseDropdown title="Dropdown with icon" spaced>
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
    </BaseDropdown>
  </div>

  <div class="control">
    <BaseDropdown title="With unicons" spaced>
      <template #content>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <Icon icon="uil:pagelines">
          </div>
          <div class="meta">
            <span>Invest</span>
            <span>Buy more stocks</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media is-active">
          <div class="icon">
            <Icon icon="uil:meeting-board">
          </div>
          <div class="meta">
            <span>Compare</span>
            <span>Compare with others</span>
          </div>
        </a>
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <Icon icon="uil:social-distancing">
          </div>
          <div class="meta">
            <span>Trade</span>
            <span>View opportunities</span>
          </div>
        </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item is-media">
          <div class="icon">
            <Icon icon="uil:palette">
          </div>
          <div class="meta">
            <span>Wallet</span>
            <span>Open stock wallet</span>
          </div>
        </a>
      </template>
    </BaseDropdown>
  </div>
</div>

<!--/example-->
