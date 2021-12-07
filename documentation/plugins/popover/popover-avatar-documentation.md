### Avatar popover

Popovers can hold any type of content, including existing Vuero components. You
can easily add a `<VAvatar />` inside your popover.

<!--code-->

```vue
<template>
  <Tippy>
    <VButton>Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
        <div class="popover-head">
          <VAvatar picture="/demo/avatars/7.jpg" size="small" />
          <h4 class="dark-inverted">Alice C.</h4>
        </div>
        <div class="popover-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </template>
  </Tippy>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <Tippy>
    <VButton class="mx-1">Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VAvatar picture="/demo/avatars/7.jpg" size="small"/>
              <h4 class="dark-inverted">Alice C.</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="small" squared />
              <h4 class="dark-inverted">Erik K.</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VAvatar size="small" color="info" initials="JL"/>
              <h4 class="dark-inverted">John L.</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VAvatar size="small" color="h-purple" initials="SC" squared/>
              <h4 class="dark-inverted">Sara C.</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </Tippy>
</div>

<!--/example-->
