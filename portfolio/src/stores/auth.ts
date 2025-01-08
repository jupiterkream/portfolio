import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import type { LoginForm, RegisterForm, OTPForm } from '@/types'
// import { logout } from '@/services'
import { useAppStore } from './app'

export const useAuthStore = defineStore('auth', () => {
  const appStore = useAppStore()
  const router = useRouter()
  const isLoggedIn = appStore.config.isAuthenticated
  const regToken = ref(null)
  const loginToken = ref(null)
  const loginForm = ref<LoginForm | undefined>({})
  const registerForm = ref<RegisterForm | undefined>({})
  const otpForm = ref<OTPForm | undefined>({
    code: null
  })
  const isRegistered = ref<boolean>(false)
  const sendOtpReponse = ref<any>(null)
  const loginResponse = ref<any>(null)
  const code = ref<any>(null)
  const resetAuth = (): void => {
    // isLoggedIn.value = false;
    loginToken.value = null
    router.push('/login')
  }

  // const userLogout = (): void => {
  //   logout(appStore.config.campaignID)
  //   resetAuth()
  // }

  //Dynamic Button name for Login, Register and OTP forms
  const buttonName = (pageName: any): string => {
    switch (pageName) {
      case 'Login':
        return 'Log in'
      case 'Register':
        return 'Register'
      case 'Verification':
        return 'Proceed'
      default:
        return 'Proceed'
    }
  }

  return {
    isLoggedIn,
    loginForm,
    registerForm,
    regToken,
    loginToken,
    loginResponse,
    sendOtpReponse,
    isRegistered,
    otpForm,
    resetAuth,
    // userLogout,
    buttonName,
    code
  }
})
