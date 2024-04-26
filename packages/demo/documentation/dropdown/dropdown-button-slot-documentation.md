### Context Menu

Vuero's `<VDropdown />` component can also be displayed
as a context menu holding a single icon.
The icon can be whatever you want with the specific `icon` prop set.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <VDropdown icon="lucide:more-vertical">
    <template #content>
      <a href="#" class="dropdown-item"> Dropdown item </a>
      <a href="#" class="dropdown-item"> Other dropdown item </a>
      <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
      <a href="#" class="dropdown-item"> Other dropdown item </a>
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item"> With a divider </a>
    </template>
  </VDropdown>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal style="gap: 0.5rem;">
  <VControl>
    <VDropdown icon="lucide:more-horizontal">
      <template #content>
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </template>
    </VDropdown>
  </VControl>

  <VControl>
    <VDropdown icon="lucide:more-vertical">
      <template #content>
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </template>
    </VDropdown>
  </VControl>

  <VControl>
    <VDropdown icon="lucide:help-circle" up>
      <template #content>
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </template>
    </VDropdown>
  </VControl>
</VField>

<!--/example-->
