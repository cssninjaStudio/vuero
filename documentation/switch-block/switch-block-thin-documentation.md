### Thin Switch

Vuero provides nice thin switch checkboxes when you need to display
such control in your forms. Use `thin` modifier on `V-SwitchBlock` component.
Please refer to the markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Field grouped>
    <V-Control>
      <V-SwitchBlock thin />
    </V-Control>
    <V-Control>
      <V-SwitchBlock thin color="primary" checked />
    </V-Control>
    <V-Control>
      <V-SwitchBlock thin color="success" checked />
    </V-Control>
    <V-Control>
      <V-SwitchBlock thin color="info" checked />
    </V-Control>
    <V-Control>
      <V-SwitchBlock thin color="warning" checked />
    </V-Control>
    <V-Control>
      <V-SwitchBlock thin color="danger" checked />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
  <V-Control>
    <V-SwitchBlock thin />
  </V-Control>
  <V-Control>
    <V-SwitchBlock thin color="primary" checked />
  </V-Control>
  <V-Control>
    <V-SwitchBlock thin color="success" checked />
  </V-Control>
  <V-Control>
    <V-SwitchBlock thin color="info" checked />
  </V-Control>
  <V-Control>
    <V-SwitchBlock thin color="warning" checked />
  </V-Control>
  <V-Control>
    <V-SwitchBlock thin color="danger" checked />
  </V-Control>
</V-Field>

<!--/example-->
