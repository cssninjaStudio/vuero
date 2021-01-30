### Tippy complex popover

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Summum ením bonum exposuit vacuitatem doloris; Haeret in salebra.
Eademne, quae restincta siti? Quid, quod res alia tota est?

<!--code-->

```vue
<template>
  <tippy trigger="manual">
    <template #default="{ show }">
      <V-Avatar picture="/images/avatars/photos/19.jpg" @mouseenter="show" />
    </template>
    <template #content>
      <UserPopoverContent />
    </template>
  </tippy>
</template>
```

<!--/code-->

<!--example-->

<tippy trigger="manual">
  <template #default="{ show }">
    <V-Avatar picture="/images/avatars/photos/19.jpg" @mouseenter="show" />
  </template>
  <template #content>
    <UserPopoverContent />
  </template>
</tippy>

<!--/example-->
