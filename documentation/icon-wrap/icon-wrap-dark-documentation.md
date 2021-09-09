### Dark mode

Customize `<V-IconWrap />` with the `dark`, `darkPrimary`
and `darkCardBordered` props.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <V-Flex column-gap="3px">
    <V-IconWrap icon="feather:star" dark="1" />
    <V-IconWrap icon="feather:star" dark="2" />
    <V-IconWrap icon="feather:star" />
    <V-IconWrap icon="feather:star" dark="4" />
    <V-IconWrap icon="feather:star" dark="5" />
    <V-IconWrap icon="feather:star" dark="6" />
  </V-Flex>
  <V-Flex class="mt-2" column-gap="3px">
    <V-IconWrap icon="feather:star" dark="1" dark-card-bordered />
    <V-IconWrap icon="feather:star" dark="1" />
    <V-IconWrap icon="feather:star" dark="6" dark-card-bordered />
    <V-IconWrap icon="feather:star" dark="6" />
  </V-Flex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-Flex column-gap="3px">
    <V-IconWrap icon="feather:star" dark="1" />
    <V-IconWrap icon="feather:star" dark="2" />
    <V-IconWrap icon="feather:star" />
    <V-IconWrap icon="feather:star" dark="4" />
    <V-IconWrap icon="feather:star" dark="5" />
    <V-IconWrap icon="feather:star" dark="6" />
  </V-Flex>
  <V-Flex class="mt-2" column-gap="3px">
    <V-IconWrap icon="feather:star" dark="1" dark-card-bordered />
    <V-IconWrap icon="feather:star" dark="1" />
    <V-IconWrap icon="feather:star" dark="6" dark-card-bordered />
    <V-IconWrap icon="feather:star" dark="6" />
  </V-Flex>
</div>

<!--/example-->
