### Input File

Vuero provides default styles for file inputs, in case you need a control
to upload a single file in your forms.
File inputs can look like upload buttons.
Please refer to markup for more details about usage.

<!--code-->

```vue
<template>
  <V-Field grouped>
    <V-Control>
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
    </V-Control>
  </V-Field>
</template>
```

<!--/code-->

<!--example-->

<V-Field grouped>
    <V-Control>
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
    </V-Control>
    <V-Control>
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
    </V-Control>
    <V-Control>
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
    </V-Control>
    <V-Control>
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
    </V-Control>
</V-Field>

<!--/example-->
