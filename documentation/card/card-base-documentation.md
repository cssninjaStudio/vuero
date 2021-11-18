---
disable_example: true
---

### VCard

Vuero cards are very versatile and can be used in any type of layout.
Vuero provides 3 main Html cards with the following classes: `.s-card`,
`.r-card` and `.l-card`. The main difference each one of those is
the border radius, giving a unique look and feel to each one of them.

<!--code-->

```vue
<template>
  <VCard radius="small">
    <h3 class="title is-5 mb-2">Iam an S-Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard>
    <h3 class="title is-5 mb-2">Iam an R-Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard radius="large">
    <h3 class="title is-5 mb-2">Iam an L-Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>
</template>
```

<!--/code-->
