---
state:
  flipped: false
---

### V-CreditCard

Vuero ships with the `<V-CreditCard />` component, a custom credit card
previewer. Check the code for more details.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from vue

const flipped = ref(null)
</script>

<template>
  <V-Field>
    <V-Control>
      <V-CreditCard
        color="grey"
        :flipped="flipped"
        @flip="flipped = !flipped"
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field class="credit-card">
  <V-Control>
    <V-CreditCard
      color="grey"
      :flipped="frontmatter.state.flipped"
      @flip="frontmatter.state.flipped = !frontmatter.state.flipped"
    />
  </V-Control>
</V-Field>

<!--/example-->
