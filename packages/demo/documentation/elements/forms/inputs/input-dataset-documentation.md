---
state:
  color: '#8b5cf6'
  cake: ''
  date: ''
---

### Autocomplete using native datalist

You can use native [`datalist`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
let your browser handle the autocomplete for you. Just add a `list` attribute
to your input and add the `datalist` element with the `id` that matches the `list` attribute.

This is a great way to provide a list of options to your users.

<!--code-->

```vue
<script setup lang="ts">

const color = ref('#8b5cf6')
const cake = ref('')
const date = ref('')
</script>

<template>
  <div class="is-flex is-flex-wrap-wrap" :style="{ gap: '1rem' }">
    <VField>
      <VControl :style="{ width: '70px' }">
        <VInput
          v-model="color"
          list="colors-list"
          type="color"
          placeholder="Pick a color"
        />
        <datalist id="colors-list">
          <option value="#84cc16" />
          <option value="#22c55e" />
          <option value="#0ea5e9" />
          <option value="#6366f1" />
          <option value="#8b5cf6" />
          <option value="#d946ef" />
          <option value="#f43f5e" />
          <option value="#facc15" />
          <option value="#fb923c" />
          <option value="#9ca3af" />
        </datalist>
      </VControl>
    </VField>
    <VField>
      <VControl class="is-flex-grow-1">
        <VInput
          v-model="cake"
          list="cake-list"
          type="text"
          placeholder="Choose a recipe"
        />
        <datalist id="cake-list">
          <option value="Chocolate cake" />
          <option value="Vanilla cake" />
          <option value="Red velvet cake" />
          <option value="Carrot cake" />
          <option value="Lemon cake" />
          <option value="Strawberry cake" />
          <option value="Coconut cake" />
          <option value="Black forest cake" />
          <option value="Pineapple upside-down cake" />
          <option value="Marble cake" />
          <option value="Funfetti cake" />
          <option value="Coffee cake" />
          <option value="Tiramisu cake" />
          <option value="Banana cake" />
          <option value="Raspberry cake" />
          <option value="Oreo cake" />
          <option value="German chocolate cake" />
          <option value="Pumpkin cake" />
          <option value="Blueberry cake" />
          <option value="Almond cake" />
        </datalist>
      </VControl>
    </VField>
    <VField>
      <VControl class="is-flex-grow-1">
        <VInput
          v-model="date"
          list="times-list"
          type="time"
          placeholder="Pick an hour"
        />
        <datalist id="times-list">
          <option value="12:00" />
          <option value="13:00" />
          <option value="14:00" />
        </datalist>
      </VControl>
    </VField>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div
  class="is-flex is-flex-wrap-wrap"
  :style="{ gap: '1rem' }"
>
  <VField>
    <VControl :style="{ width: '70px' }">
      <VInput
        v-model="frontmatter.state.color"
        list="colors-list"
        type="color"
        placeholder="Pick a color"
      />
      <datalist id="colors-list">
        <option value="#84cc16"></option>
        <option value="#22c55e"></option>
        <option value="#0ea5e9"></option>
        <option value="#6366f1"></option>
        <option value="#8b5cf6"></option>
        <option value="#d946ef"></option>
        <option value="#f43f5e"></option>
        <option value="#facc15"></option>
        <option value="#fb923c"></option>
        <option value="#9ca3af"></option>
      </datalist>
    </VControl>
  </VField>
  <VField>
    <VControl class="is-flex-grow-1">
      <VInput
        v-model="frontmatter.state.cake"
        list="cake-list"
        type="text"
        placeholder="Choose a recipe"
      />
      <datalist id="cake-list">
        <option value="Chocolate cake"></option>
        <option value="Vanilla cake"></option>
        <option value="Red velvet cake"></option>
        <option value="Carrot cake"></option>
        <option value="Lemon cake"></option>
        <option value="Strawberry cake"></option>
        <option value="Coconut cake"></option>
        <option value="Black forest cake"></option>
        <option value="Pineapple upside-down cake"></option>
        <option value="Marble cake"></option>
        <option value="Funfetti cake"></option>
        <option value="Coffee cake"></option>
        <option value="Tiramisu cake"></option>
        <option value="Banana cake"></option>
        <option value="Raspberry cake"></option>
        <option value="Oreo cake"></option>
        <option value="German chocolate cake"></option>
        <option value="Pumpkin cake"></option>
        <option value="Blueberry cake"></option>
        <option value="Almond cake"></option>
      </datalist>
    </VControl>
  </VField>
  <VField>
    <VControl class="is-flex-grow-1">
      <VInput
        v-model="frontmatter.state.date"
        list="times-list"
        type="time"
        placeholder="Pick an hour"
      />
      <datalist id="times-list">
        <option value="12:00"></option>
        <option value="13:00"></option>
        <option value="14:00"></option>
      </datalist>
    </VControl>
  </VField>
</div>

<!--/example-->
