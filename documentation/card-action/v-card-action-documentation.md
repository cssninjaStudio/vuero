### VCardAction

The `<VCardAction />` component is a enhamcement and port to Vue
of the classic bulma card component, a classy and easy way
to display post-like content. The component has several props
to pass in the content you want to display.
Check the code example for more details.

<!--code-->

<!--code-->

```vue
<template>
  <VCardAction
    avatar="/demo/avatars/19.jpg"
    badge="/images/icons/flags/germany.svg"
    title="Greta K."
    subtitle="Sales Manager"
  >
    <template #action>
      <VTag color="green" label="trending" rounded />
    </template>
  </VCardAction>
</template>
```

<!--/code-->
