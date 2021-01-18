### Elevated Button

Vuero buttons can handle elevation. For a hover triggered elevation, add the `is-raised` modifier class.  
For a permanent elevation, add the `is-elevated` modifier class.

<!--code-->

```vue
<template>
  <div class="buttons">
    <a class="button h-button is-primary is-raised">Primary</a>
    <a class="button h-button is-info is-raised">Info</a>
    <a class="button h-button is-success is-raised">Success</a>
    <a class="button h-button is-warning is-elevated">Warning</a>
    <a class="button h-button is-danger is-elevated">Danger</a>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <a class="button h-button is-primary is-raised" @click="clickMe">Primary</a>
  <a class="button h-button is-info is-raised" @click="clickMe">Info</a>
  <a class="button h-button is-success is-raised" @click="clickMe">Success</a>
  <a class="button h-button is-warning is-elevated" @click="clickMe">Warning</a>
  <a class="button h-button is-danger is-elevated" @click="clickMe">Danger</a>
</div>

<!--/example-->
