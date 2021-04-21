### Tooltip Shapes

Vuero tooltips can have different shapes,
based on what you need in your design.
Available shape modifiers are: `.rounded` and `.bubble`.
Note that the bubble tooltip has uppercase set by default
and doesn't have a tooltip arrow.

<!--code-->

```vue {4,10,16}
<template>
  <V-Tags>
    <V-Tag
      v-tooltip.primary="'Iam a default tooltip'"
      color="solid"
      label="Rounded"
    />

    <V-Tag
      v-tooltip.primary.rounded="'Iam a rounded tooltip'"
      color="solid"
      label="Default"
    />

    <V-Tag
      v-tooltip.primary.bubble="'Iam a bubble tooltip'"
      color="solid"
      label="Bubble"
    />
  </V-Tags>
</template>
```

<!--/code-->

<!--Example-->

<V-Tags>
  <V-Tag v-tooltip.primary="'Iam a default tooltip'" color="solid" label="Rounded" />
  <V-Tag v-tooltip.primary.rounded="'Iam a rounded tooltip'" color="solid" label="Default" />
  <V-Tag v-tooltip.primary.bubble="'Iam a bubble tooltip'" color="solid" label="Bubble" />
</V-Tags>

<!--/Example-->
