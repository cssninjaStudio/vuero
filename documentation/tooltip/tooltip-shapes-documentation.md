### Tooltip Shapes

Vuero tooltips can have different shapes,
based on what you need in your design.
Available shape modifiers are: `.rounded` and `.bubble`.
Note that the bubble tooltip has uppercase set by default
and doesn't have a tooltip arrow.

<!--code-->

```vue {4,10,16}
<template>
  <VTags>
    <VTag v-tooltip.primary="'Iam a default tooltip'" color="solid" label="Rounded" />

    <VTag
      v-tooltip.primary.rounded="'Iam a rounded tooltip'"
      color="solid"
      label="Default"
    />

    <VTag
      v-tooltip.primary.bubble="'Iam a bubble tooltip'"
      color="solid"
      label="Bubble"
    />
  </VTags>
</template>
```

<!--/code-->

<!--Example-->

<VTags>
  <VTag v-tooltip.primary="'Iam a default tooltip'" color="solid" label="Rounded" />
  <VTag v-tooltip.primary.rounded="'Iam a rounded tooltip'" color="solid" label="Default" />
  <VTag v-tooltip.primary.bubble="'Iam a bubble tooltip'" color="solid" label="Bubble" />
</VTags>

<!--/Example-->
