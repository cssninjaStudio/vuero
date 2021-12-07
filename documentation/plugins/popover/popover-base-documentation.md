### Text popover

Vuero ships with the `<Tippy />` component from the `VTippy` library. It lets
you create any type of popover with custom content. You can set the trigger
to be a click event using the `trigger="click"` prop.

<!--code-->

```vue
<template>
  <div class="buttons">
    <Tippy>
      <VButton>Hover me!</VButton>
      <template #content> Tooltip content </template>
    </Tippy>

    <Tippy trigger="click">
      <VButton>Click me!</VButton>
      <template #content> Tooltip content </template>
    </Tippy>
  </div>
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
              <h4 class="dark-inverted">Click Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam 
              tum adesse, cum dolor omnis absit</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy trigger="click">
    <VButton class="mx-1">Click me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <h4 class="dark-inverted">Click Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Eam tum adesse, cum dolor omnis absit</p>
          </div>
      </div>
    </template>
  </Tippy>
</div>

<!--/example-->
