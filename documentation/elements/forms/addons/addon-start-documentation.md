### Start Addon

Inputs can have addons if you need to show contextual information.
You can attach an addon at the start of a `<V-Field />` with the `addons`
prop. See markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Field addons>
    <V-Control>
      <a class="button is-static">+1</a>
    </V-Control>
    <V-Control expanded>
      <input type="text" class="input" placeholder="Username" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field addons>
    <V-Control>
        <a class="button is-static">+1</a>
    </V-Control>
    <V-Control expanded>
        <input
            type="text"
            class="input"
            placeholder="Username"
        />
    </V-Control>
</V-Field>

<!--/example-->
