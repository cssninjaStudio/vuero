### Basic Datatable

Because Vue 3 is still the new thing, there are a very few datatable plugins
available. Therefore, we wrote a custom Vue wrapper for the [Simple Datatables](https://github.com/fiduswriter/Simple-DataTables)
plugin. The example below shows a text datatable. Check the code for more
details.

<!--code-->

```vue
<script setup lang="ts">
const options = {
  searchable: false,
  sortable: false,
  perPageSelect: false,
  data: {
    headings: ['Name', 'Ext.', 'City', 'Start Date', 'Completion'],
    data: [
      ['Unity Pugh', 9958, 'Curicó', '2005/02/11', '37%'],
      ['Theodore Duran', 8971, 'Dhanbad', '1999/04/07', '97%'],
      ['Kylie Bishop', 3147, 'Norman', '2005/09/08', '63%'],
      ['Willow Gilliam', 3497, 'Amqui', '2009/29/11', '30%'],
      ['Blossom Dickerson', 5018, 'Kempten', '2006/11/09', '17%'],
      ['Elliott Snyder', 3925, 'Enines', '2006/03/08', '57%'],
      ['Castor Pugh', 9488, 'Neath', '2014/23/12', '93%'],
      ['Pearl Carlson', 6231, 'Cobourg', '2014/31/08', '100%'],
      ['Deirdre Bridges', 1579, 'Eberswalde-Finow', '2014/26/08', '44%'],
    ],
  },
}
</script>

<template>
  <VSimpleDatatables :options="options" />
</template>
```

<!--/code-->
