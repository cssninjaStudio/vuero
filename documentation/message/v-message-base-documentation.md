---
state:
  closed: 0
---

### VMessage

Vuero provides a `<VMessage />` component for messages that you can use
in your forms, for instance. The default message is displayed
on a grey background. Check the markup for more details.

<!--code-->

```vue
<template>
  <VMessage closable>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis placerat ut,
    porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum.
  </VMessage>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <VMessage @close="frontmatter.state.closed++" closable>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis
      placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
      Nullam gravida purus diam, et dictum.
    </VMessage>
  </div>
</div>

<!--/example-->
