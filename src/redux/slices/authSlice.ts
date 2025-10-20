import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface AuthStateInterface {
  isLoggedIn: boolean
}

const getInitialAuthState = (): boolean => {
  try {
    const savedState = localStorage.getItem('isLoggedIn')
    return savedState !== null ? JSON.parse(savedState) : true
  } catch (error) {
    console.warn('Failed to parse auth state from localStorage:', error)
    return true
  }
}

const initialState: AuthStateInterface = {
  isLoggedIn: getInitialAuthState(),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true')
    },
    logout: (state) => {
      state.isLoggedIn = false
      localStorage.setItem('isLoggedIn', 'false')
    }
  }
})

export const { login, logout } = authSlice.actions
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export default authSlice.reducer