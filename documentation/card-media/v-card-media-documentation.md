### VCardMedia

The `<VCardMedia />` component is a enhamcement and port to Vue
of the classic bulma card component, a classy and easy way
to display media content. The component has several props
to pass in the content you want to display.
Check the code example for more details.

<!--code-->

```vue
<template>
  <VCardMedia
    image="/demo/photos/apps/1.jpg"
    avatar="/demo/avatars/19.jpg"
    badge="/images/icons/flags/germany.svg"
    title="Greta K."
    subtitle="Sales Manager"
  >
    <p class="pb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ego vero isti, inquam,
      permitto. Id Sextilius factum negabat. Apparet statim, quae sint officia, quae
      actiones. Sed hoc sane concedamus...
    </p>

    <a class="action-link" tabindex="0">Read More</a>
  </VCardMedia>
</template>
```

<!--/code-->
