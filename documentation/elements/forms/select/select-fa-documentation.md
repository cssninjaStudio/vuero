### Font Awesome

Vuero selects can have icons attached to them.
They work pretty well with Font Awesome icons. You can add an
icon element inside the select. Please refer to the code example
for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <VField>
    <VControl class="has-icons-left">
      <div class="select">
        <select v-model="input">
          <option value="">Select a Hero</option>
          <option value="Superman">Superman</option>
          <option value="Batman">Batman</option>
          <option value="Spiderman">Spiderman</option>
          <option value="Deadpool">Deadpool</option>
          <option value="Spawn">Spawn</option>
          <option value="Galactus">Galactus</option>
        </select>
      </div>
      <div class="icon is-small is-left">
        <i class="fas fa-globe"></i>
      </div>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField>
    <VControl class="has-icons-left">
        <div class="select">
            <select>
                <option>Select a Hero</option>
                <option>Superman</option>
                <option>Batman</option>
                <option>Spiderman</option>
                <option>Deadpool</option>
                <option>Spawn</option>
                <option>Galactus</option>
            </select>
        </div>
        <div class="icon is-small is-left">
            <i class="fas fa-globe"></i>
        </div>
    </VControl>
</VField>

<!--/example-->
