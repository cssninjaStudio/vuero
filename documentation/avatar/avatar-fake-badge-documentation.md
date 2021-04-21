### Fake badge

When the provided picture URL is null, the avatar component
falls back to a fake avatar. Fake avatars can also have badges.
See the code examples for more details about usage.

<!--code-->

```vue
<template>
  <V-Avatar
    initials="CT"
    size="small"
    badge="/images/icons/flags/united-states-of-america.svg"
  />
  <V-Avatar
    initials="CT"
    badge="/images/icons/flags/united-states-of-america.svg"
  />
  <V-Avatar
    initials="CT"
    size="medium"
    badge="/images/icons/flags/united-states-of-america.svg"
  />
  <V-Avatar
    initials="CT"
    size="large"
    badge="/images/icons/flags/united-states-of-america.svg"
  />
  <V-Avatar
    initials="CT"
    size="big"
    badge="/images/icons/flags/united-states-of-america.svg"
  />
  <V-Avatar
    initials="CT"
    size="xl"
    badge="/images/icons/flags/united-states-of-america.svg"
  />
</template>
```

<!--/code-->

<!--example-->

<V-Avatar initials="CT" size="small" badge="/images/icons/flags/united-states-of-america.svg" />
<V-Avatar initials="CT" badge="/images/icons/flags/united-states-of-america.svg" />
<V-Avatar initials="CT" size="medium" badge="/images/icons/flags/united-states-of-america.svg" />
<V-Avatar initials="CT" size="large" badge="/images/icons/flags/united-states-of-america.svg" />
<V-Avatar initials="CT" size="big" badge="/images/icons/flags/united-states-of-america.svg" />
<V-Avatar initials="CT" size="xl" badge="/images/icons/flags/united-states-of-america.svg" />

<!--/example-->
