### Tooltips

You can add the `v-tooltip` directive to `<V-IconWrap />` component.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <V-IconWraps>
    <V-IconWrap
      v-tooltip.rounded="'Iam a rounded tooltip'"
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
  </V-IconWraps>
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-IconWraps>
    <V-IconWrap
      v-tooltip.rounded="'Iam a rounded tooltip'"
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <V-IconWrap
      v-tooltip.info.rounded="'Iam a rounded tooltip'"
      icon="bi:question-lg"
      color="info"
    />
  </V-IconWraps>
</div>

<!--/example-->
