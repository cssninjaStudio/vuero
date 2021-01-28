### Tags Input

Vuero is integrated with `Notyf`, a dead simple vanilla javascript
toasting library. You can check the plugin documentation on
[Github](https://github.com/vueform/multiselect).
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
  <V-Button bold @click="successToast">Success Toast</V-Button>
</template>
```

<!--/code-->
