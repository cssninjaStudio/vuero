### Tippy basic popover

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Summum ením bonum exposuit vacuitatem doloris; Haeret in salebra.
Eademne, quae restincta siti? Quid, quod res alia tota est?

<!--code-->

```vue
<template>
  <div class="buttons">
    <tippy theme="light">
      <V-Button>Hover me!</V-Button>
      <template #content> Tooltip content </template>
    </tippy>

    <tippy theme="light" trigger="click">
      <V-Button>Click me!</V-Button>
      <template #content> Tooltip content </template>
    </tippy>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <tippy theme="light">
    <V-Button>Hover me!</V-Button>
    <template #content> Tooltip content </template>
  </tippy>
  <tippy theme="light" trigger="click">
    <V-Button>Click me!</V-Button>
    <template #content> Tooltip content </template>
  </tippy>
</div>

<!--/example-->
