### Tooltip Colors

Vuero tooltips can have different colors that can be changed with a simple
CSS class. Available color classes are: `.light`, `.primary`,
`.info`, `.success`, `.warning` and `.error`.

<!--code-->

```vue {4,10,16,22,28,34,40}
<template>
  <VTags>
    <VTag v-tooltip="'Iam a default colored tooltip'" color="solid" label="Default" />

    <VTag v-tooltip.light="'Iam a light colored tooltip'" color="solid" label="Light" />

    <VTag
      v-tooltip.primary="'Iam a primary colored tooltip'"
      color="solid"
      label="Primary"
    />

    <VTag v-tooltip.info="'Iam a info colored tooltip'" color="solid" label="Info" />

    <VTag
      v-tooltip.success="'Iam a success colored tooltip'"
      color="solid"
      label="Success"
    />

    <VTag
      v-tooltip.warning="'Iam a warning colored tooltip'"
      color="solid"
      label="Warning"
    />

    <VTag v-tooltip.error="'Iam a error colored tooltip'" color="solid" label="Error" />
  </VTags>
</template>
```

<!--/code-->

<!--example-->

<VTags>
  <VTag
    v-tooltip="'Iam a default colored tooltip'"
    color="solid"
    label="Default"
  />
  <VTag
    v-tooltip.light="'Iam a light colored tooltip'"
    color="solid"
    label="Light"
  />
  <VTag
    v-tooltip.primary="'Iam a primary colored tooltip'"
    color="solid"
    label="Primary"
  />
  <VTag
    v-tooltip.info="'Iam a info colored tooltip'"
    color="solid"
    label="Info"
  />
  <VTag
    v-tooltip.success="'Iam a success colored tooltip'"
    color="solid"
    label="Success"
  />
  <VTag
    v-tooltip.warning="'Iam a warning colored tooltip'"
    color="solid"
    label="Warning"
  />
  <VTag
    v-tooltip.error="'Iam a error colored tooltip'"
    color="solid"
    label="Error"
  />
</VTags>

<!--/example-->
