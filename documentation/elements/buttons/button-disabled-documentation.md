---
state:
  disabled: true
---

### Disabled Button

Vuero buttons can be shown in a disabled state. To show a disabled button, add the `disabled` html attribute to the target button element.

<!--code-->

```vue {4,13}
<script setup lang="ts">
import { ref } from 'vue'

const disabled = ref(true)
const handleClick = (event: MouseEvent) => {
  // do something
}
</script>

<template>
  <div class="buttons">
    <button 
      :disabled="disabled" 
      class="button h-button is-primary"
      @click="handleClick"
    >
      I'm disabled!
    </button>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <button 
    class="button h-button"
    :disabled="frontmatter.state.disabled"
    @click="clickMe"
  >
    I'm disabled!
  </button>
</div>

<!--/example-->
