### Subtitles

To create a subtitle, you can add the `subtitle` class to any html element.
Subtitle sizes can be controlled with numbered modifiers using
the patter `is-*` where `*` represents a number between 4 and 6.

<!--code-->

```vue
<template>
  <div class="columns">
    <div class="column is-3">
      <h1 class="title is-3">This is a title</h1>
      <p class="subtitle is-4">This is a huge subtitle</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4">This is a title</h2>
      <p class="subtitle is-4">This is a big subtitle</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5">This is a title</h2>
      <p class="subtitle is-5">This is a medium subtitle</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6">This is a title</h2>
      <p class="subtitle is-6">This is a smaller subtitle</p>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-3">
    <h1 class="title is-3">This is a title</h1>
    <p class="subtitle is-4">This is a huge subtitle</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4">This is a title</h2>
    <p class="subtitle is-4">This is a big subtitle</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5">This is a title</h2>
    <p class="subtitle is-5">This is a medium subtitle</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6">This is a title</h2>
    <p class="subtitle is-6">This is a smaller subtitle</p>
  </div>
</div>

<!--/example-->
