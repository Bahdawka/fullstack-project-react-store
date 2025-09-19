import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import type { RootState } from '../store'
import type { PostInterface } from '../../types/Post.interface'

interface PostStateInterface {
  posts: PostInterface[]
  isLoading: boolean
  error: string | null
}

const initialState: PostStateInterface = {
  posts: [],
  error: null,
  isLoading: false
}

export const fetchAllPosts = createAsyncThunk('post/fetchPosts', async (url: string, { rejectWithValue }) => {
  try {
    const response = await axios.get<PostInterface[]>(url)
    if (response.status !== 200) {
      throw new Error('Error: Failed to fetch posts with status' + response.status)
    }
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    return rejectWithValue(axiosError.message)
  }
})

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    })
    builder.addCase(fetchAllPosts.rejected, (state, action) => {
      state.isLoading = false
      if (action.payload instanceof Error) {
        state.error = action.payload.message
      } else {
        state.error = 'An unknown error occured'
      }
    })
  }
})

export const selectPosts = (state: RootState) => state.posts.posts
export const selectPostsLoading = (state: RootState) => state.posts.isLoading
export const selectPostsError = (state: RootState) => state.posts.error

export default postSlice.reducer