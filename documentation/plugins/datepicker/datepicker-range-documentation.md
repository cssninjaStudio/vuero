---
state:
  range:
    start:
    end:
---

### V-Calendar Range Datepicker

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Summum ením bonum exposuit vacuitatem doloris; Haeret in salebra.
Eademne, quae restincta siti? Quid, quod res alia tota est?

<!--code-->

```vue
<script setup lang="ts">
import { reactive } from vue

const date = reactive({
  start: null,
  end: null,
})
</script>

<template>
  <v-date-picker v-model="range" is-range>
    <template #default="{ inputValue, inputEvents }">
      <V-Field addons>
        <V-Control>
          <input
            :value="inputValue.start"
            class="input"
            v-on="inputEvents.start"
          />
        </V-Control>
        <V-Control>
          <a class="button is-static"
            ><i class="iconify" data-icon="feather:arrow-right"></i
          ></a>
        </V-Control>
        <V-Control>
          <input :value="inputValue.end" class="input" v-on="inputEvents.end" />
        </V-Control>
      </V-Field>
    </template>
  </v-date-picker>
</template>
```

<!--/code-->

<!--example-->

<v-date-picker v-model="frontmatter.state.range" is-range>
  <template v-slot="{ inputValue, inputEvents }">
    <V-Field addons>
      <V-Control>
        <input
          :value="inputValue.start"
          v-on="inputEvents.start"
          class="input"
        />
      </V-Control>
      <V-Control>
        <a class="button is-static"><i class="iconify" data-icon="feather:arrow-right"></i></a>
      </V-Control>
      <V-Control>
        <input
          :value="inputValue.end"
          v-on="inputEvents.end"
          class="input"
        />
      </V-Control>
    </V-Field>
  </template>
</v-date-picker>

<!--/example-->
