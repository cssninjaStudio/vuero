### Hover buttons

Vuero's `<V-Dropdown />` component can also be opened
on hover or after any custom event.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Dropdown>
    <template #button="{ open, toggle }">
      <V-Button
        icon="feather:help-circle"
        class="is-trigger"
        @mouseenter="open"
        @click="toggle"
      >
        Hover me!
      </V-Button>
    </template>

    <template #content="{ close }">
      <div @mouseleave="close">
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </div>
    </template>
  </V-Dropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <V-Dropdown>
      <template #button="{ open, toggle }">
        <V-Button
          icon="feather:alert-triangle"
          class="is-trigger"
          color="warning"
          @mouseenter="open"
          @click="toggle"
        >
          Hover me!
        </V-Button>
      </template>
      <template #content="{ close }">
        <div @mouseleave="close">
          <a href="#" class="dropdown-item"> Dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> With a divider </a>
        </div>
      </template>
    </V-Dropdown>
  </div>

  <div class="control">
    <V-Dropdown title="Primary button" up>
      <template #button="{ open, toggle }">
        <V-Button
          icon="feather:help-circle"
          class="is-trigger"
          @mouseenter="open"
          @click="toggle"
        >
          Hover me!
        </V-Button>
      </template>
      <template #content="{ close }">
        <div @mouseleave="close">
          <a href="#" class="dropdown-item"> Dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> With a divider </a>
        </div>
      </template>
    </V-Dropdown>
  </div>
</div>

<!--/example-->
