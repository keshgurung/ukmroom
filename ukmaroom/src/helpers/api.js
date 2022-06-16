import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

export const login = async (data) => {
  return makeAxiosRequest('/login', data)
}

export const register = (data) => {
  return makeAxiosRequest('/register', data)
}

export const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)
  const response = await axios(config)
  return response.data
  // console.log(response.data)
}

export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
  // Config object – tells us everything special about the request
  const config = {
    method,
    url: `${baseUrl}${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    // The "payload" or the "body" of the request: the important info we send as JSON
    data,
  }
  return config
}
