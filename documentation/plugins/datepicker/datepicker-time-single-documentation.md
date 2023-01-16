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
  <ClientOnly>
    <VDatePicker v-model="date" mode="dateTime" is24hr>
      <template #default="{ inputValue, inputEvents }">
        <VField>
          <VControl icon="feather:clock">
            <input
              class="input v-input"
              type="text"
              :value="inputValue"
              v-on="inputEvents"
            />
          </VControl>
        </VField>
      </template>
    </VDatePicker>
  </ClientOnly>
</template>
```

<!--/code-->

<!--example-->

<ClientOnly>
  <VDatePicker v-model="frontmatter.state.date" color="green" mode="time" is24hr>
    <template #default="{ inputValue, inputEvents }">
      <VField>
        <VControl icon="feather:clock">
          <input class="input v-input" type="text" :value="inputValue" v-on="inputEvents" />
        </VControl>
      </VField>
    </template>
  </VDatePicker>
</ClientOnly>

<!--/example-->
