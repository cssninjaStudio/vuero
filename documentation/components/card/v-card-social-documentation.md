### V-Card Social

The `<V-CardSocial />` component is a enhamcement and port to Vue
of the classic bulma card component, a classy and easy way
to display post-like content. The component has several props
to pass in the content you want to display.
Check the code example for more details.

<!--code-->

```vue
<template>
  <V-CardSocial
    title="Featured Tweet"
    network="twitter"
    avatar="/images/avatars/photos/19.jpg"
    username="Greta K."
    :hashtags="['#bulmaio', '#css', '#responsive']"
    icon="fab fa-twitter"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
    iaculis mauris.
  </V-CardSocial>
</template>
```

<!--/code-->
