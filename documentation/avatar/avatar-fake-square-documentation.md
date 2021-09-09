### Fake squared

When the provided picture URL is null, the avatar component
falls back to a fake avatar. Same size mofifiers are available.
Use the `initials` prop to pass initials to the component.
See the code examples for more details about usage.

<!--code-->

```vue
<template>
  <V-Flex alignItems="flex-end" columnGap=".25rem">
    <V-Avatar initials="CT" size="small" squared />
    <V-Avatar initials="CT" squared />
    <V-Avatar initials="CT" size="medium" squared />
    <V-Avatar initials="CT" size="large" squared />
    <V-Avatar initials="CT" size="big" squared />
    <V-Avatar initials="CT" size="xl" squared />
  </V-Flex>
</template>
```

<!--/code-->

<!--example-->

<V-Flex alignItems="flex-end" columnGap=".25rem">
  <V-Avatar initials="CT" size="small" squared />
  <V-Avatar initials="CT" squared />
  <V-Avatar initials="CT" size="medium" squared />
  <V-Avatar initials="CT" size="large" squared />
  <V-Avatar initials="CT" size="big" squared />
  <V-Avatar initials="CT" size="xl" squared />
</V-Flex>

<!--/example-->
