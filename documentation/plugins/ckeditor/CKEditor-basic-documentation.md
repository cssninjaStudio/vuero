### CKEditor

Every application needs a rich text editor component. Vuero is bundled with
the [CK Editor](https://ckeditor.com/docs/ckeditor5/latest/index.html)
plugin. The example below shows the default editor mode. There are many more,
but the plugin doesn't support importing all editor variations. You have to
chose one and keep on with it. Other available layouts can be found [here](https://ckeditor.com/docs/ckeditor5/latest/index.html).

<!--code-->

```vue
<script setup lang="ts">
import {
  editor,
  editorData,
  editorConfig,
} from '/@src/data/ck-editor/editor-data'
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
