<script lang="ts">
import type { PropType, ComponentPropsOptions, EmitsOptions } from 'vue'
import type { FilePondEvent, FilePondOptions } from 'filepond'
import { onMounted, onUnmounted, ref, defineComponent, h } from 'vue'
import * as FilePond from 'filepond'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageExitOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.min.css'

type FilePondSize = undefined | 'small' | 'tiny'

const plugins = [
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageExitOrientation,
  FilePondPluginImageCrop,
  FilePondPluginImageEdit,
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
]

FilePond.registerPlugin(...plugins)

const types = {
  boolean: Boolean,
  int: Number,
  number: Number,
  string: String,
  array: Array,
  object: Object,
  function: Function,
  // action: Function, not used
  serverapi: Object,
  // regex: String, not used
}

// Setup initial prop types and update when plugins are added
const getNativeConstructorFromType = (type: keyof typeof types) => {
  if (!type) {
    return String
  }

  return types[type]
}

const _OptionTypes = FilePond.OptionTypes as Record<string, keyof typeof types>

// Activated props
const propsOptions: ComponentPropsOptions = {}

// Events that need to be mapped to emitters
const eventNames: EmitsOptions = []

const defaultOptions = FilePond.getOptions() as Record<string, any>

for (const prop in _OptionTypes) {
  // don't add events to the props array
  if (/^on/.test(prop)) {
    eventNames.push(prop.replace('on', ''))
    continue
  }

  // get property type ( can be either a String or the type defined within FilePond )
  propsOptions[prop] = {
    type: getNativeConstructorFromType(_OptionTypes[prop]),
    default: () => defaultOptions[prop],
  }
}

export default defineComponent({
  name: 'VFilePond',
  props: {
    ...propsOptions,
    size: {
      type: String as PropType<FilePondSize>,
      default: undefined,
      validator: (value: FilePondSize) => {
        // The value must match one of these strings
        if ([undefined, 'small', 'tiny'].indexOf(value) === -1) {
          console.warn(
            `VFilePond: invalid "${value}" size. Should be small, tiny or undefined`
          )
          return false
        }

        return true
      },
    },
  },
  emits: ['input', ...eventNames],
  setup(props, { emit }) {
    const pond = ref<FilePond.FilePond>()
    const inputElement = ref<HTMLInputElement>()
    const pondOptions = Object.assign({}, { ...props }) as FilePondOptions

    onMounted(() => {
      if (inputElement.value && FilePond.supported()) {
        pond.value = FilePond.create(inputElement.value, {
          ...pondOptions,
          fileValidateTypeDetectType: (source, type) =>
            new Promise((resolve, reject) => {
              if (pondOptions.acceptedFileTypes) {
                const index = pondOptions.acceptedFileTypes.findIndex(
                  (allowedType) => allowedType === type
                )
                if (index > -1) {
                  resolve(type)
                  return
                }
              }

              reject()
            }),
        })

        for (const eventName of eventNames) {
          const event = eventName as FilePondEvent
          if (event) {
            pond.value.on(event, (...event) => {
              emit('input', pond.value ? pond.value.getFiles() : [])
              emit(eventName, ...event)
            })
          }
        }
      }
    })
    onUnmounted(() => {
      if (pond.value) {
        for (const eventName of eventNames) {
          const event = eventName as FilePondEvent
          if (event) {
            pond.value.off(event, (event) => {
              emit(eventName, event)
            })
          }
        }

        pond.value.destroy()
      }
    })

    return () => {
      const input = h('input', {
        type: 'file',
        ref: inputElement,
        id: pondOptions.id,
        name: pondOptions.name,
        class: pondOptions.className,
        required: pondOptions.required,
        accept: pondOptions.acceptedFileTypes,
        multiple: pondOptions.allowMultiple,
        capture: pondOptions.captureMethod,
      })

      const wrapper = h('div', { class: 'filepond--wrapper' }, [input])

      return h(
        'div',
        {
          class: ['filepond-profile-wrap', props.size && `is-${props.size}`],
        },
        [wrapper]
      )
    }
  },
})
</script>
