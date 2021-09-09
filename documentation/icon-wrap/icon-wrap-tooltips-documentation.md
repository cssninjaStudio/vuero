### Tooltips

You can add the `v-tooltip` directive to `<V-IconWrap />` component.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <V-Flex column-gap="3px">
    <V-IconWrap
      v-tooltip.rounded="'Iam a rounded tooltip'"
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
  </V-Flex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-Flex column-gap="3px">
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
  </V-Flex>
</div>

<!--/example-->
