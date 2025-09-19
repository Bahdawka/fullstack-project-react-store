import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { UserInterface } from '../../types/User.interface'
import axios, { AxiosError } from 'axios'
import type { RootState } from '../store'


interface UserStateInterface {
  users: UserInterface[]
  isLoading: boolean
  error: string | null
}

const initialState: UserStateInterface = {
  users: [],
  error: null,
  isLoading: false
}

export const fetchAllUsers = createAsyncThunk('user/fetchUsers', async (url: string, { rejectWithValue }) => {
  try {
    const response = await axios.get<UserInterface[]>(url)
    if (response.status !== 200) {
      throw new Error('Error: Failed to fetch users with status' + response.status)
    }
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    return rejectWithValue(axiosError.message)
  }
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.users = action.payload
    })
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.isLoading = false
      if (action.payload instanceof Error) {
        state.error = action.payload.message
      } else {
        state.error = 'An unknown error occured'
      }
    })
  }
})

export const selectUsers = (state: RootState) => state.users.users
export const selectUsersLoading = (state: RootState) => state.users.isLoading
export const selectUsersError = (state: RootState) => state.users.error

export default userSlice.reducer