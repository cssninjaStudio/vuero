### Thin Switch

Vuero provides nice thin switch checkboxes when you need to display
such control in your forms. Use `thin` modifier on `VSwitchBlock` component.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <VField horizontal>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock thin />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock
        thin
        color="primary"
        :model-value="true"
      />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock
        thin
        color="success"
        :model-value="true"
      />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock
        thin
        color="info"
        :model-value="true"
      />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock
        thin
        color="warning"
        :model-value="true"
      />
    </VControl>
    <VControl subcontrol class="mr-2">
      <VSwitchBlock
        thin
        color="danger"
        :model-value="true"
      />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="primary" :model-value="true" />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="success" :model-value="true" />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="info" :model-value="true" />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="warning" :model-value="true" />
  </VControl>
  <VControl subcontrol class="mr-2">
    <VSwitchBlock thin color="danger" :model-value="true" />
  </VControl>
</VField>

<!--/example-->
