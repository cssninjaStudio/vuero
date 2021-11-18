### VCardSocial

The `<VCardSocial />` component is a enhamcement and port to Vue
of the classic bulma card component, a classy and easy way
to display post-like content. The component has several props
to pass in the content you want to display.
Check the code example for more details.

<!--code-->

```vue
<template>
  <VCardSocial
    title="Featured Tweet"
    network="twitter"
    avatar="/demo/avatars/19.jpg"
    username="@gretak"
    :hashtags="['#bulmaio', '#css', '#responsive']"
    share-label="Retweet"
    like-label="Like"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
  </VCardSocial>
</template>
```

<!--/code-->
