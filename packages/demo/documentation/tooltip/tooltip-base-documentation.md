### VTooltip

Vuero offers a very simple versatile v-tooltip directive.
The example below is the default and basic version.
There are 6 default positions accessible with modifiers: `.top-left`,
`.top-right`, `.bottom-left`, `.bottom`, `.bottom-right`.

<!--code-->

```vue {4,10,16,22,28,34}
<template>
  <VTags>
    <VTag v-tooltip.left="'Iam a top left tooltip'" color="solid" label="Top Left" />

    <VTag v-tooltip="'Iam a top center tooltip'" color="solid" label="Top Center" />

    <VTag v-tooltip.right="'Iam a top right tooltip'" color="solid" label="Top Right" />

    <VTag
      v-tooltip.bottom.left="'Iam a bottom left tooltip'"
      color="solid"
      label="Bottom Left"
    />

    <VTag
      v-tooltip.bottom="'Iam a bottom center tooltip'"
      color="solid"
      label="Bottom Center"
    />

    <VTag
      v-tooltip.bottom.right="'Iam a bottom right tooltip'"
      color="solid"
      label="Bottom Right"
    />
  </VTags>
</template>
```

<!--/code-->

<!--example-->

<VTags>
  <VTag
    v-tooltip.left="'Iam a top left tooltip'"
    color="solid"
    label="Top Left"
  />
  <VTag
    v-tooltip="'Iam a top center tooltip'"
    color="solid"
    label="Top Center"
  />
  <VTag
    v-tooltip.right="'Iam a top right tooltip'"
    color="solid"
    label="Top Right"
  />
  <VTag
    v-tooltip.bottom.left="'Iam a bottom left tooltip'"
    color="solid"
    label="Bottom Left"
  />
  <VTag
    v-tooltip.bottom="'Iam a bottom center tooltip'"
    color="solid"
    label="Bottom Center"
  />
  <VTag
    v-tooltip.bottom.right="'Iam a bottom right tooltip'"
    color="solid"
    label="Bottom Right"
  />
</VTags>

<!--/example-->
