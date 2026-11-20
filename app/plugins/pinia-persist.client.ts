// Registers the Pinia persistence plugin so setup stores can opt into localStorage.
import type { Pinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin({
  name: 'pinia-persist',
  dependsOn: ['pinia'],
  setup(nuxtApp) {
    const pinia = nuxtApp.$pinia as Pinia
    pinia.use(piniaPluginPersistedstate)
  },
})
