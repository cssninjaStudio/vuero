### Input Loading

An input can be shown in a loading state. To apply that style,
simply add the `loading` prop to the wrapping `<V-Control />` component.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control loading>
      <input type="text" class="input" placeholder="Username" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control loading>
    <input
        type="text"
        class="input"
        placeholder="Username"
      />
  </V-Control>
</V-Field>

<!--/example-->
