### Default Tooltip

Vuero offers a very simple versatile and CSS only tooltip.
The example below is the default and basic version.
There are 6 default positions: `hint--top-left`, `hint--top`,
`hint--top-right`, `hint--bottom-left`, `hint--bottom`, `hint--bottom-right`.
The tooltip text is controlled via the `data-hint` attribute.

<!--code-->

```vue
<template>
  <span
    class="tag is-curved is-solid hint--top-left"
    data-hint="Iam a top left tooltip"
    >Top Left</span
  >
  <span
    class="tag is-curved is-solid hint--top"
    data-hint="Iam a top center tooltip"
    >Top Center</span
  >
  <span
    class="tag is-curved is-solid hint--top-right"
    data-hint="Iam a top right tooltip"
    >Top Right</span
  >
  <span
    class="tag is-curved is-solid hint--bottom-left"
    data-hint="Iam a bottom left tooltip"
    >Bottom Left</span
  >
  <span
    class="tag is-curved is-solid hint--bottom"
    data-hint="Iam a bottom center tooltip"
    >Bottom Center</span
  >
  <span
    class="tag is-curved is-solid hint--bottom-right"
    data-hint="Iam a bottom right tooltip"
    >Bottom Right</span
  >
</template>
```

<!--/code-->

<!--Example-->

<div class="tags">
    <span
        class="tag is-curved is-solid hint--top-left"
        data-hint="Iam a top left tooltip"
        >Top Left</span
    >
    <span
        class="tag is-curved is-solid hint--top"
        data-hint="Iam a top center tooltip"
        >Top Center</span
    >
    <span
        class="tag is-curved is-solid hint--top-right"
        data-hint="Iam a top right tooltip"
        >Top Right</span
    >
    <span
        class="tag is-curved is-solid hint--bottom-left"
        data-hint="Iam a bottom left tooltip"
        >Bottom Left</span
    >
    <span
        class="tag is-curved is-solid hint--bottom"
        data-hint="Iam a bottom center tooltip"
        >Bottom Center</span
    >
    <span
        class="tag is-curved is-solid hint--bottom-right"
        data-hint="Iam a bottom right tooltip"
        >Bottom Right</span
    >
</div>

<!--/Example-->
