---
state:
  clicked: 0
---

### H-Button

Vuero provides it's own subset of Bulma buttons. Use the `h-button` class with a Bulma native `button` class to start using Vuero buttons.  

#### Modifiers

Basic modifiers such as `is-bold` and `is-rounded` are available.

> toto

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const clicked = ref(0)
</script>

<template>
  <!-- use on native <button> tag -->
  <button class="button h-button" @click="clicked++">
    clicked: {{ clicked }}
  </button>

  <!-- or on <a> tag -->
  <a href="#" class="button h-button" @click.prevent="clicked++">
    clicked: {{ clicked }}
  </a>

  <!-- or on <router-link> component -->
  <RouterLink :to="{ name: 'index' }" class="button h-button">
    clicked: {{ clicked }}
  </RouterLink>
</template>
```

<!--/code-->


<!--example-->

<div class="buttons">
  <a 
    class="button h-button" 
    @click="frontmatter.state.clicked++"
  >
    clicked: {{ frontmatter.state.clicked }}
  </a>
  <a 
    class="button h-button is-bold" 
    @click="frontmatter.state.clicked++"
  >
    clicked: {{ frontmatter.state.clicked }}
  </a>
  <a 
    class="button h-button is-rounded" 
    @click="frontmatter.state.clicked++"
  >
    clicked: {{ frontmatter.state.clicked }}
  </a>
  <a 
    class="button h-button is-rounded is-bold" 
    @click="frontmatter.state.clicked++"
  >
    clicked: {{ frontmatter.state.clicked }}
  </a>
</div>

<!--/example-->
