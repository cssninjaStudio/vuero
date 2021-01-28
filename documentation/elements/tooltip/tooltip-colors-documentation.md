### Tooltip Colors

Vuero tooltips can have different colors that can be changed with a simple
CSS class. Available color classes are: `hint--light`, `hint--primary`,
`hint--info`, `hint--success`, `hint--warning` and `hint--error`.

<!--code-->

```vue
<template>
  <span
    class="tag is-curved is-solid hint--top"
    data-hint="Iam a default tooltip"
    >Default</span
  >
  <span
    class="tag is-curved is-solid hint--light hint--top"
    data-hint="Iam a light tooltip"
    >Light</span
  >
  <span
    class="tag is-curved is-solid hint--primary hint--top"
    data-hint="Iam a primary tooltip"
    >Primary</span
  >
  <span
    class="tag is-curved is-solid hint--info hint--top"
    data-hint="Iam a info tooltip"
    >Info</span
  >
  <span
    class="tag is-curved is-solid hint--success hint--top"
    data-hint="Iam a success tooltip"
    >Success</span
  >
  <span
    class="tag is-curved is-solid hint--warning hint--top"
    data-hint="Iam a warning tooltip"
    >Warning</span
  >
  <span
    class="tag is-curved is-solid hint--error hint--top"
    data-hint="Iam a danger tooltip"
    >Error</span
  >
</template>
```

<!--/code-->

<!--Example-->

<div class="tags">
    <span
    class="tag is-curved is-solid hint--top"
    data-hint="Iam a default tooltip"
    >Default</span
    >
    <span
    class="tag is-curved is-solid hint--light hint--top"
    data-hint="Iam a light tooltip"
    >Light</span
    >
    <span
    class="tag is-curved is-solid hint--primary hint--top"
    data-hint="Iam a primary tooltip"
    >Primary</span
    >
    <span
    class="tag is-curved is-solid hint--info hint--top"
    data-hint="Iam a info tooltip"
    >Info</span
    >
    <span
    class="tag is-curved is-solid hint--success hint--top"
    data-hint="Iam a success tooltip"
    >Success</span
    >
    <span
    class="tag is-curved is-solid hint--warning hint--top"
    data-hint="Iam a warning tooltip"
    >Warning</span
    >
    <span
    class="tag is-curved is-solid hint--error hint--top"
    data-hint="Iam a danger tooltip"
    >Error</span
    >
</div>

<!--/Example-->
