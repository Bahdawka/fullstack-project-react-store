import useFetch from '../../hooks/useFetch'

interface TodoInterface {
  id: number
  title: string
  completed: boolean
  userId: number
}

const Todos = () => {
  const { data: todos, isLoading, error } = useFetch<TodoInterface>('https://jsonplaceholder.typicode.com/todos')

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">📋 Task List</h1>
        <p className="page-subtitle">
          All tasks in the system. Total tasks: {todos?.length || 0}
        </p>
      </div>

      {isLoading && <div className="loading">Loading tasks...</div>}
      {error && <div className="error">Error: {error}</div>}
      
      {!isLoading && !error && !!todos?.length && (
        <div className="cards-grid">
          {todos.slice(0, 30).map((todo) => (
            <div key={todo.id} className="card">
              <div className="card-header">
                <div className="card-icon todo-icon">
                  {todo.completed ? '✅' : '⏳'}
                </div>
                <h3 className="card-title">{todo.title}</h3>
              </div>
              <div className="card-meta">
                <span className="card-author">👤 User: {todo.userId}</span>
                <span className={`card-status ${todo.completed ? 'status-completed' : 'status-pending'}`}>
                  {todo.completed ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && !error && todos && todos.length > 30 && (
        <div className="pagination-info">
          <p className="pagination-info-text">
            Showing first 30 tasks out of {todos.length}. Total available {todos.length} tasks.
          </p>
        </div>
      )}
    </div>
  )
}

export default Todos