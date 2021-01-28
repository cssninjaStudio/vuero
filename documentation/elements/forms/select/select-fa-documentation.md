### Font Awesome

Vuero selects can have icons attached to them.
They work pretty well with Font Awesome icons. You can add an
icon element inside the select. Please refer to the code example
for more details about usage.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control class="has-icons-left">
      <div class="select">
        <select>
          <option>Select a Hero</option>
          <option>Superman</option>
          <option>Batman</option>
          <option>Spiderman</option>
          <option>Deadpool</option>
          <option>Spawn</option>
          <option>Galactus</option>
        </select>
      </div>
      <div class="icon is-small is-left">
        <i class="fas fa-globe"></i>
      </div>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
    <V-Control class="has-icons-left">
        <div class="select">
            <select>
                <option>Select a Hero</option>
                <option>Superman</option>
                <option>Batman</option>
                <option>Spiderman</option>
                <option>Deadpool</option>
                <option>Spawn</option>
                <option>Galactus</option>
            </select>
        </div>
        <div class="icon is-small is-left">
            <i class="fas fa-globe"></i>
        </div>
    </V-Control>
</V-Field>

<!--/example-->
