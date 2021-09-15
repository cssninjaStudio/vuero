### Success toast

Vuero is integrated with `Notyf`, a dead simple vanilla javascript
toasting library. You can check the plugin documentation on
<a href="https://github.com/caroso1222/notyf" target="_blank">Github</a>.
The success toast is one the 2 notyf default toasts.

<!--code-->

```vue
<script setup lang="ts">
import { Notyf } from 'notyf'

const notyf = new Notyf()
const successToast = () => {
  notyf.success('Your changes have been successfully saved!')
}
</script>

<template>
  <VButton bold @click="successToast">Success Toast</VButton>
</template>
```

<!--/code-->
