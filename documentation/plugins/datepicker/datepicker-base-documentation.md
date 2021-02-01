---
state:
  date:
---

### V-Calendar Datepicker

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Summum ením bonum exposuit vacuitatem doloris; Haeret in salebra.
Eademne, quae restincta siti? Quid, quod res alia tota est?

<!--code-->

```vue
<script setup lang="ts">
import { ref } from vue

const date = ref(null)
</script>

<template>
  <v-date-picker v-model="date">
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
