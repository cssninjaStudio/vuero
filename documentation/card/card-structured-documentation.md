---
disable_example: true
---

### Structured Card

Vuero cards can have a small flex header where you can put
come content. Check the markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Card radius="small" elevated>
    <div class="card-head">
      <V-Block
        title="Greta K."
        subtitle="Sales Manager"
        center
        class="no-margin"
      >
        <template #icon>
          <tippy
            class="has-help-cursor"
            interactive
            :offset="[0, 10]"
            placement="top-start"
          >
            <V-Avatar
              picture="/demo/avatars/19.jpg"
              badge="/images/icons/flags/germany.svg"
            />
            <template #content>
              <UserPopoverContent
                :user="{
                  id: 19,
                  avatar: '/demo/avatars/19.jpg',
                  badge: '/images/icons/flags/germany.svg',
                  username: 'Greta K.',
                  fullName: 'Greta Kroppfer',
                  initials: 'GK',
                  color: 'h-yellow',
                  location: 'Los Angeles, CA',
                  position: 'Sales Manager',
                  bio: 'This is a nice user description that we can use as demo content.',
                }"
              />
            </template>
          </tippy>
        </template>
      </V-Block>

      <UserCardDropdown />
    </div>

    <div class="card-inner">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
        praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
        loqui discimus. Et ille ridens.
      </p>
    </div>
  </V-Card>
</template>
```

<!--/code-->
