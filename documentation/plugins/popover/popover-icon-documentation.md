### Icon popover

Popovers can hold any type of content, including existing Vuero components. You
can easily add a `<V-IconBox />` inside your popover.

<!--code-->

```vue
<template>
  <tippy>
    <V-Button>Hover me!</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
        <div class="popover-head">
          <V-IconBox size="small" color="primary">
            <i class="lnil lnil-crown-alt-1"></i>
          </V-IconBox>
          <h4 class="dark-inverted">Hover Popover</h4>
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
  <tippy>
    <V-Button class="mx-1">Hover me!</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
                <V-IconBox size="small" color="primary">
                    <i class="lnil lnil-crown-alt-1"></i>
                </V-IconBox>
                <h4 class="dark-inverted">Hover Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy>
    <V-Button class="mx-1">Hover me!</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
                <V-IconBox size="small" color="info">
                    <i class="lnil lnil-crown-alt-1"></i>
                </V-IconBox>
                <h4 class="dark-inverted">Hover Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy>
    <V-Button class="mx-1">Hover me!</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
                <V-IconBox size="small" color="orange">
                    <i class="lnil lnil-crown-alt-1"></i>
                </V-IconBox>
                <h4 class="dark-inverted">Hover Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
  <tippy>
    <V-Button class="mx-1">Hover me!</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
                <V-IconBox size="small" color="green">
                    <i class="lnil lnil-crown-alt-1"></i>
                </V-IconBox>
                <h4 class="dark-inverted">Hover Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
</div>

<!--/example-->
