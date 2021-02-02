---
state:
  date: 2021-02-28
---

### Datepicker

Vuero ships with the `<V-Calendar />` component, a multipurpose calendar /
datepicker component for your forms. Below is a basic example. Please check the
[plugin documentation](https://vcalendar.io/) for more details
about usage.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from vue

const date = ref(null)
</script>

<template>
  <v-date-picker v-model="frontmatter.state.date" color="green" trim-weeks>
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

<v-date-picker v-model="frontmatter.state.date" color="green" trim-weeks>
  <template #default="{ inputValue, inputEvents }">
    <V-Field>
      <V-Control>
        <input class="input" :value="inputValue" v-on="inputEvents" />
      </V-Control>
    </V-Field>
  </template>
</v-date-picker>

<!--/example-->
