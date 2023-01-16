---
state:
  date: 2021-02-28
---

### Datepicker

Vuero ships with the `<VCalendar />` component, a multipurpose calendar /
datepicker component for your forms. Below is a basic example. Please check the
[plugin documentation](https://vcalendar.io/) for more details
about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const date = ref(null)
</script>

<template>
  <ClientOnly>
    <VDatePicker v-model="date" color="green" trim-weeks>
      <template #default="{ inputValue, inputEvents }">
        <VField>
          <VControl icon="feather:calendar">
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
  <VDatePicker v-model="frontmatter.state.date" color="green" trim-weeks>
    <template #default="{ inputValue, inputEvents }">
      <VField>
        <VControl icon="feather:calendar">
          <input class="input v-input" type="text" :value="inputValue" v-on="inputEvents" />
        </VControl>
      </VField>
    </template>
  </VDatePicker>
</ClientOnly>

<!--/example-->
