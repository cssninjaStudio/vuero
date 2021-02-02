### Popover positions

`<Tippy />` popovers can have different positions. Use the `placement` props to
set your popover placement. Available options are `top`, `top-end`, `bottom`,
`bottom-end`, `left`, `left-end`, `right` and `right-end`.

<!--code-->

```vue
<template>
  <tippy placement="top">
    <V-Button>Top</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
        <div class="popover-head">
          <h4 class="dark-inverted">Top</h4>
        </div>
        <div class="popover-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </template>
  </tippy>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <tippy placement="top">
    <V-Button class="mx-1">Top</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Top</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy placement="top-end">
    <V-Button class="mx-1">Top End</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Top End</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy placement="bottom">
    <V-Button class="mx-1">Bottom</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Bottom</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy placement="bottom-end">
    <V-Button class="mx-1">Bottom End</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Bottom End</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
</div>

<!--/example-->
