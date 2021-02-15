---
disable_example: true
---

### Structured Card

Vuero cards can have a small flex header where you can put
come content. Check the markup for more details about usage.

<!--code-->

```vue
<template>
  <div class="r-card is-raised">
    <div class="card-head">
      <div class="media-flex-center no-margin">
        <div class="v-avatar">
          <img
            class="avatar"
            src="/images/avatars/photos/19.jpg"
            alt=""
            data-user-popover="17"
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
          <img
            class="badge"
            src="/images/icons/flags/germany.svg"
            alt=""
            @error.once="
              $event.target.src = 'https://via.placeholder.com/150x150'
            "
          />
        </div>
        <div class="flex-meta">
          <span>Greta K.</span>
          <span>Sales Manager</span>
        </div>
      </div>
      <UserCardDropdown />
    </div>
    <div class="card-inner">
      <p>
        I can be used as is in any layout. L Cards are simple containers that
        can hold any type of content.
      </p>
    </div>
  </div>
</template>
```

<!--/code-->
