### Hover buttons

Vuero's `<VDropdown />` component can also be opened
on hover or after any custom event.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <VDropdown>
    <template #button="{ open, toggle }">
      <VButton
        icon="feather:help-circle"
        class="is-trigger"
        @mouseenter="open"
        @focusin="open"
        @click="toggle"
      >
        Hover me!
      </VButton>
    </template>

    <template #content="{ close }">
      <div @mouseleave="close" @focusout="close">
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </div>
    </template>
  </VDropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <VDropdown>
      <template #button="{ open, toggle }">
        <VButton
          icon="feather:alert-triangle"
          class="is-trigger"
          color="warning"
          @mouseenter="open"
          @focusin="open"
          @click="toggle"
        >
          Hover me!
        </VButton>
      </template>
      <template #content="{ close }">
        <div @mouseleave="close" @focusout="close">
          <a href="#" class="dropdown-item"> Dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> With a divider </a>
        </div>
      </template>
    </VDropdown>
  </div>

  <div class="control">
    <VDropdown title="Primary button" up>
      <template #button="{ open, toggle }">
        <VButton
          icon="feather:help-circle"
          class="is-trigger"
          @mouseenter="open"
          @focusin="open"
          @click="toggle"
        >
          Hover me!
        </VButton>
      </template>
      <template #content="{ close }">
        <div @mouseleave="close" @focusout="close">
          <a href="#" class="dropdown-item"> Dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> With a divider </a>
        </div>
      </template>
    </VDropdown>
  </div>
</div>

<!--/example-->
