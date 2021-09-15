---
state:
  clicked: 0
---

### VButton

Vuero provides a `<VButton />` component if you don't want to use the
simple Html button. VButtons can be made bold and rounded
by using the `bold` and `rounded` props on the component.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const clicked = ref(0)
</script>

<template>
  <VButtons>
    <VButton @click="clicked++"> clicked: {{ clicked }} </VButton>
    <VButton bold @click="clicked++"> clicked: {{ clicked }} </VButton>
    <VButton rounded @click="clicked++"> clicked: {{ clicked }} </VButton>
    <VButton bold rounded @click="clicked++"> clicked: {{ clicked }} </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton @click="frontmatter.state.clicked++">
    clicked: {{ frontmatter.state.clicked }}
  </VButton>
  <VButton bold @click="frontmatter.state.clicked++">
    clicked: {{ frontmatter.state.clicked }}
  </VButton>
  <VButton rounded @click="frontmatter.state.clicked++">
    clicked: {{ frontmatter.state.clicked }}
  </VButton>
  <VButton bold rounded @click="frontmatter.state.clicked++">
    clicked: {{ frontmatter.state.clicked }}
  </VButton>
</VButtons>

<!--/example-->
