### Size

Customize `<V-IconWrap />` with the `size` and `hasLargeIcon` props.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <V-Flex column-gap="3px">
    <V-IconWrap icon="feather:star" size="small" />
    <V-IconWrap icon="feather:star" />
    <V-IconWrap icon="feather:star" size="medium" />
    <V-IconWrap icon="feather:star" size="large" />
  </V-Flex>
  <V-Flex column-gap="3px">
    <V-IconWrap icon="feather:star" has-large-icon size="small" />
    <V-IconWrap icon="feather:star" has-large-icon />
    <V-IconWrap icon="feather:star" has-large-icon size="medium" />
    <V-IconWrap icon="feather:star" has-large-icon size="large" />
  </V-Flex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-Flex column-gap="3px">
    <V-IconWrap icon="feather:star" size="small" />
    <V-IconWrap icon="feather:star" />
    <V-IconWrap icon="feather:star" size="medium" />
    <V-IconWrap icon="feather:star" size="large" />
  </V-Flex>
  <V-Flex column-gap="3px">
    <V-IconWrap icon="feather:star" has-large-icon size="small" />
    <V-IconWrap icon="feather:star" has-large-icon />
    <V-IconWrap icon="feather:star" has-large-icon size="medium" />
    <V-IconWrap icon="feather:star" has-large-icon size="large" />
  </V-Flex>
</div>

<!--/example-->
