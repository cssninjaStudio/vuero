### Centered align

You can adjust the `<VBlock />` component flex alignment
using the `center` prop. This will apply the `flex` property
`align-items: center;` to the component.

<!--code-->

```vue
<template>
  <VBlock title="Anna B." subtitle="UX Designer" center>
    <template #icon>
      <VAvatar
        size="medium"
        picture="/demo/avatars/19.jpg"
        badge="/images/icons/flags/germany.svg"
      />
    </template>
    <template #action>
      <VButton color="primary" elevated>View</VButton>
    </template>
  </VBlock>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
  <div class="control">
    <div class="l-card">
      <VBlock title="Anna B." subtitle="UX Designer" center>
        <template #icon>
          <VAvatar
            size="medium"
            picture="/demo/avatars/19.jpg"
            badge="/images/icons/flags/germany.svg"
          />
        </template>
        <template #action>
          <VButton color="primary" elevated>View</VButton>
        </template>
      </VBlock>
    </div>
  </div>
</div>

<!--/example-->
