### V-Dropdown

You can use a `<V-Dropdown />` component to display a menu that
will hold your options. pass the `right` prop to the component to align
it to the right instead of left, which is the default.
Use the `up` prop to make it a dropup.

<!--code-->

```vue
<template>
  <V-Dropdown title="Dropdown button" right up>
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
    <V-Dropdown title="Dropdown button">
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
    <V-Dropdown title="Dropdown right" right>
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
    <V-Dropdown title="Dropdown up" up>
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
