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
import { reactive } from vue

const date = reactive({
  start: new Date(),
  end: new Date(),
})
</script>

<template>
  <v-date-picker v-model="range" is-range color="green" trim-weeks>
    <template #default="{ inputValue, inputEvents }">
      <VField addons>
        <VControl>
          <input
            :value="inputValue.start"
            class="input"
            v-on="inputEvents.start"
          />
        </VControl>
        <VControl>
          <a class="button is-static"
            ><i class="iconify" data-icon="feather:arrow-right"></i
          ></a>
        </VControl>
        <VControl>
          <input :value="inputValue.end" class="input" v-on="inputEvents.end" />
        </VControl>
      </VField>
    </template>
  </v-date-picker>
</template>
```

<!--/code-->

<!--example-->

<v-date-picker v-model="frontmatter.state.range" is-range color="green" trim-weeks>
  <template v-slot="{ inputValue, inputEvents }">
    <VField addons>
      <VControl>
        <input
          :value="inputValue.start"
          v-on="inputEvents.start"
          class="input"
        />
      </VControl>
      <VControl>
        <a class="button is-static"><i class="iconify" data-icon="feather:arrow-right"></i></a>
      </VControl>
      <VControl>
        <input
          :value="inputValue.end"
          v-on="inputEvents.end"
          class="input"
        />
      </VControl>
    </VField>
  </template>
</v-date-picker>

<!--/example-->
