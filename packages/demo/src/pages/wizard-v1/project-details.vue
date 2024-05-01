<script setup lang="ts">
import type { WizardCustomer } from '/@src/types/wizard'
import { customers } from '/@src/data/wizard'

const search = ref('')
const wizard = useWizard()
const router = useRouter()
wizard.setStep({
  number: 3,
  canNavigate: true,
  previousStepFn: async () => {
    router.push('/wizard-v1/project-info')
  },
  validateStepFn: async () => {
    router.push('/wizard-v1/project-files')
  },
})

const filteredCustomers = computed<WizardCustomer[]>(() => {
  if (!search.value) {
    return []
  }

  return customers
    .filter((item) => {
      return (
        item.name.match(new RegExp(search.value, 'i'))
        || item.location.match(new RegExp(search.value, 'i'))
      )
    })
    .splice(0, 4)
})

const selectCustomer = (customer: WizardCustomer | null) => {
  wizard.data.customer = customer
}
</script>

<template>
  <div class="inner-wrapper is-active">
    <div class="step-content">
      <div class="step-title">
        <h2 class="dark-inverted">
          Add more details
        </h2>
        <p>Add useful details to your project. You can edit this later.</p>
      </div>

      <div class="project-customer">
        <h4>Customer</h4>

        <VField v-if="!wizard.data.customer">
          <VControl icon="lucide:search">
            <VInput
              v-model="search"
              placeholder="search..."
            />
          </VControl>
        </VField>

        <VBlock
          v-if="wizard.data.customer"
          :title="wizard.data.customer.name"
          :subtitle="wizard.data.customer.location"
          center
        >
          <template #icon>
            <VAvatar
              size="medium"
              :picture="wizard.data.customer.logo"
            />
          </template>

          <template #action>
            <VIconButton
              size="small"
              icon="lucide:x"
              circle
              @click="selectCustomer(null)"
            />
          </template>
        </VBlock>

        <template v-else-if="filteredCustomers.length > 0">
          <TransitionGroup
            name="list"
            tag="div"
          >
            <VBlock
              v-for="customer in filteredCustomers"
              :key="customer.name"
              :title="customer.name"
              :subtitle="customer.location"
              center
            >
              <template #icon>
                <VAvatar
                  size="medium"
                  :picture="customer.logo"
                />
              </template>

              <template #action>
                <VIconButton
                  size="small"
                  icon="lucide:plus"
                  circle
                  @click="selectCustomer(customer)"
                />
              </template>
            </VBlock>
          </TransitionGroup>
        </template>
      </div>

      <div class="project-dates">
        <h4>Project Time Frame</h4>
        <ClientOnly>
          <VDatePicker
            v-model.range="wizard.data.timeFrame"
            color="green"
            trim-weeks
          >
            <template #default="{ inputValue, inputEvents }">
              <div class="project-dates-inner">
                <div class="project-date">
                  <div class="date-icon">
                    <VIcon
                      icon="lucide:map-pin"
                    />
                  </div>
                  <VControl>
                    <input
                      :value="inputValue.start"
                      class="input form-datepicker"
                      placeholder="Start Date"
                      v-on="inputEvents.start"
                    >
                  </VControl>
                </div>
                <div class="separator" />
                <div class="project-date">
                  <div class="date-icon">
                    <VIcon
                      icon="lucide:flag"
                    />
                  </div>
                  <VControl>
                    <input
                      :value="inputValue.end"
                      class="input form-datepicker"
                      placeholder="End Date"
                      v-on="inputEvents.end"
                    >
                  </VControl>
                </div>
              </div>
            </template>
          </VDatePicker>
        </ClientOnly>
      </div>

      <div class="project-budget">
        <h4>Project Budget</h4>
        <div class="project-budget-inner">
          <div class="budget-item">
            <a
              class="budget-item-inner"
              :class="[wizard.data.budget === '< 5K' && 'is-active']"
              tabindex="0"
              role="button"
              @keydown.enter.prevent="wizard.data.budget = '< 5K'"
              @click="wizard.data.budget = '< 5K'"
            >
              <span>&lt; 5K</span>
            </a>
            <a
              class="budget-item-inner"
              :class="[wizard.data.budget === '< 30K' && 'is-active']"
              tabindex="0"
              role="button"
              @keydown.enter.prevent="wizard.data.budget = '< 30K'"
              @click="wizard.data.budget = '< 30K'"
            >
              <span>&lt; 30K</span>
            </a>
            <a
              class="budget-item-inner"
              :class="[wizard.data.budget === '< 100K' && 'is-active']"
              tabindex="0"
              role="button"
              @keydown.enter.prevent="wizard.data.budget = '< 100K'"
              @click="wizard.data.budget = '< 100K'"
            >
              <span>&lt; 100K</span>
            </a>
            <a
              class="budget-item-inner"
              :class="[wizard.data.budget === '100K+' && 'is-active']"
              tabindex="0"
              role="button"
              @click="wizard.data.budget = '100K+'"
              @keydown.enter.prevent="wizard.data.budget = '100K+'"
            >
              <span>100K+</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
