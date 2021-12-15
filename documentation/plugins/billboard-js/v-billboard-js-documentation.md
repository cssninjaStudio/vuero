---
state:
  flipped: false
---

### VBillboardJS

Vuero ships with the `<VBillboardJS />` component, a custom vue3 wrapper
for the [billboard.js](https://naver.github.io/billboard.js/) library.  
 Check the code for more details.

<!--code-->

```vue
<script setup lang="ts">
import { radar } from 'billboard.js'

import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

const billboardJsOptions = {
  data: {
    x: 'x',
    columns: [
      ['x', 'Data A', 'Data B', 'Data C', 'Data D', 'Data E'],
      ['data1', 330, 350, 200, 380, 150],
      ['data2', 130, 100, 30, 200, 80],
      ['data3', 230, 153, 85, 300, 250],
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.info,
      data4: themeColors.purple,
    },
    type: radar(),
    labels: true,
  },
  radar: {
    axis: {
      max: 400,
    },
    level: {
      depth: 4,
    },
    direction: {
      clockwise: true,
    },
  },
  size: {
    height: 280,
  },
  padding: {
    bottom: 20,
  },
  title: {
    text: 'Radar Chart',
    position: 'top-left',
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20,
    },
  },
  legend: {
    position: 'inset',
  },
}
</script>

<template>
  <VBillboardJS :options="billboardJsOptions" />
</template>
```

<!--/code-->
