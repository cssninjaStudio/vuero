### Select rounded

The Vuero select can have rounded edges. Like other controls, simply add the is-rounded class to the select wrapper element. Please refer to the code example for more details about usage.

<!--code-->

```vue {4,11}
<script setup lang="ts">
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <V-Field>
    <V-Control>
      <div class="select is-rounded">
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
        <div class="select is-rounded">
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
