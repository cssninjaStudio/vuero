### Squared outline

Vuero provides default styled radio buttons in 2 main styles, `outlined` and `solid`. Those radio buttons also support all main colors. The available modifiers are `is-primary`, `is-success`, `is-info`, `is-warning`, `is-danger`.

<!--code-->

```vue {0}
<template>
  <V-Field>
    <V-Control>
      <label class="radio is-square">
        <input type="radio" name="outlined_square_radio" />
        <span></span>
        Choice 1
      </label>
      <label class="radio is-square is-primary">
        <input type="radio" name="outlined_square_radio" />
        <span></span>
        Choice 2
      </label>
      <label class="radio is-square is-info">
        <input type="radio" name="outlined_square_radio" />
        <span></span>
        Choice 3
      </label>
      <label class="radio is-square is-success">
        <input type="radio" name="outlined_square_radio" />
        <span></span>
        Choice 4
      </label>
      <label class="radio is-square is-warning">
        <input type="radio" name="outlined_square_radio" />
        <span></span>
        Choice 5
      </label>
      <label class="radio is-square is-danger">
        <input type="radio" name="outlined_square_radio" />
        <span></span>
        Choice 6
      </label>
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field>
    <V-Control>
        <label class="radio is-square">
            <input type="radio" name="outlined_square_radio">
            <span></span>
            Choice 1
        </label>
        <label class="radio is-square is-primary">
            <input type="radio" name="outlined_square_radio">
            <span></span>
            Choice 2
        </label>
        <label class="radio is-square is-info">
            <input type="radio" name="outlined_square_radio">
            <span></span>
            Choice 3
        </label>
        <label class="radio is-square is-success">
            <input type="radio" name="outlined_square_radio">
            <span></span>
            Choice 4
        </label>
        <label class="radio is-square is-warning">
            <input type="radio" name="outlined_square_radio">
            <span></span>
            Choice 5
        </label>
        <label class="radio is-outlined is-danger">
            <input type="radio" square="outlined_square_radio">
            <span></span>
            Choice 6
        </label>
    </V-Control>
</V-Field>

<!--/example-->
