import useFetch from '../../hooks/useFetch'

interface TodoInterface {
  id: number
  title: string
  completed: boolean
}

const Todos = () => {
  const { data: todos, isLoading, error } = useFetch<TodoInterface>('https://jsonplaceholder.typicode.com/todos', 10)

  return (
    <div>
      <h1>Todo</h1>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && !!todos.length && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos