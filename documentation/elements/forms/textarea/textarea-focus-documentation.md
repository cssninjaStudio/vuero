---
state:
  textarea: ''
---

### Focus Colors

Like other form controls, textareas can have different border colors
when focused. Simply add the appropriate color modifier class.
Available classes are `is-primary-focus`, `is-success-focus`,
`is-info-focus`, `is-warning-focus`, `is-danger-focus`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <!-- is-primary-focus -->
  <VField>
    <VControl>
      <textarea
        v-model="textarea"
        class="textarea is-primary-focus"
        rows="2"
        placeholder="Primary..."
      ></textarea>
    </VControl>
  </VField>

  <!-- is-success-focus -->
  <VField>
    <VControl>
      <textarea
        v-model="textarea"
        class="textarea is-success-focus"
        rows="2"
        placeholder="Success..."
      ></textarea>
    </VControl>
  </VField>

  <!-- is-info-focus -->
  <VField>
    <VControl>
      <textarea
        v-model="textarea"
        class="textarea is-info-focus"
        rows="2"
        placeholder="Info..."
      ></textarea>
    </VControl>
  </VField>

  <!-- is-warning-focus -->
  <VField>
    <VControl>
      <textarea
        v-model="textarea"
        class="textarea is-warning-focus"
        rows="2"
        placeholder="Warning..."
      ></textarea>
    </VControl>
  </VField>

  <!-- is-danger-focus -->
  <VField>
    <VControl>
      <textarea
        v-model="textarea"
        class="textarea is-danger-focus"
        rows="2"
        placeholder="Danger..."
      ></textarea>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div>
  <VField>
    <VControl>
      <textarea
        v-model="frontmatter.state.textarea"
        class="textarea is-primary-focus"
        rows="2"
        placeholder="Primary..."
      ></textarea>
    </VControl>
  </VField>
  <VField>
    <VControl>
      <textarea
        v-model="frontmatter.state.textarea"
        class="textarea is-success-focus"
        rows="2"
        placeholder="Success..."
      ></textarea>
    </VControl>
  </VField>
  <VField>
    <VControl>
      <textarea
        v-model="frontmatter.state.textarea"
        class="textarea is-info-focus"
        rows="2"
        placeholder="Info..."
      ></textarea>
    </VControl>
  </VField>
  <VField>
    <VControl>
      <textarea
        v-model="frontmatter.state.textarea"
        class="textarea is-warning-focus"
        rows="2"
        placeholder="Warning..."
      ></textarea>
    </VControl>
  </VField>
  <VField>
    <VControl>
      <textarea
        v-model="frontmatter.state.textarea"
        class="textarea is-danger-focus"
        rows="2"
        placeholder="Danger..."
      ></textarea>
    </VControl>
  </VField>
</div>

<!--/example-->
