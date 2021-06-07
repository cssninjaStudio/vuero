<script setup lang="ts">
import { tools } from '/@src/data/wizard'
import { wizardData } from '/@src/state/wizardState'
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">What tools will you be using?</h2>
      <p>Choose a set of tools that you'll be using in this project.</p>
    </div>

    <div class="tools-wrapper">
      <div class="columns is-multiline">
        <!--Tool-->
        <div v-for="tool in tools" :key="tool.name" class="column is-4">
          <div class="tool-card">
            <input v-model="wizardData.tools" type="checkbox" :value="tool" />

            <div class="tool-card-inner">
              <V-Block :title="tool.name" :subtitle="tool.description" center>
                <template #icon>
                  <V-Avatar :picture="tool.logo" />
                </template>
                <template #action>
                  <div class="checkmark">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:check"
                    ></i>
                  </div>
                </template>
              </V-Block>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
