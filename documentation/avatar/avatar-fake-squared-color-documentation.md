### Fake squared colors

Fake avatars can have different colors to break monotony.
You can change the avatar color passing one of the following
values to the `color` prop: `primary`, `success`, `info`, `warning`,
`danger`, `h-purple`, `h-orange`, `h-blue`, `h-green`, `h-red`, `h-yellow`.
Supports dark mode.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar initials="CT" size="medium" squared />
    <VAvatar initials="CT" size="medium" color="primary" squared />
    <VAvatar initials="CT" size="medium" color="success" squared />
    <VAvatar initials="CT" size="medium" color="info" squared />
    <VAvatar initials="CT" size="medium" color="warning" squared />
    <VAvatar initials="CT" size="medium" color="danger" squared />
    <VAvatar initials="CT" size="medium" color="h-purple" squared />
    <VAvatar initials="CT" size="medium" color="h-orange" squared />
    <VAvatar initials="CT" size="medium" color="h-blue" squared />
    <VAvatar initials="CT" size="medium" color="h-green" squared />
    <VAvatar initials="CT" size="medium" color="h-red" squared />
    <VAvatar initials="CT" size="medium" color="h-yellow" squared />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar initials="CT" size="medium" squared/>
  <VAvatar initials="CT" size="medium" color="primary" squared />
  <VAvatar initials="CT" size="medium" color="success" squared />
  <VAvatar initials="CT" size="medium" color="info" squared />
  <VAvatar initials="CT" size="medium" color="warning" squared />
  <VAvatar initials="CT" size="medium" color="danger" squared />
  <VAvatar initials="CT" size="medium" color="h-purple" squared />
  <VAvatar initials="CT" size="medium" color="h-orange" squared />
  <VAvatar initials="CT" size="medium" color="h-blue" squared />
  <VAvatar initials="CT" size="medium" color="h-green" squared />
  <VAvatar initials="CT" size="medium" color="h-red" squared />
  <VAvatar initials="CT" size="medium" color="h-yellow" squared />
</VFlex>

<!--/example-->
