---
state:
  flipped: false
---

### V-FilePond

Vuero ships with the `<V-FilePond />` component, a custom credit card
previewer. Check the code for more details.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from vue

const onAddFile = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error)
    return
  }

  const _file = fileInfo.file as File
  if (_file) {
    wizardData.logo = _file
  }
}

const onRemoveFile = (error: any, fileInfo: any) => {
  if (error) {
    console.error(error)
    return
  }

  wizardData.logo = null
}
</script>

<template>
  <V-Field>
    <V-Control>
      <V-FilePond
        class="profile-filepond"
        name="profile_filepond"
        :chunk-retry-delays="[500, 1000, 3000]"
        label-idle="<i class='lnil lnil-cloud-upload'></i>"
        :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
        :image-preview-height="140"
        :image-resize-target-width="140"
        :image-resize-target-height="140"
        image-crop-aspect-ratio="1:1"
        style-panel-layout="compact circle"
        style-load-indicator-position="center bottom"
        style-progress-indicator-position="right bottom"
        style-button-remove-item-position="left bottom"
        style-button-process-item-position="right bottom"
        @addfile="onAddFile"
        @removefile="onRemoveFile"
      />
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
  <V-Control>
    <V-FilePond
      class="profile-filepond"
      name="profile_filepond"
      :chunk-retry-delays="[500, 1000, 3000]"
      label-idle="<i class='lnil lnil-cloud-upload'></i>"
      :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
      :image-preview-height="140"
      :image-resize-target-width="140"
      :image-resize-target-height="140"
      image-crop-aspect-ratio="1:1"
      style-panel-layout="compact circle"
      style-load-indicator-position="center bottom"
      style-progress-indicator-position="right bottom"
      style-button-remove-item-position="left bottom"
      style-button-process-item-position="right bottom"
    />
  </V-Control>
  <V-Control>
    <V-FilePond
      size="small"
      class="profile-filepond"
      name="profile_filepond"
      :chunk-retry-delays="[500, 1000, 3000]"
      label-idle="<i class='lnil lnil-cloud-upload'></i>"
      :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
      :image-preview-height="140"
      :image-resize-target-width="140"
      :image-resize-target-height="140"
      image-crop-aspect-ratio="1:1"
      style-panel-layout="compact circle"
      style-load-indicator-position="center bottom"
      style-progress-indicator-position="right bottom"
      style-button-remove-item-position="left bottom"
      style-button-process-item-position="right bottom"
    />
  </V-Control>
  <V-Control>
    <V-FilePond
      size="tiny"
      class="profile-filepond"
      name="profile_filepond"
      :chunk-retry-delays="[500, 1000, 3000]"
      label-idle="<i class='lnil lnil-cloud-upload'></i>"
      :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
      :image-preview-height="140"
      :image-resize-target-width="140"
      :image-resize-target-height="140"
      image-crop-aspect-ratio="1:1"
      style-panel-layout="compact circle"
      style-load-indicator-position="center bottom"
      style-progress-indicator-position="right bottom"
      style-button-remove-item-position="left bottom"
      style-button-process-item-position="right bottom"
    />
  </V-Control>
</V-Field>

<!--/example-->
