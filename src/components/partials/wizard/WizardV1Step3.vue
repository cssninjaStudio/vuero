<script setup lang="ts">
import { computed, ref } from 'vue'

import type { WizardCustomer } from '/@src/models/wizard'
import { customers } from '/@src/data/wizard'
import { wizardData } from '/@src/state/wizardState'

const search = ref('')

const filteredCustomers = computed<WizardCustomer[]>(() => {
  if (!search.value) {
    return []
  }

  return customers
    .filter((item) => {
      return (
        item.name.match(new RegExp(search.value, 'i')) ||
        item.location.match(new RegExp(search.value, 'i'))
      )
    })
    .splice(0, 4)
})

const selectCustomer = (customer: WizardCustomer) => {
  wizardData.customer = customer
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Add more details</h2>
      <p>Add useful details to your project. You can edit this later.</p>
    </div>

    <div class="project-customer">
      <h4>Customer</h4>

      <V-Field v-if="!wizardData.customer">
        <V-Control icon="feather:search">
          <input v-model="search" class="input" placeholder="search..." />
        </V-Control>
      </V-Field>

      <V-Block
        v-if="wizardData.customer"
        :title="wizardData.customer.name"
        :subtitle="wizardData.customer.location"
        center
      >
        <template #icon>
          <V-Avatar size="medium" :picture="wizardData.customer.logo" />
        </template>

        <template #action>
          <V-IconButton
            size="small"
            icon="feather:x"
            circle
            @click="wizardData.customer = null"
          />
        </template>
      </V-Block>

      <template v-else-if="filteredCustomers.length > 0">
        <transition-group name="list" tag="div">
          <V-Block
            v-for="customer in filteredCustomers"
            :key="customer.name"
            :title="customer.name"
            :subtitle="customer.location"
            center
          >
            <template #icon>
              <V-Avatar size="medium" :picture="customer.logo" />
            </template>

            <template #action>
              <V-IconButton
                size="small"
                icon="feather:plus"
                circle
                @click="wizardData.customer = customer"
              />
            </template>
          </V-Block>
        </transition-group>
      </template>
    </div>

    <div class="project-dates">
      <h4>Project Time Frame</h4>
      <v-date-picker
        v-model="wizardData.timeFrame"
        is-range
        color="green"
        trim-weeks
      >
        <template #default="{ inputValue, inputEvents }">
          <div class="project-dates-inner">
            <div class="project-date">
              <div class="date-icon">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:map-pin"
                ></i>
              </div>
              <V-Control>
                <input
                  :value="inputValue.start"
                  class="input form-datepicker"
                  placeholder="Start Date"
                  v-on="inputEvents.start"
                />
              </V-Control>
            </div>
            <div class="separator"></div>
            <div class="project-date">
              <div class="date-icon">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:flag"
                ></i>
              </div>
              <V-Control>
                <input
                  :value="inputValue.end"
                  class="input form-datepicker"
                  placeholder="End Date"
                  v-on="inputEvents.end"
                />
              </V-Control>
            </div>
          </div>
        </template>
      </v-date-picker>
    </div>

    <div class="project-budget">
      <h4>Project Budget</h4>
      <div class="project-budget-inner">
        <div class="budget-item">
          <a
            class="budget-item-inner"
            :class="[wizardData.budget === '< 5K' && 'is-active']"
            @click="wizardData.budget = '< 5K'"
          >
            <span>&lt; 5K</span>
          </a>
          <a
            class="budget-item-inner"
            :class="[wizardData.budget === '< 30K' && 'is-active']"
            @click="wizardData.budget = '< 30K'"
          >
            <span>&lt; 30K</span>
          </a>
          <a
            class="budget-item-inner"
            :class="[wizardData.budget === '< 100K' && 'is-active']"
            @click="wizardData.budget = '< 100K'"
          >
            <span>&lt; 100K</span>
          </a>
          <a
            class="budget-item-inner"
            :class="[wizardData.budget === '100K+' && 'is-active']"
            @click="wizardData.budget = '100K+'"
          >
            <span>100K+</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
