### Elevated Button

Vuero buttons can handle elevation. For a hover triggered elevation,
add the `is-raised` modifier class.
For a permanent elevation, add the `is-elevated` modifier class.

<!--code-->

```vue
<template>
  <div class="buttons">
    <a class="button v-button is-primary is-raised">Primary</a>
    <a class="button v-button is-info is-raised">Info</a>
    <a class="button v-button is-success is-raised">Success</a>
    <a class="button v-button is-warning is-elevated">Warning</a>
    <a class="button v-button is-danger is-elevated">Danger</a>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <a class="button v-button is-primary is-raised">Primary</a>
  <a class="button v-button is-info is-raised">Info</a>
  <a class="button v-button is-success is-raised">Success</a>
  <a class="button v-button is-warning is-elevated">Warning</a>
  <a class="button v-button is-danger is-elevated">Danger</a>
</div>

<!--/example-->
