---
state:
  date: 2021-02-28T16:20:00.000Z
---

### DateTimepicker

`<VCalendar />` can be turned into a date range picker if needed. Check the
code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const date = ref(new Date())
</script>

<template>
  <VDatePicker v-model="date" mode="dateTime">
    <template #default="{ inputValue, inputEvents }">
      <VField>
        <VControl icon="feather:calendar">
          <VInput :value="inputValue" v-on="inputEvents" />
        </VControl>
      </VField>
    </template>
  </VDatePicker>
</template>
```

<!--/code-->

<!--example-->

<VDatePicker v-model="frontmatter.state.date" color="green" mode="dateTime">
  <template #default="{ inputValue, inputEvents }">
    <VField>
      <VControl icon="feather:calendar">
        <VInput :value="inputValue" v-on="inputEvents" />
      </VControl>
    </VField>
  </template>
</VDatePicker>

<!--/example-->
