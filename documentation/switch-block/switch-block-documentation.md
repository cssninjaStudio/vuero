### VSwitchBlock

Vuero provides nicely styled switch checkboxes when you need to
display such control in yoour forms. Vuero `VSwitchBlock` component have
several color modififers. Available modifiers are `primary`, `success`,
`info`, `warning` and `danger`.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <VField horizontal>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="primary" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="success" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="info" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="warning" checked />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock color="danger" checked />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="primary" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="success" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="info" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="warning" checked />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock color="danger" checked />
  </VControl>
</VField>

<!--/example-->
