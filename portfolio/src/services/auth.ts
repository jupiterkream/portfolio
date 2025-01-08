import { http } from '@/utilities/http-client'
import { type AxiosResponse } from 'axios'
import type { makeAPI } from '@/types/globals'
import type { LoginData } from '@/types/auth'
import axios from 'axios'

export const sendOtp: makeAPI<{ id: string }, LoginData> = (params) => {
  return http.post(`/api/bpi/next/sendotp/${params.id}`, params).then((r: AxiosResponse) => r.data)
}

// TODO ADD Register and Verify Otp
export const register: makeAPI<{ id: string }, any> = (params) => {
  return http.post(`/api/bpi/next/register/${params.id}`, params).then((r: AxiosResponse) => r.data)
}

export const verifyOtp: makeAPI<{ id: string }, any> = (params) => {
  return http.post(`/api/bpi/next/login/${params.id}`, params).then((r: AxiosResponse) => r.data)
}

export const logout = async (id: string) => {
  const response = await axios.post(`/api/bpi/next/logout/${id}`)
  return response.data
}

export const getUserDetails = async (id: string) => {
  const response = await axios.get(`/api/bpi/next/userdetails/${id}`)
  return response.data
}
