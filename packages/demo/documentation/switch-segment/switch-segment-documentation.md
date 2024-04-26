### VSwitchSegment

Vuero provides nicely styled switch segment when you need to
display such control in your forms. Vuero `VSwitchSegment` component have
several color modififers. Available modifiers are `primary`, `success`,
`info`, `warning` and `danger`.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <VField horizontal>
    <VControl subcontrol>
      <VSwitchSegment />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="primary" :model-value="true" />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="success" :model-value="true" />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="info" :model-value="true" />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="warning" :model-value="true" />
    </VControl>
    <VControl subcontrol>
      <VSwitchSegment color="danger" :model-value="true" />
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField horizontal>
  <VControl subcontrol>
    <VSwitchSegment />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="primary" :model-value="true" />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="success" :model-value="true" />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="info" :model-value="true" />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="warning" :model-value="true" />
  </VControl>
  <VControl subcontrol>
    <VSwitchSegment color="danger" :model-value="true" />
  </VControl>
</VField>

<!--/example-->
