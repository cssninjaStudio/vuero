### V-IconWrap

The Vuero `<V-IconWrap />` component let you display icons
in a fancy and colored way.
See code for more details about usage.

<!--code-->

```vue
<template>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" />
    <V-IconWrap
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <V-IconWrap icon="feather:x" color="danger" />
    <V-IconWrap icon="feather:code" />
    <V-IconWrap picture="/demo/avatars/8.jpg" />
    <V-IconWrap picture="/demo/avatars/13.jpg" />
  </V-IconWraps>
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" color="warning" />
    <V-IconWrap icon="feather:code" />
    <V-IconWrap icon="feather:x" color="danger" has-large-icon />
    <V-IconWrap
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <V-IconWrap picture="/demo/avatars/8.jpg" />
    <V-IconWrap picture="/demo/avatars/13.jpg" />
  </V-IconWraps>
</div>

<!--/example-->
