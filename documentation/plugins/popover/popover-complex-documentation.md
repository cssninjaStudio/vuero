---
user1:
  avatar: /demo/avatars/19.jpg
  badge: /images/icons/flags/germany.svg
  username: Greta K.
  location: Los Angeles, CA
  position: Sales Manager
  bio: This is a nice user description that we can use as demo content.
user2:
  avatar: /images/avatars/svg/vuero-1.svg
  badge: /images/icons/flags/united-states-of-america.svg
  username: Erik K.
  location: Las Begas, NV
  position: Product Manager
  bio: This is a nice user description that we can use as demo content.
user3:
  avatar: /demo/avatars/7.jpg
  badge: /images/icons/flags/united-states-of-america.svg
  username: Alice C.
  location: Los Angeles, CA
  position: Software Engineer
  bio: This is a nice user description that we can use as demo content.
---

### Profile popover

Popovers can be used to display more complex information like a user profile.
We-ve provided an example that uses an internal component to display a user
profile. You can also make the popover interactive with the `interactive`
prop.

<!--code-->

```vue
<script setup lang="ts">
const user = {
  avatar: '/demo/avatars/19.jpg',
  badge: '/images/icons/flags/germany.svg',
  username: 'Greta K.',
  location: 'Los Angeles, CA',
  position: 'Sales Manager',
  bio: 'This is a nice user description that we can use as demo content.',
}
</script>

<template>
  <Tippy class="has-help-cursor" interactive :offset="[0, 30]">
    <VAvatar :picture="user.avatar" />
    <template #content>
      <UserPopoverContent :user="user" />
    </template>
  </Tippy>
</template>
```

<!--/code-->

<!--example-->

<div>
  <Tippy class="mx-1" interactive :offset="[0, 30]">
    <VAvatar :picture="frontmatter.user1.avatar" />
    <template #content>
      <UserPopoverContent :user="frontmatter.user1" />
    </template>
  </Tippy>

  <Tippy class="mx-1" interactive :offset="[0, 30]">
    <VAvatar :picture="frontmatter.user2.avatar" />
    <template #content>
      <UserPopoverContent :user="frontmatter.user2" />
    </template>
  </Tippy>

  <Tippy class="mx-1" interactive :offset="[0, 30]">
    <VAvatar :picture="frontmatter.user3.avatar" />
    <template #content>
      <UserPopoverContent :user="frontmatter.user3" />
    </template>
  </Tippy>
</div>

<!--/example-->
