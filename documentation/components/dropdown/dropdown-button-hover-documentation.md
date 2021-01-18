### Hover buttons

Vuero `BaseDropdown` can also be opened on hover action or any custom event.  
_Please refer to the markup for more details about usage._

<!--code-->

```vue {3-7}
<template>
  <BaseDropdown>
    <template #button="{ open, close, toggle, isOpen }">
      <button
        class="is-trigger button"
        @mouseenter="open"
        @touch="toggle"
      >
        <span>Hover me!</span>
        <span class="icon is-small">
          <Icon v-if="!isOpen" icon="fa:angle-down" />
          <Icon v-else icon="fa:angle-up" />
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
  </BaseDropdown>
</template>
```

<!--/code-->

<!--example-->

<div class="field is-grouped">
  <div class="control">
    <BaseDropdown>
      <template #button="{ open, close, toggle, isOpen }">
        <button
          class="is-trigger button"
          @mouseenter="open"
          @touch="toggle"
        >
          <span>Hover me!</span>
          <span class="icon is-small">
            <Icon v-if="!isOpen" icon="fa:angle-down" />
            <Icon v-else icon="fa:angle-up" />
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
    </BaseDropdown>
  </div>

  <div class="control">
    <BaseDropdown title="Primary button" up>
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
    </BaseDropdown>
  </div>
</div>

<!--/example-->
