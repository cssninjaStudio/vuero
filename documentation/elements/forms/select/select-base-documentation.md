### Select

Vuero provides default styles for the native Html select element.
There's an additional wrapper for the styles to apply properly.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <V-Field>
    <V-Control>
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
</template>
```

<!--/code-->

<!--example-->

<V-Field>
    <V-Control>
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
