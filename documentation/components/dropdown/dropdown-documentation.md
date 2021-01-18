### Dropdown

You can use a `BaseDropdown` to display a menu that will hold your options. You can change the menu orientation.  
Use the `right` attribute on the component to align it to the right instead of left, which is the default. Use the `up` atribute to make it a dropup.  
_Refer to the markup for more details._

<!--code-->

```vue 
<template>
  <BaseDropdown title="Dropdown button" right up>
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
    <BaseDropdown title="Dropdown button">
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
    <BaseDropdown title="Dropdown right" right>
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
    <BaseDropdown title="Dropdown up" up>
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