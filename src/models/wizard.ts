/**
 * Theses types are used by the Wizard form
 *
 * @see /src/pages/wizard-v1.vue
 * @see /src/components/partials/wizard
 */
import type { Ref } from 'vue'

export type WizardRelatedTo =
  | 'UX/Design'
  | 'Web development'
  | 'export Marketing'
export type WizardBudget = '< 5K' | '< 30K' | '< 100K' | '100K+'
export type WizardTimeFrame = {
  start: Date
  end: Date
}
export type WizardTeammateRole = 'reader' | 'collaborator' | 'manager' | 'owner'
export type WizardTeammate = {
  name: string
  picture: string
  role: WizardTeammateRole
}
export type WizardCustomer = {
  name: string
  logo: string
  location: string
}
export type WizardTool = {
  name: string
  logo: string
  description: string
}

export type WizardAttachement = {
  name: string
  size: number
  type: string
  dataURL?: string
  upload: {
    uuid: string
    url?: string
  }
}
export type WizardData = {
  name: string
  description: string
  logo: File | null
  attachments: WizardAttachement[]
  relatedTo: WizardRelatedTo
  timeFrame: Ref<WizardTimeFrame>
  budget: WizardBudget
  teammates: WizardTeammate[]
  tools: WizardTool[]
  customer: WizardCustomer | null
}
