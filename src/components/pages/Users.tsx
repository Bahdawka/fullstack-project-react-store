import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../redux/store'
import { fetchAllUsers, selectUsers, selectUsersError, selectUsersLoading } from '../../redux/slices/userSlice'
import { useEffect } from 'react'

const Users = () => {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector(selectUsers)
  const isLoading = useSelector(selectUsersLoading)
  const error = useSelector(selectUsersError)

  useEffect(() => {
    dispatch(fetchAllUsers('https://jsonplaceholder.typicode.com/users'))
  }, [dispatch])

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">👥 Users</h1>
        <p className="page-subtitle">
          View profiles of all system users. Total users: {users.length}
        </p>
      </div>

      {isLoading && <div className="loading">Loading users...</div>}
      {error && <div className="error">Error: {error}</div>}
      
      {!isLoading && !error && !!users.length && (
        <div className="cards-grid">
          {users.map((user) => (
            <div key={user.id} className="card user-card">
              <div className="card-header">
                <div className="card-icon user-icon">👤</div>
                <h3 className="card-title">{user.name}</h3>
              </div>
              <div className="card-content">
                <div className="user-info">
                  <span className="user-info-icon">📧</span>
                  <span>{user.email}</span>
                </div>
                <div className="user-info">
                  <span className="user-info-icon">📞</span>
                  <span>{user.phone}</span>
                </div>
                <div className="user-info">
                  <span className="user-info-icon">🌐</span>
                  <span>{user.website || 'Not specified'}</span>
                </div>
                <div className="user-info">
                  <span className="user-info-icon">👤</span>
                  <span>@{user.username}</span>
                </div>
              </div>
              <div className="card-meta">
                <span className="card-author">ID: {user.id}</span>
                <span className="card-status status-completed">Active</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Users