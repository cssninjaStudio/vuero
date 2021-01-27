### Switch

Vuero provides nicely styled switch checkboxes when you need to display such control in yoour forms. Vuero switches have several color modififers. Available modifiers are `is-primary`, `is-success`, `is-info`, `is-warning` and `is-danger`. Please refer to the markup for more details about usage.

<!--code-->

```vue {0}
<template>
  <V-Field grouped>
    <V-Control>
      <label class="form-switch">
        <input type="checkbox" class="is-switch" />
        <i></i>
      </label>
    </V-Control>
    <V-Control>
      <label class="form-switch is-primary">
        <input type="checkbox" class="is-switch" checked />
        <i></i>
      </label>
    </V-Control>
    <V-Control>
      <label class="form-switch is-success">
        <input type="checkbox" class="is-switch" checked />
        <i></i>
      </label>
    </V-Control>
    <V-Control>
      <label class="form-switch is-info">
        <input type="checkbox" class="is-switch" checked />
        <i></i>
      </label>
    </V-Control>
    <V-Control>
      <label class="form-switch is-warning">
        <input type="checkbox" class="is-switch" checked />
        <i></i>
      </label>
    </V-Control>
    <V-Control>
      <label class="form-switch is-danger">
        <input type="checkbox" class="is-switch" checked />
        <i></i>
      </label>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
    <V-Control>
        <label class="form-switch">
            <input type="checkbox" class="is-switch">
            <i></i>
        </label>
    </V-Control>
    <V-Control>
        <label class="form-switch is-primary">
            <input type="checkbox" class="is-switch" checked>
            <i></i>
        </label>
    </V-Control>
    <V-Control>
        <label class="form-switch is-success">
            <input type="checkbox" class="is-switch" checked>
            <i></i>
        </label>
    </V-Control>
    <V-Control>
        <label class="form-switch is-info">
            <input type="checkbox" class="is-switch" checked>
            <i></i>
        </label>
    </V-Control>
    <V-Control>
        <label class="form-switch is-warning">
            <input type="checkbox" class="is-switch" checked>
            <i></i>
        </label>
    </V-Control>
    <V-Control>
        <label class="form-switch is-danger">
            <input type="checkbox" class="is-switch" checked>
            <i></i>
        </label>
    </V-Control>
</V-Field>

<!--/example-->
