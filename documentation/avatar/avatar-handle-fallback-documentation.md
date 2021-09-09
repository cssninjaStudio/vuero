### Fallback avatar

Vuero Avatars automatically fall back to a placeholder
when no valid URL is provided for the `picture` prop.

<!--code-->

```vue
<template>
  <V-Flex alignItems="flex-end" columnGap=".25rem">
    <V-Avatar picture="no-file.jpg" size="small" />
    <V-Avatar picture="no-file.jpg" />
    <V-Avatar picture="no-file.jpg" size="medium" />
    <V-Avatar picture="no-file.jpg" size="large" />
    <V-Avatar picture="no-file.jpg" size="big" />
    <V-Avatar picture="no-file.jpg" size="xl" />
  </V-Flex>
</template>
```

<!--/code-->

<!--example-->

<V-Flex alignItems="flex-end" columnGap=".25rem">
  <V-Avatar picture="no-file.jpg" size="small" />
  <V-Avatar picture="no-file.jpg" />
  <V-Avatar picture="no-file.jpg" size="medium" />
  <V-Avatar picture="no-file.jpg" size="large" />
  <V-Avatar picture="no-file.jpg" size="big" />
  <V-Avatar picture="no-file.jpg" size="xl" />
</V-Flex>

<!--/example-->
