export const simpleButton = `
<script setup lang="ts">
const clickHandler = () => {
  constole.log('clicked!')
}
\<\/script>

<template>
  <!-- h-button on <a> tag -->
  <a class="button h-button" @click="clickHandler">
    Button
  </a>

  <!-- or <button> tag -->
  <button class="button h-button" @click="clickHandler">
    Button
  </button>

  <!-- or <RouterLink> component -->
  <RouterLink class="button h-button" :to="{ name: 'index' }">
    Button
  </RouterLink>
</template>`

export const solidButton = `
<script setup lang="ts">
const clickHandler = () => {
  constole.log('clicked!')
}
\<\/script>

<template>
  <!-- is-primary button -->
  <a class="button h-button is-primary" @click="clickHandler">
    Button primary
  </a>
</template>`

export const lightButton = `
<script setup lang="ts">
const clickHandler = () => {
  constole.log('clicked!')
}
\<\/script>

<template>
  <!-- is-light button -->
  <a class="button h-button is-light" @click="clickHandler">
    Button light
  </a>
</template>`

export const outlinedButton = `
<script setup lang="ts">
const clickHandler = () => {
  constole.log('clicked!')
}
\<\/script>

<template>
  <!-- is-outlined button -->
  <a class="button h-button is-outlined" @click="clickHandler">
    Button outlined
  </a>
</template>`

export const raisedButton = `
<script setup lang="ts">
const clickHandler = () => {
  constole.log('clicked!')
}
\<\/script>

<template>
  <!-- is-raised button -->
  <a class="button h-button is-raised" @click="clickHandler">
    Button raised
  </a>

  <!-- or is-elevated button -->
  <a class="button h-button is-elevated" @click="clickHandler">
    Button elevated
  </a>
</template>`

export const loadingButton = `
<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(false)
const clickHandler = () => {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
\<\/script>

<template>
  <!-- is-loading button -->
  <a :class="[isLoading && 'is-loading']" class="button h-button" @click="clickHandler">
    Button loading
  </a>
</template>`

export const disabledButton = `
<script setup lang="ts">
import { ref } from 'vue'

const isDisabled = ref(false)
const clickHandler = () => {
  isDisabled.value = true

  setTimeout(() => {
    isDisabled.value = false
  }, 2000)
}
\<\/script>

<template>
  <!-- disabled button -->
  <a :disabled="isDisabled" class="button h-button" @click="clickHandler">
    Button disabled
  </a>
</template>`

export const fontAwesomeButton = `
<script setup lang="ts">
const clickHandler = () => {
  constole.log('clicked!')
}
\<\/script>

<template>
  <button class="button h-button" @click="clickHandler">
    <!-- font awesome button -->
    <span class="icon">
      <i class="fab fa-twitter"></i>
    </span>
    <span>Tweet Now</span>
  </button>
</template>`

export const featherButton = `
<script setup lang="ts">
const clickHandler = () => {
  constole.log('clicked!')
}
\<\/script>

<template>
  <button class="button h-button" @click="clickHandler">
    <span class="icon">
      <!-- feather button -->
      <Icon icon="feather-github" />
    </span>
    <span>Tweet Now</span>
  </button>
</template>`

export const groupButton = `
<script setup lang="ts">
const viewHandler = () => {
  constole.log('view clicked!')
}
const editHandler = () => {
  constole.log('edit clicked!')
}
\<\/script>

<template>
  <!-- buttons group -->
  <div class="buttons">
    <button class="button h-button" @click="viewHandler">
      <span class="icon">
        <Icon icon="feather:eye" />
      </span>
      <span>View</span>
    </button>
    <button class="button h-button" @click="editHandler">
      <span class="icon">
        <Icon icon="feather:edit-2" />
      </span>
      <span>Edit</span>
    </button>
  </div>
</template>`

export const addonsButton = `
<script setup lang="ts">
const leftHandler = () => {
  constole.log('left clicked!')
}
const centerHandler = () => {
  constole.log('center clicked!')
}
const rightHandler = () => {
  constole.log('right clicked!')
}
\<\/script>

<template>
  <!-- buttons addons (bulma) -->
  <div class="field has-addons">
    <p class="control">
      <button class="button h-button" @click="leftHandler">
        <span class="icon is-small">
          <i class="fas fa-align-left"></i>
        </span>
        <span>Left</span>
      </button>
    </p>
    <p class="control">
      <button class="button h-button" @click="centerHandler">
        <span class="icon is-small">
          <i class="fas fa-align-center"></i>
        </span>
        <span>Center</span>
      </button>
    </p>
    <p class="control">
      <button class="button h-button" @click="rightHandler">
        <span class="icon is-small">
          <i class="fas fa-align-right"></i>
        </span>
        <span>Right</span>
      </button>
    </p>
  </div>
</template>`

export const actionButton = `
<script setup lang="ts">
const clickHandler = () => {
  constole.log('clicked!')
}
\<\/script>

<template>
  <!-- h-action button -->
  <a class="button h-action" @click="clickHandler">
    Action
  </a>
</template>`
