---
state:
  currency: '$'
  amount: ''
---

### Bi-Directional addons

Inputs can have addons on both sides. You can even attach a select element
to your `<VControl />` component. Please refer to the code example
for more details about usage.

Note that if you need multiple inputs
(like a `<VSelect>` addons for currency selection),
you should wrap this other input with `<VControl subcontrol>` or
`<VField subcontrol>` component.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const currency = ref('$')
</script>

<template>
  <VField addons>
    <!-- currency selector with subcontrol -->
    <VControl subcontrol>
      <VSelect v-model="currency">
        <VOption value="$">$</VOption>
        <VOption value="£">£</VOption>
        <VOption value="€">€</VOption>
      </VSelect>
    </VControl>

    <!-- amount input -->
    <VControl expanded>
      <VInput v-model="amount" type="text" placeholder="Amount of money" />
    </VControl>

    <!-- submit -->
    <VControl>
      <VButton color="primary">Send Payment</VButton>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl subcontrol>
    <VSelect v-model="frontmatter.state.currency">
      <VOption value="$">$</VOption>
      <VOption value="£">£</VOption>
      <VOption value="€">€</VOption>
    </VSelect>
  </VControl>
  <VControl expanded>
    <VInput v-model="frontmatter.state.amount" type="text" placeholder="Amount of money" />
  </VControl>
  <VControl>
    <VButton color="primary">Send Payment</VButton>
  </VControl>
</VField>

<!--/example-->
