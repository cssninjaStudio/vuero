### Input File

Vuero provides default styles for file inputs, in case you need a control
to upload a single file in your forms.
File inputs can look like upload buttons.
Please refer to markup for more details about usage.

<!--code-->

```vue
<template>
  <VField grouped>
    <VControl>
      <div class="file">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-cloud-upload-alt"></i>
            </span>
            <span class="file-label"> Choose a file… </span>
          </span>
        </label>
      </div>
    </VControl>
  </VField>
</template>
```

<!--/code-->

<!--example-->

<VField grouped>
    <VControl>
        <div class="file">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                </span>
            </label>
        </div>
    </VControl>
    <VControl>
        <div class="file is-default">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                </span>
            </label>
        </div>
    </VControl>
    <VControl>
        <div class="file is-primary">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                </span>
            </label>
        </div>
    </VControl>
    <VControl>
        <div class="file is-info">
            <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                </span>
            </label>
        </div>
    </VControl>
</VField>

<!--/example-->
