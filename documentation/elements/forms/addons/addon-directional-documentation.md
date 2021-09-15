---
state:
  currency: '$'
  amount: ''
---

### Bi-Directional

Inputs can have addons on both sides. You can even attach a select element
to your `<VControl />` component. Please refer to the code example
for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const currency = ref('$')
</script>

<template>
  <VField addons>
    <!-- currency selector -->
    <VControl>
      <span class="select">
        <select v-model="currency">
          <option value="$">$</option>
          <option value="£">£</option>
          <option value="€">€</option>
        </select>
      </span>
    </VControl>

    <!-- amount input -->
    <VControl expanded>
      <input
        v-model="amount"
        type="text"
        class="input"
        placeholder="Amount of money"
      />
    </VControl>

    <!-- submit -->
    <VControl>
      <a class="button is-primary">Send Payment</a>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField addons>
  <VControl>
    <span class="select">
      <select v-model="frontmatter.state.currency">
        <option value="$">$</option>
        <option value="£">£</option>
        <option value="€">€</option>
      </select>
    </span>
  </VControl>
  <VControl expanded>
    <input
      v-model="frontmatter.state.amount"
      type="number"
      class="input"
      placeholder="Amount of money"
    />
  </VControl>
  <VControl>
    <a class="button is-primary">Send Payment</a>
  </VControl>
</VField>

<!--/example-->
