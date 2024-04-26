/**
 * Theses types are used by the Wizard form
 *
 * @see /src/pages/wizard-v1.vue
 * @see /src/components/partials/wizard
 */
import type { Ref } from 'vue'

export type WizardRelatedTo = 'UI/UX Design' | 'Web Development' | 'Marketing'
export type WizardBudget = '< 5K' | '< 30K' | '< 100K' | '100K+'
export type WizardTeammateRole = 'reader' | 'collaborator' | 'manager' | 'owner'

export interface WizardTimeFrame {
  start: Date
  end: Date
}
export interface WizardTeammate {
  name: string
  picture: string
  role: WizardTeammateRole
}
export interface WizardCustomer {
  name: string
  logo: string
  location: string
}
export interface WizardTool {
  name: string
  logo: string
  description: string
}

export interface WizardAttachement {
  name: string
  size: number
  type: string
  dataURL?: string
  upload: {
    uuid: string
    url?: string
  }
}
export interface WizardData {
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
