import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import Statistics from './components/Statistics';
import { useTodos } from './hooks/useTodos';
import { getFilteredTodos } from './utils/helpers';

function App() {
  
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleComplete,
    editTodo
  } = useTodos();

  const [filter, setFilter] = useState('tumu');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTodos = getFilteredTodos(todos, filter, searchTerm);
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Header />

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <TodoForm onAddTodo={addTodo} />

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <FilterButtons
              filter={filter}
              onFilterChange={setFilter}
              totalCount={todos.length}
              activeCount={activeCount}
              completedCount={completedCount}
            />
          </div>

          <TodoList
            todos={filteredTodos}
            onToggleComplete={toggleComplete}
            onDeleteTodo={deleteTodo}
            onEditTodo={editTodo}
            filter={filter}
            searchTerm={searchTerm}
          />
        </div>

        {todos.length > 0 && (
          <Statistics
            totalCount={todos.length}
            activeCount={activeCount}
            completedCount={completedCount}
          />
        )}
      </div>
    </div>
  )
}

export default App
