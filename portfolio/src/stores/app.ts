import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const configElement = document.getElementById('config') as HTMLElement
  const mappedConfig = JSON.parse(configElement.innerHTML)
  const mappedUISchema = JSON.parse(mappedConfig.settings.UISchema)
  const mappedFormSettings = JSON.parse(mappedConfig.settings.FormData)
  delete mappedConfig.settings.UISchema
  delete mappedConfig.settings.FormData

  const config = ref(mappedConfig)
  const uiSchema = ref(mappedUISchema)
  const formSettings = ref(mappedFormSettings)
  const campaignID = ref(config.value.campaignID)

  return {
    config,
    uiSchema,
    formSettings,
    campaignID
  }
})
