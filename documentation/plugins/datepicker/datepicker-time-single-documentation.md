---
state:
  date: 2021-02-28T16:20:00.000Z
---

### Timepicker

`<VCalendar />` can be turned into a simple time picker if needed.
You can add the `is24hr` attribute to display hours in 24h format.
Check the code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const date = ref(null)
</script>

<template>
  <VDatePicker v-model="date" mode="dateTime" is24hr>
    <template #default="{ inputValue, inputEvents }">
      <VField>
        <VControl icon="feather:clock">
          <VInput :value="inputValue" v-on="inputEvents" />
        </VControl>
      </VField>
    </template>
  </VDatePicker>
</template>
```

<!--/code-->

<!--example-->

<VDatePicker v-model="frontmatter.state.date" color="green" mode="time" is24hr>
  <template #default="{ inputValue, inputEvents }">
    <VField>
      <VControl icon="feather:clock">
        <VInput :value="inputValue" v-on="inputEvents" />
      </VControl>
    </VField>
  </template>
</VDatePicker>

<!--/example-->
