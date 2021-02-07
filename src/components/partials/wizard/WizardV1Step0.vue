<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['next'])
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Select a project type</h2>
    </div>

    <div class="wizard-types">
      <div class="columns">
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-1.svg" alt="" />
            <h3 class="dark-inverted">UI/UX Design</h3>
            <p>Some short explanation about the type goes here.</p>
            <div class="button-wrap">
              <a
                href="#"
                class="button v-button is-primary is-rounded is-elevated is-bold type-select-button"
                @click="() => emit('next')"
                >Continue</a
              >
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-2.svg" alt="" />
            <h3 class="dark-inverted">Web Development</h3>
            <p>Some short explanation about the type goes here.</p>
            <div class="button-wrap">
              <a
                href="#"
                class="button v-button is-primary is-rounded is-elevated is-bold type-select-button"
                @click="() => emit('next')"
                >Continue</a
              >
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-3.svg" alt="" />
            <h3 class="dark-inverted">Marketing</h3>
            <p>Some short explanation about the type goes here.</p>
            <div class="button-wrap">
              <a
                href="#"
                class="button v-button is-primary is-rounded is-elevated is-bold type-select-button"
                @click="() => emit('next')"
                >Continue</a
              >
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">Or Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
