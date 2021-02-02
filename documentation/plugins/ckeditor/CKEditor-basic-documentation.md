### CKEditor

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Summum ením bonum exposuit vacuitatem doloris; Haeret in salebra.
Eademne, quae restincta siti? Quid, quod res alia tota est?

<!--code-->

```vue
<script setup lang="ts">
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const editor = ref(ClassicEditor)
const editorData = ref('<h3>ClassicEditor</h3><p>Content of the editor.</p>')
const editorConfig = ref({
  fontFamily: {
    options: ['"Montserrat", sans-serif', '"Roboto", sans-serif'],
  },
})
</script>

<template>
  <div class="content">
    <ckeditor
      v-model="editorData"
      :editor="editor"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>
```

<!--/code-->
