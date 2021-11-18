### Fake avatar

When the provided picture URL is null, the avatar component
falls back to a fake avatar. Same size mofifiers are available.
Use the `initials` prop to pass initials to the component.
See the code examples for more details about usage.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar initials="CT" size="small" />
    <VAvatar initials="CT" />
    <VAvatar initials="CT" size="medium" />
    <VAvatar initials="CT" size="large" />
    <VAvatar initials="CT" size="big" />
    <VAvatar initials="CT" size="xl" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar initials="CT" size="small" />
  <VAvatar initials="CT" />
  <VAvatar initials="CT" size="medium" />
  <VAvatar initials="CT" size="large" />
  <VAvatar initials="CT" size="big" />
  <VAvatar initials="CT" size="xl" />
</VFlex>

<!--/example-->
