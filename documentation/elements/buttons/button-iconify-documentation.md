### Iconify

Vuero buttons work well with Iconify which includes **over 40,000 icons**
from popular fonts and emoji sets.
You can also create square and circle buttons with a single icon.
You can browse all the available [icons here](https://icones.netlify.app/).
Please refer to the markup for detailed examples.

<!--code-->

```vue
<template>
  <div class="buttons">
    <button class="button v-button is-primary is-elevated">
      <!-- Feather Icons -->
      <span class="icon">
        <i class="iconify" data-icon="feather:twitter"></i>
      </span>
      <span>Tweet Now</span>
    </button>

    <button class="button v-button is-danger is-rounded is-elevated">
      <!-- Remix Icons -->
      <span class="icon">
        <i class="iconify" data-icon="ri:ancient-gate-line"></i>
      </span>
      <span>Commit Code</span>
    </button>

    <button class="button">
      <!-- Material Design Icons -->
      <span class="icon">
        <i class="iconify" data-icon="mdi:alien-outline"></i>
      </span>
    </button>

    <button class="button is-primary is-circle is-elevated">
      <!-- Phosphor -->
      <span class="icon">
        <i class="iconify" data-icon="ph:airplane-fill"></i>
      </span>
    </button>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <button 
    class="button v-button is-primary is-elevated" 
  >
    <span class="icon">
      <i class="iconify" data-icon="feather:twitter"></i>
    </span>
    <span class="text">Tweet Now</span>
  </button>
  <button
    class="button v-button is-danger is-rounded is-elevated" 
  >
    <span class="icon">
      <i class="iconify" data-icon="ri:ancient-gate-line"></i>
    </span>
    <span class="text">Commit Code</span>
  </button>
  <button class="button">
    <span class="icon">
      <i class="iconify" data-icon="mdi:alien-outline"></i>
    </span>
  </button>
  <button class="button is-primary is-circle is-elevated">
    <span class="icon">
      <i class="iconify" data-icon="ph:airplane-fill"></i>
    </span>
  </button>
</div>

<!--/example-->
