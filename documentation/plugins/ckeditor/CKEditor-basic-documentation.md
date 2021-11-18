### CKEditor

Every application needs a rich text editor component. Vuero is bundled with
the [CK Editor](https://ckeditor.com/docs/ckeditor5/latest/index.html)
plugin. The example below shows the default editor mode. There are many more,
but the plugin doesn't support importing all editor variations. You have to
chose one and keep on with it. Other available layouts can be found [here](https://ckeditor.com/docs/ckeditor5/latest/index.html).

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const CKEditor = CKE.component
const editorData = ref(`<h2>Your HTML Content</h2>`)
const config = {
  fontFamily: {
    options: ['"Montserrat", sans-serif', '"Roboto", sans-serif'],
  },
}
</script>

<template>
  <div class="content">
    <CKEditor v-model="content" :editor="ClassicEditor" :config="config"></CKEditor>
  </div>
</template>
```

<!--/code-->
