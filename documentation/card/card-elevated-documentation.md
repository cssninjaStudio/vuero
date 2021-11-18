---
disable_example: true
---

### Elevated Card

Vuero cards can be elevated and show a light box shadow.
To display elevated cards, simply add the `is-raised`
class to the target card element.

<!--code-->

```vue
<template>
  <VCard radius="small" elevated>
    <h3 class="title is-5 mb-2">Iam an Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard elevated>
    <h3 class="title is-5 mb-2">Iam an Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>

  <VCard radius="large" elevated>
    <h3 class="title is-5 mb-2">Iam an Card</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
      multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
      ridens.
    </p>
  </VCard>
</template>
```

<!--/code-->
