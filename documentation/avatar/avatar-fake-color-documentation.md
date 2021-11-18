### Fake avatar colors

Fake avatars can have different colors to break monotony.
You can change the avatar color passing one of the following values
to the `color` prop: `primary`, `success`, `info`, `warning`, `danger`,
`h-purple`, `h-orange`, `h-blue`, `h-green`, `h-red`, `h-yellow`.
Supports dark mode.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar initials="CT" size="medium" />
    <VAvatar initials="CT" size="medium" color="primary" />
    <VAvatar initials="CT" size="medium" color="success" />
    <VAvatar initials="CT" size="medium" color="info" />
    <VAvatar initials="CT" size="medium" color="warning" />
    <VAvatar initials="CT" size="medium" color="danger" />
    <VAvatar initials="CT" size="medium" color="h-purple" />
    <VAvatar initials="CT" size="medium" color="h-orange" />
    <VAvatar initials="CT" size="medium" color="h-blue" />
    <VAvatar initials="CT" size="medium" color="h-green" />
    <VAvatar initials="CT" size="medium" color="h-red" />
    <VAvatar initials="CT" size="medium" color="h-yellow" />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar initials="CT" size="medium"/>
  <VAvatar initials="CT" size="medium" color="primary" />
  <VAvatar initials="CT" size="medium" color="success" />
  <VAvatar initials="CT" size="medium" color="info" />
  <VAvatar initials="CT" size="medium" color="warning" />
  <VAvatar initials="CT" size="medium" color="danger" />
  <VAvatar initials="CT" size="medium" color="h-purple" />
  <VAvatar initials="CT" size="medium" color="h-orange" />
  <VAvatar initials="CT" size="medium" color="h-blue" />
  <VAvatar initials="CT" size="medium" color="h-green" />
  <VAvatar initials="CT" size="medium" color="h-red" />
  <VAvatar initials="CT" size="medium" color="h-yellow" />
</VFlex>

<!--/example-->
