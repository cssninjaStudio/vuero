### Fake avatar

When the provided picture URL is null, the avatar component falls back to a fake avatar. Same size mofifiers are available. Use the `initials` prop to pass initials to the component. See the code examples for more details about usage.

<!--code-->

```vue {2-4}
<template>
  <Avatar initials="CT" size="small" squared />
  <Avatar initials="CT" squared />
  <Avatar initials="CT" size="medium" squared />
  <Avatar initials="CT" size="large" squared />
  <Avatar initials="CT" size="big" squared />
  <Avatar initials="CT" size="xl" squared />
</template>
```

<!--/code-->

<!--example-->

<Avatar initials="CT" size="small" squared />
<Avatar initials="CT" squared />
<Avatar initials="CT" size="medium" squared />
<Avatar initials="CT" size="large" squared />
<Avatar initials="CT" size="big" squared />
<Avatar initials="CT" size="xl" squared />

<!--/example-->
