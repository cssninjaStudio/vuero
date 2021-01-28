### Loading select

huro selects can be shown in a loading state. To apply that style,
simply add the is-loading class to the select wrapping element.
Please refer to the code example for more details about usage.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control loading>
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
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
    <V-Control loading>
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
    </V-Control>
</V-Field>

<!--/example-->
