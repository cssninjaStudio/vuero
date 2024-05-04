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
const range = reactive({
  start: new Date(),
  end: new Date(),
})
</script>

<template>
  <ClientOnly>
    <VDatePicker
      v-model.range="range"
      color="green"
      trim-weeks
    >
      <template #default="{ inputValue, inputEvents }">
        <VField addons>
          <VControl>
            <input
              class="input v-input"
              type="text"
              :value="inputValue.start"
              v-on="inputEvents.start"
            >
          </VControl>
          <VControl>
            <VButton static icon="lucide:arrow-right" />
          </VControl>
          <VControl subcontrol>
            <input
              class="input v-input"
              type="text"
              :value="inputValue.end"
              v-on="inputEvents.end"
            >
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
  <VDatePicker v-model.range="frontmatter.state.range" color="green" trim-weeks>
    <template v-slot="{ inputValue, inputEvents }">
      <VField addons>
        <VControl expanded icon="lucide:corner-down-right">
          <input class="input v-input" type="text" :value="inputValue.start" v-on="inputEvents.start" />
        </VControl>
        <VControl>
          <VButton static>to</VButton>
        </VControl>
        <VControl expanded icon="lucide:corner-right-up" subcontrol>
          <input class="input v-input" type="text" :value="inputValue.end" v-on="inputEvents.end" />
        </VControl>
      </VField>
    </template>
  </VDatePicker>
</ClientOnly>

<!--/example-->
