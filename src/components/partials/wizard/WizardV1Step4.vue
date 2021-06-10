<script lang="ts">
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'

Dropzone.autoDiscover = false
</script>

<script setup lang="ts">
import { nextTick, onUnmounted, ref, watch } from 'vue'

import { wizardData } from '/@src/state/wizardState'
import sleep from '/@src/utils/sleep'

const isUploading = ref(false)
const previewTemplateElement = ref<HTMLElement | null>(null)
const previewContainerElement = ref<HTMLElement | null>(null)
const totalProgressElement = ref<HTMLElement | null>(null)
const addUploadElement = ref<HTMLElement | null>(null)
const startUploadElement = ref<HTMLElement | null>(null)
const cancelUploadElement = ref<HTMLElement | null>(null)
const dropzone = ref<typeof Dropzone | null>(null)
const previewTemplate = ref('')
let isInit = false

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

const initDropzone = () => {
  if (isInit) {
    return
  }
  isInit = true

  dropzone.value = new Dropzone(document.body, {
    // Make the whole body a dropzone
    url: 'https://www.cssninja.io/upload.php', // Set the url
    thumbnailWidth: 800,
    thumbnailHeight: 600,
    parallelUploads: 2,
    previewTemplate: previewTemplate.value,
    autoQueue: false, // Make sure the files aren't queued until manually added
    previewsContainer: previewContainerElement.value, // Define the container to display the previews
    clickable: '.fileinput-button', // Define the element that should be used as click trigger to select files.
  })

  dropzone.value.on('complete', (file: any) => {
    const attachment = {
      name: file.name,
      size: file.size,
      dataURL: file.dataURL,
      type: file.type,
      upload: {
        uuid: file.upload.uuid,
        url: file.upload.url,
      },
    }
    wizardData.attachments.push(attachment)
  })

  dropzone.value.on('removedfile', (file: any) => {
    const fileIndex = wizardData.attachments.findIndex((item) => {
      return item.upload.uuid === file.upload.uuid
    })

    if (fileIndex !== -1) {
      wizardData.attachments.splice(fileIndex, 1)
    }
  })

  dropzone.value.on('addedfile', (file: any) => {
    const startElement = file.previewElement.querySelector('.start')
    if (startElement) {
      startElement.onclick = () => {
        dropzone.value.enqueueFile(file)
      }
    }
  })

  dropzone.value.on('totaluploadprogress', (progress: number) => {
    if (totalProgressElement.value) {
      totalProgressElement.value.style.width = `${progress}%`
    }
  })

  dropzone.value.on('sending', (file: any) => {
    const startElement = file.previewElement.querySelector('.start')

    if (totalProgressElement.value) {
      totalProgressElement.value.style.opacity = '1'
    }
    if (startElement) {
      startElement.disabled = true
    }
  })

  dropzone.value.on('queuecomplete', (progress: any) => {
    if (totalProgressElement.value) {
      totalProgressElement.value.style.opacity = '0'
    }
  })

  if (startUploadElement.value) {
    startUploadElement.value.onclick = () => {
      if (dropzone.value) {
        const files = dropzone.value.getAddedFiles()
        dropzone.value.enqueueFiles(files)
      }
    }
  }

  if (cancelUploadElement.value) {
    cancelUploadElement.value.onclick = () => {
      if (dropzone.value) {
        dropzone.value.removeAllFiles(true)
      }
      wizardData.attachments.splice(0, wizardData.attachments.length)
    }
  }

  const minSteps = 6
  const maxSteps = 60
  const timeBetweenSteps = 100
  const bytesPerStep = 1024 * 1024 // 1024 kilooctets upload rate simulation

  dropzone.value.uploadFiles = async (files: any) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const totalSteps = Math.round(
        Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep))
      )

      for (let step = 0; step < totalSteps; step++) {
        const duration = timeBetweenSteps * (step + 1)
        await sleep(duration)

        file.upload = {
          ...file.upload,
          progress: (100 * (step + 1)) / totalSteps,
          bytesSent: ((step + 1) * file.size) / totalSteps,
        }

        dropzone.value.emit(
          'uploadprogress',
          file,
          file.upload.progress,
          file.upload.bytesSent
        )
        if (file.upload.progress >= 100) {
          file.status = Dropzone.SUCCESS
          file.upload = {
            url: `https://fake-uploads.cssninja.io/${file.name}`,
          }

          dropzone.value.emit('success', file, 'success', null)
          dropzone.value.emit('complete', file)
          dropzone.value.processQueue()
        }
      }
    }
  }
}

onUnmounted(() => {
  if (dropzone.value) {
    dropzone.value.destroy()
    isInit = false
  }
})

watch(isUploading, () => {
  if (isUploading.value) {
    nextTick(() => {
      if (previewTemplateElement.value) {
        previewTemplate.value = previewTemplateElement.value.outerHTML
        previewTemplateElement.value.remove()
      }
    })
  }
})

watch(previewTemplate, () => {
  if (previewTemplate.value) {
    initDropzone()
  }
})
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Add files to this project</h2>
      <p>Or you can skip this step. You can always add more files later.</p>
    </div>

    <!--List Empty Search Placeholder -->
    <div v-if="!isUploading" class="page-placeholder is-files">
      <div class="placeholder-content">
        <img
          class="light-image is-rounded"
          src="/@src/assets/illustrations/wizard/upload-placeholder.svg"
          alt=""
        />
        <img
          class="dark-image is-rounded"
          src="/@src/assets/illustrations/wizard/upload-placeholder.svg"
          alt=""
        />
        <h3>Upload project files</h3>
        <p class="is-larger">
          You can already start adding files to your project if you have them
          handy. But don't worry, you'll be able to add and manage files later.
        </p>
        <a class="action-link toggle-uploader-link" @click="isUploading = true">
          Add Files
        </a>
      </div>
    </div>

    <div v-else class="uploader">
      <div class="uploader-toolbar">
        <div class="left">
          <div class="uploader-actions">
            <div class="uploader-action">
              <span
                ref="addUploadElement"
                class="
                  inner-action
                  fileinput-button
                  hint--bubble hint--primary hint--top
                "
                data-hint="Add Files"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:plus"
                ></i>
              </span>
            </div>
            <div class="uploader-action">
              <button
                ref="startUploadElement"
                type="submit"
                class="inner-action start hint--bubble hint--primary hint--top"
                data-hint="Upload All"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:upload"
                ></i>
              </button>
            </div>
            <div class="uploader-action">
              <button
                ref="cancelUploadElement"
                type="reset"
                class="inner-action cancel hint--bubble hint--primary hint--top"
                data-hint="Remove All"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="right">
          <!-- The global file processing state -->
          <div class="fileupload-process">
            <div
              ref="totalProgressElement"
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
              <i aria-hidden="true" class="lnil lnil-cloud-upload"></i>
              <h3>Upload photos/videos</h3>
            </div>
          </div>
        </div>
      </div>

      <div ref="previewContainerElement" class="template-list">
        <div ref="previewTemplateElement" class="template-list-item">
          <div class="preview-box">
            <!-- This is used as the file preview template -->
            <div class="preview">
              <img
                data-dz-thumbnail
                alt=""
                @error.once="
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
                class="
                  list-item-action
                  start
                  hint--bubble hint--primary hint--top
                "
                data-hint="Upload File"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:play"
                ></i>
              </button>
              <button
                data-dz-remove
                class="
                  list-item-action
                  cancel
                  hint--bubble hint--primary hint--top
                "
                data-hint="Cancel"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-left"
                ></i>
              </button>
              <button data-dz-remove class="list-item-action delete">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:trash-2"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
