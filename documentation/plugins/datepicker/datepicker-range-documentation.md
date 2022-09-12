---
state:
  range:
    start: 2021-02-08
    end: 2021-02-14
---

### DateRangepicker

`<VCalendar />` can be turned into a date range picker if needed. Check the
code example for more details about usage.

<!--code-->

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const range = reactive({
  start: new Date(),
  end: new Date(),
})
</script>

<template>
  <ClientOnly>
    <VDatePicker v-model="range" is-range color="green" trim-weeks>
      <template #default="{ inputValue, inputEvents }">
        <VField addons>
          <VControl>
            <VInput :value="inputValue.start" v-on="inputEvents.start" />
          </VControl>
          <VControl>
            <VButton static icon="feather:arrow-right" />
          </VControl>
          <VControl subcontrol>
            <VInput :value="inputValue.end" v-on="inputEvents.end" />
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
  <VDatePicker v-model="frontmatter.state.range" is-range color="green" trim-weeks>
    <template v-slot="{ inputValue, inputEvents }">
      <VField addons>
        <VControl expanded icon="feather:corner-down-right">
          <VInput :value="inputValue.start" v-on="inputEvents.start" />
        </VControl>
        <VControl>
          <VButton static>to</VButton>
        </VControl>
        <VControl expanded icon="feather:corner-right-up" subcontrol>
          <VInput :value="inputValue.end" v-on="inputEvents.end" />
        </VControl>
      </VField>
    </template>
  </VDatePicker>
</ClientOnly>

<!--/example-->
