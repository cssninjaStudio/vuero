### Context Menu

Vuero's `<V-Dropdown />` component can also be displayed
as a context menu holding a single icon.
The icon can be whatever you want.
This dropdown has the specific `dots` prop set.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Dropdown dots>
    <template #button="{ open }">
      <button class="is-trigger" @click="open">
        <i class="iconify" data-icon="feather:more-vertical"></i>
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
    <V-Dropdown title="Primary button" dots>
      <template #button="slotProps">
        <a class="is-trigger" @click="slotProps.open" >
          <i class="iconify" data-icon="feather:more-horizontal"></i>
        </a>
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
    <V-Dropdown title="Primary button" dots>
      <template #button="slotProps">
        <a class="is-trigger" @click="slotProps.open" >
          <i class="iconify" data-icon="feather:more-vertical"></i>
        </a>
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
    <V-Dropdown title="Primary button" dots up>
      <template #button="slotProps">
        <a class="is-trigger" @click="slotProps.open" >
          <i class="iconify" data-icon="feather:help-circle"></i>
        </a>
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
