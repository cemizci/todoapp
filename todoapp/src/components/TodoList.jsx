import TodoItem from './TodoItem';
import EmptyState from './EmptyState';

const TodoList = ({todos, 
  onToggleComplete, 
  onDeleteTodo, 
  onEditTodo,
  filter,
  searchTerm}) => {

  if(todos.length === 0){
    return <EmptyState filter={filter} searchTerm={searchTerm}/>
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </div>
  )
}

export default TodoList