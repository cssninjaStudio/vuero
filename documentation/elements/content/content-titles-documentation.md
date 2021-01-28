### Titles

To create a title, you can add the `title` class to any html element.
Title sizes can be controlled with numbered modifiers using the patter
`is-*` where `*` represents a number between 3 and 6.
Titles can also be thinner using the `is-thin`, bold using the `is-bold`
or bolder using the `is-bolder` modifier classes.

<!--code-->

```vue
<template>
  <div class="columns is-multiline">
    <div class="column is-3">
      <h1 class="title is-3 is-narrow">This is a title</h1>
      <p>This is a huge title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 is-narrow">This is a title</h2>
      <p>This is a big title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 is-narrow">This is a title</h2>
      <p>This is a medium title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 is-narrow">This is a title</h2>
      <p>This is a smaller title</p>
    </div>
    <div class="column is-3">
      <h1 class="title is-3 is-narrow is-bold">This is a title</h1>
      <p>This is a huge bold title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 is-narrow is-bold">This is a title</h2>
      <p>This is a big bold title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 is-narrow is-bold">This is a title</h2>
      <p>This is a medium bold title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 is-narrow is-bold">This is a title</h2>
      <p>This is a smaller bold title</p>
    </div>
    <div class="column is-3">
      <h1 class="title is-3 is-narrow is-bolder">This is a title</h1>
      <p>This is a huge bolder title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 is-narrow is-bolder">This is a title</h2>
      <p>This is a big bolder title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 is-narrow is-bolder">This is a title</h2>
      <p>This is a medium bolder title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 is-narrow is-bolder">This is a title</h2>
      <p>This is a smaller bolder title</p>
    </div>
    <div class="column is-3">
      <h1 class="title is-3 is-narrow is-thin">This is a title</h1>
      <p>This is a huge thin title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-4 is-narrow is-thin">This is a title</h2>
      <p>This is a big thin title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-5 is-narrow is-thin">This is a title</h2>
      <p>This is a medium thin title</p>
    </div>
    <div class="column is-3">
      <h2 class="title is-6 is-narrow is-thin">This is a title</h2>
      <p>This is a smaller thin title</p>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="columns is-multiline">
  <div class="column is-3">
    <h1 class="title is-3 is-narrow">This is a title</h1>
    <p>This is a huge title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 is-narrow">This is a title</h2>
    <p>This is a big title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 is-narrow">This is a title</h2>
    <p>This is a medium title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 is-narrow">This is a title</h2>
    <p>This is a smaller title</p>
  </div>
  <div class="column is-3">
    <h1 class="title is-3 is-narrow is-bold">This is a title</h1>
    <p>This is a huge bold title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 is-narrow is-bold">This is a title</h2>
    <p>This is a big bold title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 is-narrow is-bold">This is a title</h2>
    <p>This is a medium bold title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 is-narrow is-bold">This is a title</h2>
    <p>This is a smaller bold title</p>
  </div>
  <div class="column is-3">
    <h1 class="title is-3 is-narrow is-bolder">
      This is a title
    </h1>
    <p>This is a huge bolder title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 is-narrow is-bolder">
      This is a title
    </h2>
    <p>This is a big bolder title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 is-narrow is-bolder">
      This is a title
    </h2>
    <p>This is a medium bolder title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 is-narrow is-bolder">
      This is a title
    </h2>
    <p>This is a smaller bolder title</p>
  </div>
  <div class="column is-3">
    <h1 class="title is-3 is-narrow is-thin">This is a title</h1>
    <p>This is a huge thin title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-4 is-narrow is-thin">This is a title</h2>
    <p>This is a big thin title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-5 is-narrow is-thin">This is a title</h2>
    <p>This is a medium thin title</p>
  </div>
  <div class="column is-3">
    <h2 class="title is-6 is-narrow is-thin">This is a title</h2>
    <p>This is a smaller thin title</p>
  </div>
</div>

<!--/example-->
