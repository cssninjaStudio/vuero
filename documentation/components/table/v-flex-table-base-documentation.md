### V-FlexTable

Vuero provides a custom table component called flex table. It looks like a table but is not a Html5 table. Instead, it uses the flexbox technology and is fully responsive. Check the markup for more details.

<!--code-->

```vue {2-4}
<script setup lang="ts">
import { ref } from 'vue'
const isLoaderActive = ref(false)

const toggleLoaders = () => {
  isLoaderActive.value = !isLoaderActive.value
}
</script>

<template>
  <V-Loader size="large" :active="isLoaderActive" />
</template>
```

<!--/code-->
