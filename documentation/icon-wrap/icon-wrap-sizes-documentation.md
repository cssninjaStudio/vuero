### Size

Customize `<V-IconWrap />` with the `size` and `hasLargeIcon` props.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" size="small" />
    <V-IconWrap icon="feather:star" />
    <V-IconWrap icon="feather:star" size="medium" />
    <V-IconWrap icon="feather:star" size="large" />
  </V-IconWraps>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" has-large-icon size="small" />
    <V-IconWrap icon="feather:star" has-large-icon />
    <V-IconWrap icon="feather:star" has-large-icon size="medium" />
    <V-IconWrap icon="feather:star" has-large-icon size="large" />
  </V-IconWraps>
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" size="small" />
    <V-IconWrap icon="feather:star" />
    <V-IconWrap icon="feather:star" size="medium" />
    <V-IconWrap icon="feather:star" size="large" />
  </V-IconWraps>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" has-large-icon size="small" />
    <V-IconWrap icon="feather:star" has-large-icon />
    <V-IconWrap icon="feather:star" has-large-icon size="medium" />
    <V-IconWrap icon="feather:star" has-large-icon size="large" />
  </V-IconWraps>
</div>

<!--/example-->
