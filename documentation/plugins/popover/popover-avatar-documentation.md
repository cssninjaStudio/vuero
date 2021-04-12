### Avatar popover

Popovers can hold any type of content, including existing Vuero components. You
can easily add a `<V-Avatar />` inside your popover.

<!--code-->

```vue
<template>
  <tippy>
    <V-Button>Hover me!</V-Button>
    <template #content>
      <div class="v-popover-content is-text">
        <div class="popover-head">
          <V-Avatar picture="/demo/avatars/7.jpg" size="small" />
          <h4 class="dark-inverted">Alice C.</h4>
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
              <V-Avatar picture="/demo/avatars/7.jpg" size="small"/>
              <h4 class="dark-inverted">Alice C.</h4>
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
              <V-Avatar picture="/demo/avatars/8.jpg" size="small" squared />
              <h4 class="dark-inverted">Erik K.</h4>
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
              <V-Avatar size="small" color="info" initials="JL"/>
              <h4 class="dark-inverted">John L.</h4>
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
              <V-Avatar size="small" color="h-purple" initials="SC" squared/>
              <h4 class="dark-inverted">Sara C.</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </tippy>
</div>

<!--/example-->
