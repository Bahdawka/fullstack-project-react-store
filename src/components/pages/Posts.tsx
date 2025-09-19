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
    <div>
      <h1>Posts</h1>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && !!posts.length && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <small>Author ID: {post.userId}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Posts