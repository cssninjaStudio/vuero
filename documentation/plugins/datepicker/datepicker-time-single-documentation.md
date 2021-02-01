---
state:
  date: 'new Date()'
  timezone: ''
---

### Timepicker

`<V-Calendar />` can be turned into a simple time picker if needed. Check the
code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from vue

const date = ref(null)
</script>

<template>
  <v-date-picker v-model="date" mode="dateTime" :timezone="timezone">
    <template #default="{ inputValue, inputEvents }">
      <V-Field>
        <V-Control>
          <input class="input" :value="inputValue" v-on="inputEvents" />
        </V-Control>
      </V-Field>
    </template>
  </v-date-picker>
</template>
```

<!--/code-->

<!--example-->

<v-date-picker v-model="frontmatter.state.date" color="green" mode="time">
<template #default="{ inputValue, inputEvents }">
<V-Field>
<V-Control>
<input class="input" :value="inputValue" v-on="inputEvents" />
</V-Control>
</V-Field>
</template>
</v-date-picker>

<!--/example-->
