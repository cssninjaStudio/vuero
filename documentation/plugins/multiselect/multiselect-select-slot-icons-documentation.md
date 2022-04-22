---
selectSlotIconOptions:
  - value: logistics
    name: Logistics
    icon: fas fa-box
  - value: business
    name: Business
    icon: fas fa-briefcase
  - value: relaxation
    name: Relaxation
    icon: fas fa-couch
  - value: development
    name: Development
    icon: fas fa-code
  - value: travel
    name: Travel
    icon: fas fa-compass
  - value: discussions
    name: Discussions
    icon: fas fa-comment-alt
  - value: shopping
    name: Shopping
    icon: fas fa-shopping-bag
selectSlotIconValue: []
---

### Icons with search

The `<Multiselect />` component can be used with a custom template to show
icons for options and selected option. Supports searching the values.

<!--code-->

```vue
<script setup lang="ts">
const selectSlotIconValue
const selectSlotIconOptions = [
  {
    name: 'Logistics',
    value: 'logistics',
    icon: 'fas fa-box',
  },
  {
    name: 'Business',
    value: 'business',
    icon: 'fas fa-briefcase',
  },
  {
    name: 'Relaxation',
    value: 'relaxation',
    icon: 'fas fa-couch',
  },
  {
    name: 'Development',
    value: 'development',
    icon: 'fas fa-code',
  },
  {
    name: 'Travel',
    value: 'travel',
    icon: 'fas fa-compass',
  },
  {
    name: 'Discussions',
    value: 'discussions',
    icon: 'fas fa-comment-alt',
  },
  {
    name: 'Shopping',
    value: 'shopping',
    icon: 'fas fa-shopping-bag',
  },
]
</script>

<template>
  <VField v-slot="{ id }" class="is-icon-select">
    <VControl>
      <Multiselect
        v-model="selectSlotIconValue"
        :attrs="{ id }"
        placeholder="Select a member"
        label="name"
        :options="selectSlotIconOptions"
        :searchable="true"
        track-by="name"
        :max-height="145"
      >
        <template #singlelabel="{ value }">
          <div class="multiselect-single-label">
            <div class="select-label-icon-wrap">
              <i :class="value.icon"></i>
            </div>
            <span class="select-label-text">
              {{ value.name }}
            </span>
          </div>
        </template>
        <template #option="{ option }">
          <div class="select-option-icon-wrap">
            <i :class="option.icon"></i>
          </div>
          <span class="select-option-text">
            {{ option.name }}
          </span>
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
    <VField v-slot="{ id }" class="is-icon-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotIconValue"
          placeholder="Select a member"
          label="name"
          :options="frontmatter.selectSlotIconOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <div class="select-label-icon-wrap">
                <i :class="value.icon"></i>
              </div>
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <div class="select-option-icon-wrap">
                <i :class="option.icon"></i>
              </div>
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-icon-select is-curved-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotIconValue"
          placeholder="Select a member"
          label="name"
          :options="frontmatter.selectSlotIconOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <div class="select-label-icon-wrap">
                <i :class="value.icon"></i>
              </div>
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <div class="select-option-icon-wrap">
                <i :class="option.icon"></i>
              </div>
            <span class="select-option-text">
              {{ option.name }}
            </span>  
          </template>
        </Multiselect>
      </VControl>
    </VField>
  </div>
  <div class="column is-4">
    <VField v-slot="{ id }" class="is-icon-select is-rounded-select">
      <VControl>
        <Multiselect
          :attrs="{ id }"
          v-model="frontmatter.selectSlotIconValue"
          placeholder="Select a member"
          label="name"
          :options="frontmatter.selectSlotIconOptions"
          :searchable="true"
          trackBy="name"
          :maxHeight="145"
        >
          <template v-slot:singlelabel="{ value }">
            <div class="multiselect-single-label">
              <div class="select-label-icon-wrap">
                <i :class="value.icon"></i>
              </div>
              <span class="select-label-text">
                {{ value.name }}
              </span>
            </div>
          </template>
          <template v-slot:option="{ option }">
            <div class="select-option-icon-wrap">
                <i :class="option.icon"></i>
              </div>
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
