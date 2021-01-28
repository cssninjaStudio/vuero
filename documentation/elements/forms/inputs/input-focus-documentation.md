### Focus Colors

An input can have different border colors when focused.
Simply add the appropriate color modifier class.
Available classes are `is-primary-focus`, `is-success-focus`,
`is-info-focus`, `is-warning-focus`, `is-danger-focus`.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control>
      <input type="text" class="input is-primary-focus" placeholder="Primary" />
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control>
      <input type="text" class="input is-info-focus" placeholder="Info" />
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control>
      <input type="text" class="input is-success-focus" placeholder="Success" />
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control>
      <input type="text" class="input is-warning-focus" placeholder="Warning" />
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control>
      <input type="text" class="input is-danger-focus" placeholder="Danger" />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
  <V-Control>
    <input
        type="text"
        class="input is-primary-focus"
        placeholder="Primary"
      />
  </V-Control>
</V-Field>
<V-Field>
  <V-Control>
    <input
        type="text"
        class="input is-info-focus"
        placeholder="Info"
      />
  </V-Control>
</V-Field>
<V-Field>
  <V-Control>
    <input
        type="text"
        class="input is-success-focus"
        placeholder="Success"
      />
  </V-Control>
</V-Field>
<V-Field>
  <V-Control>
    <input
        type="text"
        class="input is-warning-focus"
        placeholder="Warning"
      />
  </V-Control>
</V-Field>
<V-Field>
  <V-Control>
    <input
        type="text"
        class="input is-danger-focus"
        placeholder="Danger"
      />
  </V-Control>
</V-Field>

<!--/example-->
