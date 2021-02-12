<script setup lang="ts">
import { ref } from 'vue'

import type { WizardTool } from '/@src/models/wizard'
import { wizardData } from '/@src/composition/state/wizardState'

const tools: WizardTool[] = [
  {
    name: 'Illustrator',
    description: 'Design Software',
    logo: '/images/photo/demo/tools/illustrator.svg',
  },
  {
    name: 'Photoshop',
    description: 'Design Software',
    logo: '/images/photo/demo/tools/photoshop.svg',
  },
  {
    name: 'Adobe XD',
    description: 'Design Software',
    logo: '/images/photo/demo/tools/xd.svg',
  },
  {
    name: 'Figma',
    description: 'Design Software',
    logo: '/images/photo/demo/tools/xd.svg',
  },
  {
    name: 'Invision',
    description: 'Design Software',
    logo: '/images/photo/demo/tools/invision.svg',
  },
  {
    name: 'Jira',
    description: 'Issue Tracker',
    logo: '/images/photo/demo/tools/jira.svg',
  },
  {
    name: 'Taiga',
    description: 'Scrumboard',
    logo: '/images/photo/demo/tools/taiga.svg',
  },
  {
    name: 'Slack',
    description: 'Messaging App',
    logo: '/images/photo/demo/tools/slack.svg',
  },
  {
    name: 'Asana',
    description: 'Task Manager',
    logo: '/images/photo/demo/tools/asana.svg',
  },
  {
    name: 'Teamwork',
    description: 'Collaborative App',
    logo: '/images/photo/demo/tools/teamwork.svg',
  },
  {
    name: 'GitHub',
    description: 'Code Repository',
    logo: '/images/photo/demo/tools/github.svg',
  },
  {
    name: 'Gitlab',
    description: 'Code Repository',
    logo: '/images/photo/demo/tools/gitlab.svg',
  },
]

const search = ref('')
const isAddingMembers = ref(false)
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
                    <i class="iconify" data-icon="feather:check"></i>
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
