---
state:
  clicked: 0
---

### V-Button

Vuero provides a `<V-Button />` component if you don't want to use the
simple Html button. V-Buttons can be made bold and rounded
by using the `bold` and `rounded` props on the component.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const clicked = ref(0)
</script>

<template>
  <V-Buttons>
    <V-Button @click="clicked++"> clicked: {{ clicked }} </V-Button>
    <V-Button bold @click="clicked++"> clicked: {{ clicked }} </V-Button>
    <V-Button rounded @click="clicked++"> clicked: {{ clicked }} </V-Button>
    <V-Button bold rounded @click="clicked++">
      clicked: {{ clicked }}
    </V-Button>
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons>
  <V-Button @click="frontmatter.state.clicked++">
    clicked: {{ frontmatter.state.clicked }}
  </V-Button>
  <V-Button bold @click="frontmatter.state.clicked++">
    clicked: {{ frontmatter.state.clicked }}
  </V-Button>
  <V-Button rounded @click="frontmatter.state.clicked++">
    clicked: {{ frontmatter.state.clicked }}
  </V-Button>
  <V-Button bold rounded @click="frontmatter.state.clicked++">
    clicked: {{ frontmatter.state.clicked }}
  </V-Button>
</V-Buttons>

<!--/example-->
