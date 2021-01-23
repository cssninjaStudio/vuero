### Button Group

You can easily align buttons and group them together by wrapping them inside a `buttons` element. You can mix any button styles.

<!--code-->

```vue {2,26}
<template>
  <div class="buttons">
    <!-- button 1 -->
    <button class="button h-button">
      <span class="icon">
        <i class="iconify" data-icon="feather:eye"></i>
      </span>
      <span>View</span>
    </button>

    <!-- button 2 -->
    <button class="button h-button">
      <span class="icon">
        <i class="iconify" data-icon="feather:edit-2"></i>
      </span>
      <span>Edit</span>
    </button>

    <!-- button 3 -->
    <button class="button h-button is-success is-elevated">
      <span class="icon">
        <i class="fas fa-check"></i>
      </span>
      <span>Approve</span>
    </button>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <button class="button h-button" @click="clickMyText">
    <span class="icon">
      <i class="iconify" data-icon="feather:eye"></i>
    </span>
    <span class="text">View</span>
  </button>
  <button class="button h-button" @click="clickMyText">
    <span class="icon">
      <i class="iconify" data-icon="feather:edit-2"></i>
    </span>
    <span class="text">Edit</span>
  </button>
  <button class="button h-button is-success is-elevated" @click="clickMyText">
    <span class="icon">
      <i class="fas fa-check"></i>
    </span>
    <span class="text">Approve</span>
  </button>
</div>

<!--/example-->
