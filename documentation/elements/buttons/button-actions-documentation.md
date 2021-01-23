### H-Action Alternative

Vuero also provides a simple button called `h-action`. it doesn't come up with a lot of modifiers like the `H-Button` but is a solid alternative when you want to use simple buttons.

<!--code-->

```vue
<template>
  <div class="buttons">
    <a class="button h-action">Button</a>
    <button class="button h-action is-rounded">Button</button>
    <a class="button h-action is-hoverable">Button</a>
    <button class="button h-action is-grey">Button</button>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <div class="buttons">
    <a class="button h-action" @click="clickMe">Button</a>
    <button class="button h-action is-rounded" @click="clickMe">Button</button>
    <a class="button h-action is-hoverable" @click="clickMe">Button</a>
    <button class="button h-action is-grey" @click="clickMe">Button</button>
  </div>
</div>

<!--/example-->
