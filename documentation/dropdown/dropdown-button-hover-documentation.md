### Hover buttons

Vuero's `<V-Dropdown />` component can also be opened
on hover or after any custom event.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Dropdown>
    <template #button="{ open, close, toggle, isOpen }">
      <button
        class="is-trigger button"
        @mouseenter="open"
        @mouseleave="close"
        @touch="toggle"
      >
        <span>Hover me!</span>
        <span class="base-caret">
          <V-Icon v-if="!isOpen" icon="fa:angle-down" />
          <V-Icon v-else icon="fa:angle-up" />
        </span>
      </button>
    </template>

    <template #content>
      <a href="#" class="dropdown-item"> Dropdown item </a>
      <a href="#" class="dropdown-item"> Other dropdown item </a>
      <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
      <a href="#" class="dropdown-item"> Other dropdown item </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item"> With a divider </a>
    </template>
  </V-Dropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <V-Dropdown>
      <template #button="{ open, close, toggle, isOpen }">
        <button
          class="is-trigger button"
          @mouseenter="open"
          @touch="toggle"
        >
          <span>Hover me!</span>
          <span class="base-caret">
            <V-Icon v-if="!isOpen" icon="fa:angle-down" />
            <V-Icon v-else icon="fa:angle-up" />
          </span>
        </button>
      </template>
      <template #content>
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </template>
    </V-Dropdown>
  </div>

  <div class="control">
    <V-Dropdown title="Primary button" up>
      <template #button="{ open, close, toggle, isOpen }">
        <button
          class="is-trigger button"
          @mouseenter="open"
          @touch="toggle"
        >
          <span class="icon is-small">
            <i class="iconify" data-icon="feather:help-circle"></i>
          </span>
          <span>Hover me!</span>
        </button>
      </template>
      <template #content>
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </template>
    </V-Dropdown>
  </div>
</div>

<!--/example-->
