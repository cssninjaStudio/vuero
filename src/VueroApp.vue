<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { useApi } from '/@src/composable/useApi'
import { useNotyf } from '/@src/composable/useNotyf'
import { useUserSession } from '/@src/stores/userSession'

/**
 * Here you can check if your user has a token stored
 * and check with your api if it still valid before your app start
 */
const userSession = useUserSession()
const api = useApi()
const router = useRouter()
const notyf = useNotyf()

onMounted(async () => {
  if (userSession.isLoggedIn) {
    try {
      // do api request call to retreive user profile
      // note that the api is provided with json-server
      const { data: user } = await api.get('/api/users/me')
      userSession.setUser(user)
      notyf.success(`Welcome back, ${user.name}`)
    } catch (err) {
      // delete stored token if it fails
      userSession.logoutUser()
      notyf.error('Your token is invalid')
      // redirect the user somewhere
      router.push('/auth')
    }
  }
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade-slow" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <VReloadPrompt app-name="Vuero" />
</template>
