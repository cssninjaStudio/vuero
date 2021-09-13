### Dot colors

Avatar dots can have different colors. Set the `dotColor` prop
to `primary`, `info`, `warning`, `danger` or `grey` to change the dot color.
See code for more details about usage.

<!--code-->

```vue
<template>
  <V-Flex alignItems="flex-end" columnGap=".25rem">
    <V-Avatar picture="/demo/avatars/7.jpg" size="medium" dot />
    <V-Avatar
      picture="/demo/avatars/8.jpg"
      size="medium"
      dot
      dot-color="primary"
    />
    <V-Avatar
      picture="/demo/avatars/11.jpg"
      size="medium"
      dot
      dot-color="info"
    />
    <V-Avatar
      picture="/demo/avatars/21.jpg"
      size="medium"
      dot
      dot-color="warning"
    />
    <V-Avatar
      picture="/demo/avatars/13.jpg"
      size="medium"
      dot
      dot-color="danger"
    />
    <V-Avatar
      picture="/demo/avatars/5.jpg"
      size="medium"
      dot
      dot-color="grey"
    />
  </V-Flex>
</template>
```

<!--/code-->

<!--example-->

<V-Flex alignItems="flex-end" columnGap=".25rem">
  <V-Avatar picture="/demo/avatars/7.jpg" size="medium" dot />
  <V-Avatar picture="/demo/avatars/8.jpg" size="medium" dot dotColor="primary" />
  <V-Avatar picture="/demo/avatars/11.jpg" size="medium" dot dotColor="info" />
  <V-Avatar picture="/demo/avatars/21.jpg" size="medium" dot dotColor="warning" />
  <V-Avatar picture="/demo/avatars/13.jpg" size="medium" dot dotColor="danger" />
  <V-Avatar picture="/demo/avatars/5.jpg" size="medium" dot dotColor="grey" />
</V-Flex>

<!--/example-->
