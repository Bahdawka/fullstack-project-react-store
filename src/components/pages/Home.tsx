import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import type { AppDispatch } from '../../redux/store'
import { fetchAllPosts, selectPosts, selectPostsLoading } from '../../redux/slices/postSlices'
import { fetchAllUsers, selectUsers, selectUsersLoading } from '../../redux/slices/userSlice'
import useFetch from '../../hooks/useFetch'

interface TodoInterface {
  id: number
  title: string
  completed: boolean
}

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const posts = useSelector(selectPosts)
  const users = useSelector(selectUsers)
  const postsLoading = useSelector(selectPostsLoading)
  const usersLoading = useSelector(selectUsersLoading)
  
  const { data: todos, isLoading: todosLoading } = useFetch<TodoInterface>('https://jsonplaceholder.typicode.com/todos')

  useEffect(() => {
    dispatch(fetchAllPosts('https://jsonplaceholder.typicode.com/posts'))
    dispatch(fetchAllUsers('https://jsonplaceholder.typicode.com/users'))
  }, [dispatch])

  return (
    <div className="page-container">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome!</h1>
        <p className="welcome-description">
          Central dashboard with general statistics for all system sections.
        </p>
      </div>

      <div className="stats-container">
        <div className="stats-card">
          <div className="stats-icon">📝</div>
          <div className="stats-number">
            {postsLoading ? '...' : posts.length}
          </div>
          <div className="stats-label">Total Posts</div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">👥</div>
          <div className="stats-number">
            {usersLoading ? '...' : users.length}
          </div>
          <div className="stats-label">Users</div>
        </div>

        <div className="stats-card">
          <div className="stats-icon">📋</div>
          <div className="stats-number">
            {todosLoading ? '...' : todos?.length || 0}
          </div>
          <div className="stats-label">Total Tasks</div>
        </div>
      </div>

      <div className="cards-grid">
        <div className="card clickable-card" onClick={() => navigate('/posts')}>
          <div className="card-header">
            <div className="card-icon">📊</div>
            <h3 className="card-title">Posts</h3>
          </div>
          <div className="card-content">
            <p>View all posts in the system with detailed information about each post.</p>
          </div>
        </div>

        <div className="card clickable-card" onClick={() => navigate('/users')}>
          <div className="card-header">
            <div className="card-icon">👤</div>
            <h3 className="card-title">Users</h3>
          </div>
          <div className="card-content">
            <p>Information about all system users and their contact details.</p>
          </div>
        </div>

        <div className="card clickable-card" onClick={() => navigate('/products')}>
          <div className="card-header">
            <div className="card-icon">🛍️</div>
            <h3 className="card-title">Products</h3>
          </div>
          <div className="card-content">
            <p>Catalog of all products with the ability to view details and specifications.</p>
          </div>
        </div>

        <div className="card clickable-card" onClick={() => navigate('/todos')}>
          <div className="card-header">
            <div className="card-icon">📋</div>
            <h3 className="card-title">Tasks</h3>
          </div>
          <div className="card-content">
            <p>List of all tasks with the ability to view their status.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home