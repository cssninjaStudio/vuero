### Focus Colors

Like other form controls, textareas can have different border colors
when focused. Simply add the appropriate color modifier class.
Available classes are `is-primary-focus`, `is-success-focus`,
`is-info-focus`, `is-warning-focus`, `is-danger-focus`.

<!--code-->

```vue
<template>
  <V-Field>
    <V-Control>
      <textarea
        class="textarea is-primary-focus"
        rows="2"
        placeholder="Primary..."
      >
      </textarea>
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control>
      <textarea
        class="textarea is-success-focus"
        rows="2"
        placeholder="Success..."
      >
      </textarea>
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control>
      <textarea class="textarea is-info-focus" rows="2" placeholder="Info...">
      </textarea>
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control>
      <textarea
        class="textarea is-warning-focus"
        rows="2"
        placeholder="Warning..."
      >
      </textarea>
    </V-Control>
  </V-Field>
  <V-Field>
    <V-Control>
      <textarea
        class="textarea is-danger-focus"
        rows="2"
        placeholder="Danger..."
      >
      </textarea>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
    <V-Control>
        <textarea class="textarea is-primary-focus" rows="2" placeholder="Primary..."></textarea>
    </V-Control>
</V-Field>
<V-Field>
    <V-Control>
        <textarea class="textarea is-success-focus" rows="2" placeholder="Success..."></textarea>
    </V-Control>
</V-Field>
<V-Field>
    <V-Control>
        <textarea class="textarea is-info-focus" rows="2" placeholder="Info..."></textarea>
    </V-Control>
</V-Field>
<V-Field>
    <V-Control>
        <textarea class="textarea is-warning-focus" rows="2" placeholder="Warning..."></textarea>
    </V-Control>
</V-Field>
<V-Field>
    <V-Control>
        <textarea class="textarea is-danger-focus" rows="2" placeholder="Danger..."></textarea>
    </V-Control>
</V-Field>

<!--/example-->
