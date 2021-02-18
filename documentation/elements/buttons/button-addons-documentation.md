### Addons

Vuero buttons can be grouped together in an addon styled block of buttons.
This makes creating conmplex interfaces much more easier.
Refer to markup for a detailed example.

<!--code-->

```vue
<template>
  <div class="field has-addons">
    <!-- button 1 -->
    <p class="control">
      <button class="button v-button">
        <span class="icon is-small">
          <i class="fas fa-align-left"></i>
        </span>
        <span>Left</span>
      </button>
    </p>

    <!-- button 2 -->
    <p class="control">
      <button class="button v-button">
        <span class="icon is-small">
          <i class="fas fa-align-center"></i>
        </span>
        <span>Center</span>
      </button>
    </p>

    <!-- button 3 -->
    <p class="control">
      <button class="button v-button">
        <span class="icon is-small">
          <i class="fas fa-align-right"></i>
        </span>
        <span>Right</span>
      </button>
    </p>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <div class="field has-addons">
    <p class="control">
      <button class="button v-button">
        <span class="icon is-small">
          <i class="fas fa-align-left"></i>
        </span>
        <span class="text">Left</span>
      </button>
    </p>
    <p class="control">
      <button class="button v-button">
        <span class="icon is-small">
          <i class="fas fa-align-center"></i>
        </span>
        <span class="text">Center</span>
      </button>
    </p>
    <p class="control">
      <button class="button v-button">
        <span class="icon is-small">
          <i class="fas fa-align-right"></i>
        </span>
        <span class="text">Right</span>
      </button>
    </p>
  </div>
</div>

<!--/example-->
