### Context Menu

Vuero `BaseDropdown` can also be displayed as a context menu holding a single icon. The icon can be whatever you want. This dropdown will have the specific `dots` attribute.  
_Please refer to the markup for more details about usage._

<!--code-->

```vue {3-7}
<template>
  <BaseDropdown dots>
    <template #button="{ open }">
      <button class="is-trigger" @click="open" >
        <Icon icon="feather:more-vertical" />
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
    <BaseDropdown title="Primary button" dots>
      <template #button="slotProps">
        <a class="is-trigger" @click="slotProps.open" >
          <Icon icon="feather:more-horizontal" />
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
    </BaseDropdown>
  </div>

  <div class="control">
    <BaseDropdown title="Primary button" dots>
      <template #button="slotProps">
        <a class="is-trigger" @click="slotProps.open" >
          <Icon icon="feather:more-vertical" />
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
    </BaseDropdown>
  </div>

  <div class="control">
    <BaseDropdown title="Primary button" dots up>
      <template #button="slotProps">
        <a class="is-trigger" @click="slotProps.open" >
          <Icon icon="feather:help-circle" />
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
    </BaseDropdown>
  </div>
</div>


<!--/example-->