### Tooltips

You can add the `v-tooltip` directive to `<VIconWrap />` component.  
See code for more details about usage.

<!--code-->

```vue
<template>
  <VFlex column-gap="3px">
    <VIconWrap
      v-tooltip.rounded="'Iam a rounded tooltip'"
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VFlex column-gap="3px">
    <VIconWrap
      v-tooltip.rounded="'Iam a rounded tooltip'"
      icon="feather:help-circle"
      color="info"
      has-background
      has-large-icon
    />
    <VIconWrap
      v-tooltip.info.rounded="'Iam a rounded tooltip'"
      icon="bi:question-lg"
      color="info"
    />
  </VFlex>
</div>

<!--/example-->
