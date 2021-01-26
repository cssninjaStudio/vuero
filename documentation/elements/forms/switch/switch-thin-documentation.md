### Thin Switch

Vuero provides nice thin switch checkboxes when you need to display such control in your forms. Vuero switches have several color modififers. Available modifiers are `is-primary`, `is-success`, `is-info`, `is-warning` and `is-danger`. Please refer to the markup for more details about usage.

<!--code-->

```vue {0}
<template>
  <V-Field grouped>
    <V-Control>
      <div class="thin-switch">
        <input id="thin-switch-1" class="input" type="checkbox" />
        <label for="thin-switch-1" class="slider"></label>
      </div>
    </V-Control>
    <V-Control>
      <div class="thin-switch is-primary">
        <input id="thin-switch-2" class="input" type="checkbox" checked />
        <label for="thin-switch-2" class="slider"></label>
      </div>
    </V-Control>
    <V-Control>
      <div class="thin-switch is-info">
        <input id="thin-switch-4" class="input" type="checkbox" checked />
        <label for="thin-switch-4" class="slider"></label>
      </div>
    </V-Control>
    <V-Control>
      <div class="thin-switch is-warning">
        <input id="thin-switch-5" class="input" type="checkbox" checked />
        <label for="thin-switch-5" class="slider"></label>
      </div>
    </V-Control>
    <V-Control>
      <div class="thin-switch is-danger">
        <input id="thin-switch-6" class="input" type="checkbox" checked />
        <label for="thin-switch-6" class="slider"></label>
      </div>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
    <V-Control>
        <div class="thin-switch">
            <input id="thin-switch-1" class="input" type="checkbox" />
            <label for="thin-switch-1" class="slider"></label>
        </div>
    </V-Control>
    <V-Control>
        <div class="thin-switch is-primary">
            <input id="thin-switch-2" class="input" type="checkbox" checked />
            <label for="thin-switch-2" class="slider"></label>
        </div>
    </V-Control>
    <V-Control>
        <div class="thin-switch is-info">
            <input id="thin-switch-4" class="input" type="checkbox" checked />
            <label for="thin-switch-4" class="slider"></label>
        </div>
    </V-Control>
    <V-Control>
        <div class="thin-switch is-warning">
            <input id="thin-switch-5" class="input" type="checkbox" checked />
            <label for="thin-switch-5" class="slider"></label>
        </div>
    </V-Control>
    <V-Control>
        <div class="thin-switch is-danger">
            <input id="thin-switch-6" class="input" type="checkbox" checked />
            <label for="thin-switch-6" class="slider"></label>
        </div>
    </V-Control>
</V-Field>

<!--/example-->
