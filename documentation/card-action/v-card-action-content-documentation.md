### Content

You can add content inside the `<V-CardAction />` component. It will act as
any other component slot.

<!--code-->

```vue
<template>
  <V-CardAction
    avatar="/demo/avatars/19.jpg"
    badge="/images/icons/flags/germany.svg"
    title="Greta K."
    subtitle="Sales Manager"
  >
    <template #action>
      <V-Tag color="green" label="trending" rounded />
    </template>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
      praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
      loqui discimus. Et ille ridens.
    </p>
  </V-CardAction>
</template>
```

<!--/code-->
