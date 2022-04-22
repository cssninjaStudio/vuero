---
selectSlotOptions:
  - value: javascript
    name: Javascript
    icon: /images/icons/stacks/js.svg
  - value: reactjs
    name: ReactJS
    icon: /images/icons/stacks/reactjs.svg
  - value: vuejs
    name: VueJS
    icon: /images/icons/stacks/vuejs.svg
  - value: angular
    name: Angular
    icon: /images/icons/stacks/angular.svg
  - value: android
    name: Android
    icon: /images/icons/stacks/android.svg
  - value: html5
    name: Html5
    icon: /images/icons/stacks/html5.svg
  - value: css3
    name: CSS3
    icon: /images/icons/stacks/css3.svg
selectSlotValue:
---

### Image with search

The `<Multiselect />` component can be used with a custom template to show
images for options and selected option. 2 CSS modifiers are available for
images radius: `is-curved` and `is-rounded`.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selectSlotValue = ref()
const selectSlotOptions = [
  {
    value: 'javascript',
    name: 'Javascript',
    icon: '/images/icons/stacks/js.svg',
  },
  {
    value: 'reactjs',
    name: 'ReactJS',
    icon: '/images/icons/stacks/reactjs.svg',
  },
  {
    value: 'vuejs',
    name: 'VueJS',
    icon: '/images/icons/stacks/vuejs.svg',
  },
]
</script>

<template>
  <VField v-slot="{ id }">
    <VControl>
      <Multiselect
        v-model="selectSlotValue"
        :attrs="{ id }"
        placeholder="Select a language"
        label="name"
        :options="selectSlotOptions"
        :searchable="true"
        track-by="name"
        :max-height="145"
      >
        <template #singlelabel="{ value }">
          <div class="multiselect-single-label">
            <img class="select-label-icon" :src="value.icon" alt="" />
            {{ value.name }}
          </div>
        </template>
        <template #option="{ option }">
          <img class="select-option-icon" :src="option.icon" alt="" />
          {{ option.name }}
        </template>
      </Multiselect>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotValue"
          placeholder="Select a language"
          label="name"
          :options="frontmatter.selectSlotOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon" :src="value.icon" /> 
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon" :src="option.icon" /> 
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-select is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotValue"
          placeholder="Select a language"
          label="name"
          :options="frontmatter.selectSlotOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon is-curved" :src="value.icon" /> 
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon is-curved" :src="option.icon" /> 
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-image-select is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotValue"
          placeholder="Select a language"
          label="name"
          :options="frontmatter.selectSlotOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <img class="select-label-icon is-rounded" :src="value.icon" />
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <img class="select-option-icon is-rounded" :src="option.icon" />
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
</div>

<!--/example-->
