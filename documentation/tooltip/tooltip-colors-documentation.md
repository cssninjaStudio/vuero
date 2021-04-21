### Tooltip Colors

Vuero tooltips can have different colors that can be changed with a simple
CSS class. Available color classes are: `.light`, `.primary`,
`.info`, `.success`, `.warning` and `.error`.

<!--code-->

```vue {4,10,16,22,28,34,40}
<template>
  <V-Tags>
    <V-Tag
      v-tooltip="'Iam a default colored tooltip'"
      color="solid"
      label="Default"
    />

    <V-Tag
      v-tooltip.light="'Iam a light colored tooltip'"
      color="solid"
      label="Light"
    />

    <V-Tag
      v-tooltip.primary="'Iam a primary colored tooltip'"
      color="solid"
      label="Primary"
    />

    <V-Tag
      v-tooltip.info="'Iam a info colored tooltip'"
      color="solid"
      label="Info"
    />

    <V-Tag
      v-tooltip.success="'Iam a success colored tooltip'"
      color="solid"
      label="Success"
    />

    <V-Tag
      v-tooltip.warning="'Iam a warning colored tooltip'"
      color="solid"
      label="Warning"
    />

    <V-Tag
      v-tooltip.error="'Iam a error colored tooltip'"
      color="solid"
      label="Error"
    />
  </V-Tags>
</template>
```

<!--/code-->

<!--Example-->

<V-Tags>
  <V-Tag
    v-tooltip="'Iam a default colored tooltip'"
    color="solid"
    label="Default"
  />
  <V-Tag
    v-tooltip.light="'Iam a light colored tooltip'"
    color="solid"
    label="Light"
  />
  <V-Tag
    v-tooltip.primary="'Iam a primary colored tooltip'"
    color="solid"
    label="Primary"
  />
  <V-Tag
    v-tooltip.info="'Iam a info colored tooltip'"
    color="solid"
    label="Info"
  />
  <V-Tag
    v-tooltip.success="'Iam a success colored tooltip'"
    color="solid"
    label="Success"
  />
  <V-Tag
    v-tooltip.warning="'Iam a warning colored tooltip'"
    color="solid"
    label="Warning"
  />
  <V-Tag
    v-tooltip.error="'Iam a error colored tooltip'"
    color="solid"
    label="Error"
  />
</V-Tags>

<!--/Example-->
