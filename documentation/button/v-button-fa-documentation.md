### Font Awesome

`<VButton />` components work well with Font Awesome Icons.
Add an icon name inside the `icon` prop to set a Font Awesome icon.
You can also create square and circle buttons with a single icon
using the `<VIconButton />` component.
Please refer to markup for detailed examples.

<!--code-->

```vue
<template>
  <VButtons>
    <VButton color="primary" icon="fab fa-twitter" elevated> Tweet Now </VButton>
    <VButton color="success" icon="fas fa-check" raised rounded> Save Changes </VButton>
  </VButtons>
</template>
```

<!--/code-->

<!--example-->

<VButtons>
  <VButton color="primary" icon="fab fa-twitter" elevated>
    Tweet Now
  </VButton>
  <VButton color="success" icon="fas fa-check" raised rounded>
    Save Changes
  </VButton>
</VButtons>

<!--/example-->
