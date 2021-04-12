### Loading select

vuero selects can be shown in a loading state. To apply that style,
simply add the is-loading class to the select wrapping element.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <V-Field>
    <V-Control loading>
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
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
    <V-Control loading>
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
    </V-Control>
</V-Field>

<!--/example-->
