import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface AuthStateInterface {
  isLoggedIn: boolean
}

const initialState = {
  isLoggedIn: true,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    }
  }
})

export const { login, logout } = authSlice.actions
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export default authSlice.reducer