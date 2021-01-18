---
state:
  loading: false
---

### Loading Button

Huro buttons can be shown in a loading state. To show a loading spinner, add the `is-loading` modifier class.

<!--code-->

```vue {4,13}
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const handleClick = (event: MouseEvent) => {
  loading.value = !loading.value
}
</script>

<template>
  <div class="buttons">
    <a 
      :class="[loading && 'is-loading']" 
      class="button h-button is-primary"
      @click="handleClick"
    >
      Click me!
    </a>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <a 
    class="button h-button"
    :class="[frontmatter.state.loading && 'is-loading']" 
    @click="() => { 
      frontmatter.state.loading = true
      timeout(reset)
    }"
  >
    Click me!
  </a>
</div>

<!--/example-->
