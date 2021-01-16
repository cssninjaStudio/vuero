<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Add files to this project</h2>
      <p>Or you can skip this step. You can always add more files later.</p>
    </div>

    <!--List Empty Search Placeholder -->
    <div class="page-placeholder is-files">
      <div class="placeholder-content">
        <img
          class="light-image is-rounded"
          src="/@images/illustrations/wizard/upload-placeholder.svg"
          alt=""
        />
        <img
          class="dark-image is-rounded"
          src="/@images/illustrations/wizard/upload-placeholder.svg"
          alt=""
        />
        <h3>Upload project files</h3>
        <p class="is-larger">
          You can already start adding files to your project if you have them
          handy. But don't worry, you'll be able to add and manage files later.
        </p>
        <a class="action-link toggle-uploader-link">Add Files</a>
      </div>
    </div>

    <div class="uploader is-hidden">
      <div id="actions" class="uploader-toolbar">
        <div class="left">
          <div class="uploader-actions">
            <div class="uploader-action">
              <span
                class="inner-action fileinput-button hint--bubble hint--primary hint--top"
                data-hint="Add Files"
              >
                <Icon icon="feather:plus" />
              </span>
            </div>
            <div class="uploader-action">
              <button
                type="submit"
                class="inner-action start hint--bubble hint--primary hint--top"
                data-hint="Upload All"
              >
                <Icon icon="feather:upload" />
              </button>
            </div>
            <div class="uploader-action">
              <button
                type="reset"
                class="inner-action cancel hint--bubble hint--primary hint--top"
                data-hint="Remove All"
              >
                <Icon icon="feather:x" />
              </button>
            </div>
          </div>
        </div>
        <div class="right">
          <!-- The global file processing state -->
          <div class="fileupload-process">
            <div
              id="total-progress"
              class="progress progress-striped active"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="0"
            >
              <div
                class="progress-bar progress-bar-success"
                data-dz-uploadprogress
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="uploader-container">
        <div class="upload-wrapper">
          <div class="upload-box fileinput-button">
            <div class="uploader-label">
              <i class="lnil lnil-cloud-upload"></i>
              <h3>Upload photos/videos</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="previews" class="template-list">
        <div id="template" class="template-list-item">
          <div class="preview-box">
            <!-- This is used as the file preview template -->
            <div class="preview">
              <img
                data-dz-thumbnail
                alt=""
                @error="
                  $event.target.src = 'https://via.placeholder.com/150x150'
                "
              />
            </div>
            <div class="list-item-meta">
              <p class="name" data-dz-name></p>
              <p class="error text-danger" data-dz-errormessage></p>
            </div>
            <div class="list-item-progress">
              <p class="size" data-dz-size></p>
              <div
                class="progress active"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="0"
              >
                <div
                  class="progress-bar progress-bar-success"
                  data-dz-uploadprogress
                ></div>
              </div>
            </div>
            <div class="list-item-actions">
              <button
                class="list-item-action start hint--bubble hint--primary hint--top"
                data-hint="Upload File"
              >
                <Icon icon="feather:play" />
              </button>
              <button
                data-dz-remove
                class="list-item-action cancel hint--bubble hint--primary hint--top"
                data-hint="Cancel"
              >
                <Icon icon="feather:arrow-left" />
              </button>
              <button data-dz-remove class="list-item-action delete">
                <Icon icon="feather:trash-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
