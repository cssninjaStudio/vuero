### Dark mode

Customize `<V-IconWrap />` with the `dark`, `darkPrimary`
and `darkCardBordered` props.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" dark="1" />
    <V-IconWrap icon="feather:star" dark="2" />
    <V-IconWrap icon="feather:star" />
    <V-IconWrap icon="feather:star" dark="4" />
    <V-IconWrap icon="feather:star" dark="5" />
    <V-IconWrap icon="feather:star" dark="6" />
  </V-IconWraps>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" dark="1" dark-card-bordered />
    <V-IconWrap icon="feather:star" dark="1" />
    <V-IconWrap icon="feather:star" dark="6" dark-card-bordered />
    <V-IconWrap icon="feather:star" dark="6" />
  </V-IconWraps>
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" dark="1" />
    <V-IconWrap icon="feather:star" dark="2" />
    <V-IconWrap icon="feather:star" />
    <V-IconWrap icon="feather:star" dark="4" />
    <V-IconWrap icon="feather:star" dark="5" />
    <V-IconWrap icon="feather:star" dark="6" />
  </V-IconWraps>
  <V-IconWraps>
    <V-IconWrap icon="feather:star" dark="1" dark-card-bordered />
    <V-IconWrap icon="feather:star" dark="1" />
    <V-IconWrap icon="feather:star" dark="6" dark-card-bordered />
    <V-IconWrap icon="feather:star" dark="6" />
  </V-IconWraps>
</div>

<!--/example-->
