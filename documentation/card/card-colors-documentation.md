---
disable_example: true
---

### Colored Card

Vuero cards can have colored backgrounds when you need them to.
To display Available color modifiers are `is-primary`, `is-secondary`,
`is-info`, `is-success`, `is-warning` and `is-danger`.

<!--code-->

```vue
<template>
  <VCard radius="small" color="primary">
    <h3 class="title is-5 mb-2">Primary Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard color="secondary">
    <h3 class="title is-5 mb-2">Secondary Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard radius="large" color="info">
    <h3 class="title is-5 mb-2">Info Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard radius="small" color="success">
    <h3 class="title is-5 mb-2">Success Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard color="warning">
    <h3 class="title is-5 mb-2">Warning Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard radius="large" color="danger">
    <h3 class="title is-5 mb-2">Danger L-Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>
</template>
```

<!--/code-->
