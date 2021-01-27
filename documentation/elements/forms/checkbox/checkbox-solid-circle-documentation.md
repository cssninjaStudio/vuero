### Solid circle

Vuero checkboxes can be circles instead of squares. Simply add the `is-circle` modifier class to your checkbox element. See the code example for more details about usage.

<!--code-->

```vue {0}
<template>
  <V-Field>
    <V-Control>
      <label class="checkbox is-solid is-circle">
        <input type="checkbox" />
        <span></span>
        Option 1
      </label>
      <label class="checkbox is-solid is-circle is-primary">
        <input type="checkbox" />
        <span></span>
        Option 2
      </label>
      <label class="checkbox is-solid is-circle is-info">
        <input type="checkbox" />
        <span></span>
        Option 3
      </label>
      <label class="checkbox is-solid is-circle is-success">
        <input type="checkbox" />
        <span></span>
        Option 4
      </label>
      <label class="checkbox is-solid is-circle is-warning">
        <input type="checkbox" />
        <span></span>
        Option 5
      </label>
      <label class="checkbox is-solid is-circle is-danger">
        <input type="checkbox" />
        <span></span>
        Option 6
      </label>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
    <V-Control>
        <label class="checkbox is-solid is-circle">
            <input type="checkbox">
            <span></span>
            Option 1
        </label>
        <label class="checkbox is-solid is-circle is-primary">
            <input type="checkbox">
            <span></span>
            Option 2
        </label>
        <label class="checkbox is-solid is-circle is-info">
            <input type="checkbox">
            <span></span>
            Option 3
        </label>
        <label class="checkbox is-solid is-circle is-success">
            <input type="checkbox">
            <span></span>
            Option 4
        </label>
        <label class="checkbox is-solid is-circle is-warning">
            <input type="checkbox">
            <span></span>
            Option 5
        </label>
        <label class="checkbox is-solid is-circle is-danger">
            <input type="checkbox">
            <span></span>
            Option 6
        </label>
    </V-Control>
</V-Field>

<!--/example-->
