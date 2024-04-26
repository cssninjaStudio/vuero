### Button group

You can easily align `<VButton />` components and group them together
by wrapping them inside a `<VButtons />` element.
You can mix any button styles.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton icon="lucide:eye">
      View
    </VButton>
    <VButton icon="lucide:edit-2">
      View
    </VButton>
    <VButton
      color="primary"
      icon="fas fa-check"
      elevated
    >
      Approve
    </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton icon="lucide:eye">
    View
  </VButton>
  <VButton icon="lucide:edit-2">
    View
  </VButton>
  <VButton color="primary" icon="fas fa-check" elevated>
    Approve
  </VButton>
</VButtons>

<!--/example-->
