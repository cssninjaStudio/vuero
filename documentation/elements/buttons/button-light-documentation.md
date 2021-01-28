### Light Colors

Solid buttons are available in lighter versions.
Simply use the same markup that we have
for solid buttons and add the `is-light` modifier class.

<!--code-->

```vue
<template>
  <div class="buttons">
    <a class="button v-button is-primary is-light">Primary</a>
    <a class="button v-button is-info is-light">Info</a>
    <a class="button v-button is-success is-light">Success</a>
    <a class="button v-button is-warning is-light">Warning</a>
    <a class="button v-button is-danger is-light">Danger</a>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <a class="button v-button is-primary is-light" @click="clickMe">Primary</a>
  <a class="button v-button is-info is-light" @click="clickMe">Info</a>
  <a class="button v-button is-success is-light" @click="clickMe">Success</a>
  <a class="button v-button is-warning is-light" @click="clickMe">Warning</a>
  <a class="button v-button is-danger is-light" @click="clickMe">Danger</a>
</div>

<!--/example-->
