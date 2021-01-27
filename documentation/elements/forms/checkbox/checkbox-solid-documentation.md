### Checkbox solid

Vuero provides default styled checkboxes in 2 main styles, `outlined` and `solid`. Those checkboxes also support all main colors. The available modifiers are `is-primary`, `is-success`, `is-info`, `is-warning`, `is-danger`.

<!--code-->

```vue {0}
<template>
  <V-Field>
    <V-Control>
      <label class="checkbox is-solid">
        <input type="checkbox" />
        <span></span>
        Option 1
      </label>
      <label class="checkbox is-solid is-primary">
        <input type="checkbox" />
        <span></span>
        Option 2
      </label>
      <label class="checkbox is-solid is-info">
        <input type="checkbox" />
        <span></span>
        Option 3
      </label>
      <label class="checkbox is-solid is-success">
        <input type="checkbox" />
        <span></span>
        Option 4
      </label>
      <label class="checkbox is-solid is-warning">
        <input type="checkbox" />
        <span></span>
        Option 5
      </label>
      <label class="checkbox is-solid is-danger">
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
        <label class="checkbox is-solid">
            <input type="checkbox">
            <span></span>
            Option 1
        </label>
        <label class="checkbox is-solid is-primary">
            <input type="checkbox">
            <span></span>
            Option 2
        </label>
        <label class="checkbox is-solid is-info">
            <input type="checkbox">
            <span></span>
            Option 3
        </label>
        <label class="checkbox is-solid is-success">
            <input type="checkbox">
            <span></span>
            Option 4
        </label>
        <label class="checkbox is-solid is-warning">
            <input type="checkbox">
            <span></span>
            Option 5
        </label>
        <label class="checkbox is-solid is-danger">
            <input type="checkbox">
            <span></span>
            Option 6
        </label>
    </V-Control>
</V-Field>

<!--/example-->
