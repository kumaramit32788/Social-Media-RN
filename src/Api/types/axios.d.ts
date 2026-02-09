import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    auth?: boolean
  }
}
