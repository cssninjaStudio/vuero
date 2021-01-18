### Modern Dropdown

If you add in some specific markup, `BaseDropdown` buttons can be enhanced into modern dropdowns with an animated caret icon.  
Use the `modern` attribute on the component along with the specific markup that is provided in the code example. All button modifiers still apply.

<!--code-->

```vue {2}
<template>
  <BaseDropdown title="Modern dropdown" modern>
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
    <BaseDropdown title="Modern dropdown" modern>
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
    <BaseDropdown title="Modern rounded dropdown" class="is-rounded" modern>
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
    <BaseDropdown title="Modern dropdown (up, right)" modern up right>
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