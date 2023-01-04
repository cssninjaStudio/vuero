<script setup lang="ts">
import { useWizard } from '/@src/composable/useWizard'
import { tools } from '/@src/data/wizard'

const wizard = useWizard()
const router = useRouter()
wizard.setStep({
  number: 6,
  canNavigate: true,
  previousStepFn: async () => {
    router.push('/wizard-v1/project-team')
  },
  validateStepFn: async () => {
    router.push('/wizard-v1/project-review')
  },
})
</script>

<template>
  <div id="wizard-step-5" class="inner-wrapper is-active">
    <div class="step-content">
      <div class="step-title">
        <h2 class="dark-inverted">What tools will you be using?</h2>
        <p>Choose a set of tools that you'll be using in this project.</p>
      </div>

      <div class="tools-wrapper">
        <div class="columns is-multiline">
          <!--Tool-->
          <VField
            v-for="tool in tools"
            :key="tool.name"
            v-slot="{ id }"
            raw
            class="column is-4"
          >
            <VLabel tabindex="0" class="tool-card">
              <input
                :id="id"
                v-model="wizard.data.tools"
                tabindex="-1"
                type="checkbox"
                :value="tool"
              />

              <div class="tool-card-inner">
                <VBlock :title="tool.name" :subtitle="tool.description" center>
                  <template #icon>
                    <VAvatar :picture="tool.logo" />
                  </template>
                  <template #action>
                    <div class="checkmark">
                      <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                    </div>
                  </template>
                </VBlock>
              </div>
            </VLabel>
          </VField>
        </div>
      </div>
    </div>
  </div>
</template>
