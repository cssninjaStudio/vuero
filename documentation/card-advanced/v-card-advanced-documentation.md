### VCardAdvanced

Vuero ships with a `<VCardAdvanced />` component that features a card header,
body, and footer, to display any type of content.
Card header and footer have both a left and right `slots` where you
can insert your UI elements/components. You can also control the card radius
using the `radius` prop.

<!--code-->

```vue
<template>
  <VCardAdvanced>
    <template #header-left>
      <VBlock
        title="Anna B."
        subtitle="UX Designer"
        center
      >
        <template #icon>
          <VAvatar
            picture="https://media.cssninja.io/content/avatars/19.jpg"
            badge="/images/icons/flags/germany.svg"
          />
        </template>
      </VBlock>
    </template>
    <template #header-right>
      <VAvatarStack
        :avatars="[
          {
            id: 5,
            picture: 'https://media.cssninja.io/content/avatars/12.jpg',
            initials: 'JS',
            color: 'info',
          },
          {
            id: 22,
            picture: 'https://media.cssninja.io/content/avatars/22.jpg',
            initials: 'JH',
            color: 'info',
          },
          {
            id: 40,
            picture: 'https://media.cssninja.io/content/avatars/40.jpg',
            initials: 'SM',
            color: 'h-purple',
          },
          {
            id: 3,
            picture: 'https://media.cssninja.io/content/avatars/5.jpg',
            initials: 'ML',
            color: 'danger',
          },
        ]"
        :limit="3"
        size="small"
      />
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam praeteritis? At
        multis se probavit. Quoniam, si dis placet, ab Epicuro loqui discimus. Et ille
        ridens.
      </p>
    </template>
    <template #footer-left>
      <div class="tags">
        <VTag
          label="Sales"
          color="solid"
          rounded
        />
        <VTag
          label="Business"
          color="solid"
          rounded
        />
      </div>
    </template>
    <template #footer-right>
      <VButton color="primary" raised>
        Action
      </VButton>
    </template>
  </VCardAdvanced>
</template>
```

<!--/code-->
