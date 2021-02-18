### Font Awesome

Vuero buttons work well with Font Awesome Icons.
Add an icon element inside the button to handle icons.
You can also create square and circle buttons with a single icon.
Please refer to markup for detailed examples.

<!--code-->

```vue
<template>
  <div class="buttons">
    <button class="button v-button is-primary is-elevated">
      <span class="icon">
        <i class="fab fa-twitter"></i>
      </span>
      <span>Tweet Now</span>
    </button>
    <button class="button v-button is-success is-rounded is-elevated">
      <span class="icon">
        <i class="fas fa-check"></i>
      </span>
      <span>Save Changes</span>
    </button>
    <button class="button">
      <span class="icon is-small">
        <i class="fab fa-twitter"></i>
      </span>
    </button>
    <button class="button is-primary is-circle is-elevated">
      <span class="icon is-small">
        <i class="fab fa-linkedin-in"></i>
      </span>
    </button>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <button class="button v-button is-primary is-elevated">
    <span class="icon">
      <i class="fab fa-twitter"></i>
    </span>
    <span class="text">Tweet Now</span>
  </button>
  <button
    class="button v-button is-success is-rounded is-elevated"
  >
    <span class="icon">
      <i class="fas fa-check"></i>
    </span>
    <span class="text">Save Changes</span>
  </button>
  <button class="button">
    <span class="icon is-small">
      <i class="fab fa-twitter"></i>
    </span>
  </button>
  <button class="button is-primary is-circle is-elevated">
    <span class="icon is-small">
      <i class="fab fa-linkedin-in"></i>
    </span>
  </button>
</div>

<!--/example-->
