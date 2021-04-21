### Font Awesome

`<V-Button />` components work well with Font Awesome Icons.
Add an icon name inside the `icon` prop to set a Font Awesome icon.
You can also create square and circle buttons with a single icon
using the `<V-IconButton />` component.
Please refer to markup for detailed examples.

<!--code-->

```vue
<template>
  <V-Buttons>
    <V-Button color="primary" icon="fab fa-twitter" elevated>
      Tweet Now
    </V-Button>
    <V-Button color="success" icon="fas fa-check" raised rounded>
      Save Changes
    </V-Button>
  </V-Buttons>
</template>
```

<!--/code-->

<!--example-->

<V-Buttons>
  <V-Button color="primary" icon="fab fa-twitter" elevated>
    Tweet Now
  </V-Button>
  <V-Button color="success" icon="fas fa-check" raised rounded>
    Save Changes
  </V-Button>
</V-Buttons>

<!--/example-->
