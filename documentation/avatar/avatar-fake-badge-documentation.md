### Fake badge

When the provided picture URL is null, the avatar component
falls back to a fake avatar. Fake avatars can also have badges.
See the code examples for more details about usage.

<!--code-->

```vue
<template>
  <VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
    <VAvatar
      initials="CT"
      size="small"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar initials="CT" badge="/images/icons/flags/united-states-of-america.svg" />
    <VAvatar
      initials="CT"
      size="medium"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      initials="CT"
      size="large"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      initials="CT"
      size="big"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
    <VAvatar
      initials="CT"
      size="xl"
      badge="/images/icons/flags/united-states-of-america.svg"
    />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex flex-wrap="wrap" align-items="flex-end" row-gap=".5rem" column-gap=".25rem">
  <VAvatar initials="CT" size="small" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" size="medium" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" size="large" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" size="big" badge="/images/icons/flags/united-states-of-america.svg" />
  <VAvatar initials="CT" size="xl" badge="/images/icons/flags/united-states-of-america.svg" />
</VFlex>

<!--/example-->
