### Tooltip Shapes

Vuero tooltips can have different shapes,
based on what you need in your design.
Available shape classes are: `hint--rounded` and `hint--bubble`.
Note that the bubble tooltip has uppercase set by default
and doesn't have a tooltip arrow.

<!--code-->

```vue
<template>
  <span
    class="tag is-curved is-solid hint--primary hint--top"
    data-hint="Iam a default tooltip"
    >Default</span
  >
  <span
    class="tag is-curved is-solid hint--primary hint--rounded hint--top"
    data-hint="Iam a rounded tooltip"
    >Rounded</span
  >
  <span
    class="tag is-curved is-solid hint--primary hint--bubble hint--top"
    data-hint="I am a bubble tooltip"
    >Bubble</span
  >
</template>
```

<!--/code-->

<!--Example-->

<div class="tags">
    <span
    class="tag is-curved is-solid hint--primary hint--top"
    data-hint="Iam a default tooltip"
    >Default</span
    >
    <span
    class="tag is-curved is-solid hint--primary hint--rounded hint--top"
    data-hint="Iam a rounded tooltip"
    >Rounded</span
    >
    <span
    class="tag is-curved is-solid hint--primary hint--bubble hint--top"
    data-hint="I am a bubble tooltip"
    >Bubble</span
    >
</div>

<!--/Example-->
