---
popover1:
  avatar: /images/avatars/photos/19.jpg
  badge: /images/icons/flags/germany.svg
  username: Greta K.
  location: Los Angeles, CA
  position: Sales Manager
  bio: This is a nice user description that we can use as demo content.
popover2:
  avatar: /images/avatars/photos/8.jpg
  badge: /images/icons/flags/united-states-of-america.svg
  username: Erik K.
  location: Las Begas, NV
  position: Product Manager
  bio: This is a nice user description that we can use as demo content.
popover3:
  avatar: /images/avatars/photos/7.jpg
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
const popoverData = {
  avatar: '/images/avatars/photos/19.jpg',
  badge: '/images/icons/flags/germany.svg',
  username: 'Greta K.',
  location: 'Los Angeles, CA',
  position: 'Sales Manager',
  bio: 'This is a nice user description that we can use as demo content.',
}
</script>

<template>
  <tippy tippy="{interactive}" trigger="manual">
    <template #default="{ show }">
      <V-Avatar picture="/images/avatars/photos/19.jpg" @mouseenter="show" />
    </template>
    <template #content>
      <UserPopoverContent :tippy-state="popoverData" />
    </template>
  </tippy>
</template>
```

<!--/code-->

<!--example-->

<tippy trigger="manual" tippy="{interactive}" class="mx-1">
  <template #default="{ show }">
    <V-Avatar picture="/images/avatars/photos/19.jpg" @mouseenter="show" />
  </template>
  <template #content>
    <UserPopoverContent :tippyState="frontmatter.popover1" />
  </template>
</tippy>

<tippy trigger="manual" tippy="{interactive}" class="mx-1">
  <template #default="{ show }">
    <V-Avatar picture="/images/avatars/photos/8.jpg" @mouseenter="show" />
  </template>
  <template #content>
    <UserPopoverContent :tippyState="frontmatter.popover2" />
  </template>
</tippy>

<tippy trigger="manual" tippy="{interactive}" class="mx-1">
  <template #default="{ show }">
    <V-Avatar picture="/images/avatars/photos/7.jpg" @mouseenter="show" />
  </template>
  <template #content>
    <UserPopoverContent :tippyState="frontmatter.popover3" />
  </template>
</tippy>

<!--/example-->
