import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive, ref, shallowRef, computed } from 'vue'

/**
 * Using typescript types allow better developer experience
 * with autocompletion and compiler error prechecking
 */
import type { WizardData } from '/@src/models/wizard'
import sleep from '/@src/utils/sleep'

interface WizardStepOptions {
  number: number
  canNavigate?: boolean
  previousStepFn?: () => Promise<void>
  validateStepFn?: () => Promise<void>
}

export const useWizard = defineStore('wizard', () => {
  const step = ref(1)
  const loading = ref(false)
  const canNavigate = ref(false)
  const previousStepFn = shallowRef<WizardStepOptions['previousStepFn'] | null>()
  const validateStepFn = shallowRef<WizardStepOptions['validateStepFn'] | null>()
  const data = reactive<WizardData>({
    name: '',
    description: '',
    relatedTo: 'UI/UX Design',
    logo: null,
    timeFrame: ref({
      start: new Date(),
      end: new Date(),
    }),
    budget: '< 5K',
    attachments: [],
    teammates: [],
    tools: [],
    customer: null,
  })

  const stepTitle = computed(() => {
    switch (step.value) {
      case 2:
        return 'Project Info'
      case 3:
        return 'Project Details'
      case 4:
        return 'Project Files'
      case 5:
        return 'Team Members'
      case 6:
        return 'Project Tools'
      case 7:
        return 'Preview'
      case 8:
        return 'Finish'
      case 1:
      default:
        return 'Project Type'
    }
  })

  function setLoading(value: boolean) {
    loading.value = value
  }
  function setStep(options?: WizardStepOptions) {
    step.value = options?.number || 1
    canNavigate.value = options?.canNavigate ?? false
    previousStepFn.value = options?.previousStepFn ?? null
    validateStepFn.value = options?.validateStepFn ?? null
  }

  async function save() {
    loading.value = true

    // simulate saving data
    await sleep(2000)

    loading.value = false
  }

  function reset() {
    data.name = ''
    data.description = ''
    data.relatedTo = 'UI/UX Design'
    data.logo = null
    data.timeFrame = {
      start: new Date(),
      end: new Date(),
    }
    data.budget = '< 5K'
    data.attachments = []
    data.teammates = []
    data.tools = []
    data.customer = null
  }

  return {
    canNavigate,
    previousStepFn,
    validateStepFn,
    step,
    loading,
    stepTitle,
    data,
    setLoading,
    setStep,
    save,
    reset,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWizard, import.meta.hot))
}
