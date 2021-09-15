### Fake squared

When the provided picture URL is null, the avatar component
falls back to a fake avatar. Same size mofifiers are available.
Use the `initials` prop to pass initials to the component.
See the code examples for more details about usage.

<!--code-->

```vue
<template>
  <VFlex alignItems="flex-end" columnGap=".25rem">
    <VAvatar initials="CT" size="small" squared />
    <VAvatar initials="CT" squared />
    <VAvatar initials="CT" size="medium" squared />
    <VAvatar initials="CT" size="large" squared />
    <VAvatar initials="CT" size="big" squared />
    <VAvatar initials="CT" size="xl" squared />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex alignItems="flex-end" columnGap=".25rem">
  <VAvatar initials="CT" size="small" squared />
  <VAvatar initials="CT" squared />
  <VAvatar initials="CT" size="medium" squared />
  <VAvatar initials="CT" size="large" squared />
  <VAvatar initials="CT" size="big" squared />
  <VAvatar initials="CT" size="xl" squared />
</VFlex>

<!--/example-->
