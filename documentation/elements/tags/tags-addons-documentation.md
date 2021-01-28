### Tag addons

Vuero tags can be merged into a single one to achieve addon styles.
You can attach another tag or a delete button if you need to.
See the code example for more details about usage.

<!--code-->

```vue
<template>
  <div class="tags has-addons">
    <span class="tag">Package</span>
    <span class="tag is-primary">Bulma</span>
  </div>
  <div class="tags has-addons">
    <span class="tag is-primary">John Maynard</span>
    <a class="tag is-delete"></a>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="field">
    <div class="control">
        <div class="tags has-addons">
            <span class="tag">Package</span>
            <span class="tag is-primary">Bulma</span>
        </div>
        <div class="tags has-addons">
            <span class="tag is-primary">John Maynard</span>
            <a class="tag is-delete"></a>
        </div>
    </div>
</div>

<!--/example-->
