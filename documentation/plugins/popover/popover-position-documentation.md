### Popover positions

`<Tippy />` popovers can have different positions. Use the `placement` props to
set your popover placement. Available options are `top`, `top-end`, `bottom`,
`bottom-end`, `left`, `left-end`, `right` and `right-end`.

<!--code-->

```vue
<template>
  <tippy placement="top">
    <VButton>Top</VButton>
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
    <VButton class="mx-1">Top</VButton>
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
    <VButton class="mx-1">Top End</VButton>
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
    <VButton class="mx-1">Bottom</VButton>
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
    <VButton class="mx-1">Bottom End</VButton>
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
  <tippy placement="left">
    <VButton class="mx-1">Left</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Left</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy placement="left-end">
    <VButton class="mx-1">Left End</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Left End</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy placement="right">
    <VButton class="mx-1">Right</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Right</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy placement="right-end">
    <VButton class="mx-1">Right End</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Right End</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
</div>

<!--/example-->
