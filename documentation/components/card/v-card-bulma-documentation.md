### V-Card Bulma

The `<V-CardBulma />` component is a enhamcement and port to Vue of
the classic bulma card component, a classy and easy way to display
post-like content. The component has several props to pass in
the content you want to display. Check the code example for more details.

<!--code-->

```vue
<template>
  <V-CardBulma
    image="/images/photo/demo/apps/2.png"
    avatar="/images/avatars/photos/23.jpg"
    badge="/images/icons/flags/united-states-of-america.svg"
    title="Irina V."
    subtitle="Project Manager"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ego vero isti, inquam, permitto. Id Sextilius factum
                    negabat. Apparet statim, quae sint officia, quae actiones.
                    Sed hoc sane concedamus..."
  >
    <a class="action-link">Read More</a>
  </V-CardBulma>
</template>
```

<!--/code-->
