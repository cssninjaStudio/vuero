### V-Tooltip

Vuero offers a very simple versatile v-tooltip directive.
The example below is the default and basic version.
There are 6 default positions accessible with modifiers: `.top-left`,
`.top-right`, `.bottom-left`, `.bottom`, `.bottom-right`.

<!--code-->

```vue {4,10,16,22,28,34}
<template>
  <V-Tags>
    <V-Tag
      v-tooltip.left="'Iam a top left tooltip'"
      color="solid"
      label="Top Left"
    />

    <V-Tag
      v-tooltip="'Iam a top center tooltip'"
      color="solid"
      label="Top Center"
    />

    <V-Tag
      v-tooltip.right="'Iam a top right tooltip'"
      color="solid"
      label="Top Right"
    />

    <V-Tag
      v-tooltip.bottom.left="'Iam a bottom left tooltip'"
      color="solid"
      label="Bottom Left"
    />

    <V-Tag
      v-tooltip.bottom="'Iam a bottom center tooltip'"
      color="solid"
      label="Bottom Center"
    />

    <V-Tag
      v-tooltip.bottom.right="'Iam a bottom right tooltip'"
      color="solid"
      label="Bottom Right"
    />
  </V-Tags>
</template>
```

<!--/code-->

<!--Example-->

<V-Tags>
  <V-Tag
    v-tooltip.left="'Iam a top left tooltip'"
    color="solid"
    label="Top Left"
  />
  <V-Tag
    v-tooltip="'Iam a top center tooltip'"
    color="solid"
    label="Top Center"
  />
  <V-Tag
    v-tooltip.right="'Iam a top right tooltip'"
    color="solid"
    label="Top Right"
  />
  <V-Tag
    v-tooltip.bottom.left="'Iam a bottom left tooltip'"
    color="solid"
    label="Bottom Left"
  />
  <V-Tag
    v-tooltip.bottom="'Iam a bottom center tooltip'"
    color="solid"
    label="Bottom Center"
  />
  <V-Tag
    v-tooltip.bottom.right="'Iam a bottom right tooltip'"
    color="solid"
    label="Bottom Right"
  />
</V-Tags>

<!--/Example-->
