---
state:
  closed: 0
---

### V-Message

Vuero provides a `<V-Message />` component for messages that you can use
in your forms, for instance. The default message is displayed
on a grey background. Check the markup for more details.

<!--code-->

```vue
<template>
  <V-Message closable>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis
    placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
    Nullam gravida purus diam, et dictum.
  </V-Message>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <V-Message @close="frontmatter.state.closed++" closable>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quis
      placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
      Nullam gravida purus diam, et dictum.
    </V-Message>
  </div>
</div>

<!--/example-->
