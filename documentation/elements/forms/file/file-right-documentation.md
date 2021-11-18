### File right

File inputs can show an additional area to display the selected file name.
You just need to add the `has-name` and `is-right` classes
to your file input element to apply this style. Please refer to markup
for more details about usage.

<!--code-->

```vue
<template>
  <VField grouped>
    <VControl>
      <div class="file has-name is-right">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-cloud-upload-alt"></i>
            </span>
            <span class="file-label"> Choose a file… </span>
          </span>
          <span class="file-name light-text"> 22082020_project_budget.xls </span>
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
        <div class="file has-name is-right">
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
                <span class="file-name light-text">
                    22082020_project_budget.xls
                </span>
            </label>
        </div>
    </VControl>
</VField>

<!--/example-->
