---
state:
  currency: '$'
  amount: ''
---

### Bi-Directional

Inputs can have addons on both sides. You can even attach a select element
to your `<V-Control />` component. Please refer to the code example
for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const currency = ref('$')
</script>

<template>
  <V-Field addons>
    <!-- currency selector -->
    <V-Control>
      <span class="select">
        <select v-model="currency">
          <option value="$">$</option>
          <option value="£">£</option>
          <option value="€">€</option>
        </select>
      </span>
    </V-Control>

    <!-- amount input -->
    <V-Control expanded>
      <input
        v-model="amount"
        type="text"
        class="input"
        placeholder="Amount of money"
      />
    </V-Control>

    <!-- submit -->
    <V-Control>
      <a class="button is-primary">Send Payment</a>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field addons>
  <V-Control>
    <span class="select">
      <select v-model="frontmatter.state.currency">
        <option value="$">$</option>
        <option value="£">£</option>
        <option value="€">€</option>
      </select>
    </span>
  </V-Control>
  <V-Control expanded>
    <input
      v-model="frontmatter.state.amount"
      type="number"
      class="input"
      placeholder="Amount of money"
    />
  </V-Control>
  <V-Control>
    <a class="button is-primary">Send Payment</a>
  </V-Control>
</V-Field>

<!--/example-->
