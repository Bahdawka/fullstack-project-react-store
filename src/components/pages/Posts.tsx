import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPosts, selectPosts, selectPostsError, selectPostsLoading } from '../../redux/slices/postSlices'
import { useEffect } from 'react'
import type { AppDispatch } from '../../redux/store'

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const posts = useSelector(selectPosts)
  const isLoading = useSelector(selectPostsLoading)
  const error = useSelector(selectPostsError)

  useEffect(() => {
    dispatch(fetchAllPosts('https://jsonplaceholder.typicode.com/posts'))
  }, [dispatch])

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">📝 Posts</h1>
        <p className="page-subtitle">
          View all posts and their content. Total posts: {posts.length}
        </p>
      </div>

      {isLoading && <div className="loading">Loading posts...</div>}
      {error && <div className="error">Error: {error}</div>}
      
      {!isLoading && !error && !!posts.length && (
        <div className="cards-grid">
          {posts.slice(0, 20).map((post) => (
            <div key={post.id} className="card">
              <div className="card-header">
                <div className="card-icon post-id">#{post.id}</div>
                <h3 className="card-title">{post.title}</h3>
              </div>
              <div className="card-content">
                <p>{post.body}</p>
              </div>
              <div className="card-meta">
                <span className="card-author">👤 Author: {post.userId}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && !error && posts.length > 20 && (
        <div className="pagination-info">
          <p className="pagination-info-text">
            Showing first 20 posts out of {posts.length}. Total available {posts.length} posts.
          </p>
        </div>
      )}
    </div>
  )
}

export default Posts