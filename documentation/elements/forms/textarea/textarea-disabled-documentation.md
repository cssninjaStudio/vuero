### Disabled

A textarea can be shown in a disabled state. For that, you need to wrap it
inside a `<V-Control />` component. Simply add the `disabled` attribute
to the target textarea element.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control>
      <textarea
        class="textarea"
        rows="4"
        placeholder="A longer message..."
        disabled
      >
      </textarea>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <textarea class="textarea" 
        rows="4" 
        placeholder="A longer message..."
        disabled>
    </textarea>
  </V-Control>
</V-Field>

<!--/example-->
