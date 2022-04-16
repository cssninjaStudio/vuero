### Thin Switch

Vuero provides nice thin switch checkboxes when you need to display
such control in your forms. Use `thin` modifier on `VSwitchBlock` component.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <VField grouped>
    <VControl subcontrol>
      <VSwitchBlock thin />
    </VControl>
    <VControl subcontrol>
      <VSwitchBlock thin color="primary" checked />
    </VControl>
    <VControl subcontrol>
      <VSwitchBlock thin color="success" checked />
    </VControl>
    <VControl subcontrol>
      <VSwitchBlock thin color="info" checked />
    </VControl>
    <VControl subcontrol>
      <VSwitchBlock thin color="warning" checked />
    </VControl>
    <VControl subcontrol>
      <VSwitchBlock thin color="danger" checked />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped>
  <VControl subcontrol>
    <VSwitchBlock thin />
  </VControl>
  <VControl subcontrol>
    <VSwitchBlock thin color="primary" checked />
  </VControl>
  <VControl subcontrol>
    <VSwitchBlock thin color="success" checked />
  </VControl>
  <VControl subcontrol>
    <VSwitchBlock thin color="info" checked />
  </VControl>
  <VControl subcontrol>
    <VSwitchBlock thin color="warning" checked />
  </VControl>
  <VControl subcontrol>
    <VSwitchBlock thin color="danger" checked />
  </VControl>
</VField>

<!--/example-->
