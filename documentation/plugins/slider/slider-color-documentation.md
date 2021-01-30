---
value: 78
---

### Slider colors

The `<Slider />` component supports multiple colors. The default color is the
theme `$primary` color. Available color classes modifiers are: `is-slider-info`,
`is-slider-success`, `is-slider-warning`, `is-slider-danger`.

<!--code-->

```vue
<script setup lang="ts">
const value = 0
</script>

<template>
  <V-Field class="has-rounded-tooltip is-slider-info">
    <V-Control>
      <Slider v-model="value" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<div class="columns is-multiline">
  <div class="column is-6">
    <V-Field class="pt-6 px-4 has-rounded-tooltip is-slider-info">
        <V-Control>
            <Slider id="slider-example-1" v-model="frontmatter.value" />
        </V-Control>
    </V-Field>
  </div>
  <div class="column is-6">
    <V-Field class="pt-6 px-4 has-rounded-tooltip is-slider-success">
        <V-Control>
            <Slider id="slider-example-1" v-model="frontmatter.value" />
        </V-Control>
    </V-Field>
  </div>
  <div class="column is-6">
    <V-Field class="pt-6 px-4 has-rounded-tooltip is-slider-warning">
        <V-Control>
            <Slider id="slider-example-1" v-model="frontmatter.value" />
        </V-Control>
    </V-Field>
  </div>
  <div class="column is-6">
    <V-Field class="pt-6 px-4 has-rounded-tooltip is-slider-danger">
        <V-Control>
            <Slider id="slider-example-1" v-model="frontmatter.value" />
        </V-Control>
    </V-Field>
  </div>
</div>

<!--/example-->
