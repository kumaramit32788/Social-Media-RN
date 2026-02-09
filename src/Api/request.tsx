import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '@env'
import { store } from '../Store'

/* ===========================
   AXIOS INSTANCE
=========================== */

const request = axios.create({
  baseURL: BASE_URL || 'http://localhost:4000/api',
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

/* ===========================
   REQUEST INTERCEPTOR
=========================== */

request.interceptors.request.use(
  (config: any) => {
    // Only attach token when auth === true
    if (config.withAuth === true) {
      const token = store.getState().auth?.token

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

/* ===========================
   RESPONSE INTERCEPTOR
=========================== */

request.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const status = error.response?.status
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong'

    // Global auth failure handling
    if (status === 401) {
      await AsyncStorage.removeItem('token')

      // Optional: dispatch logout
      // store.dispatch(logout())
    }

    return Promise.reject({
      status,
      message,
    })
  }
)

export default request
