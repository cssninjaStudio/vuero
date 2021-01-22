### Fake avatar

When the provided picture URL is null, the avatar component falls back to a fake avatar. Same size mofifiers are available. Use the `initials` prop to pass initials to the component. See the code examples for more details about usage.

<!--code-->

```vue {2-4}
<template>
  <Avatar initials="CT" size="small" />
  <Avatar initials="CT" />
  <Avatar initials="CT" size="medium" />
  <Avatar initials="CT" size="large" />
  <Avatar initials="CT" size="big" />
  <Avatar initials="CT" size="xl" />
</template>
```

<!--/code-->

<!--example-->

<Avatar initials="CT" size="small" />
<Avatar initials="CT" />
<Avatar initials="CT" size="medium" />
<Avatar initials="CT" size="large" />
<Avatar initials="CT" size="big" />
<Avatar initials="CT" size="xl" />

<!--/example-->
