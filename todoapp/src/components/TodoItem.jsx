import React, { useState } from 'react';
import { Trash2, Edit2, Check, X, Circle, CheckCircle2 } from 'lucide-react';
import PriorityBadge from './PriorityBadge';

const TodoItem = ({ todo, onToggleComplete, onDeleteTodo, onEditTodo }) => {

 const [isEditing, setIsEditing] = useState(false);
 const [editText, setEditText] = useState(todo.text);

 const handleSaveEdit = () => {
    if(editText.trim() === '') return;
    onEditTodo(todo.id, editText);
    setIsEditing(false);
 }

 const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false)
 };


 const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSaveEdit();
    if (e.key === 'Escape') handleCancelEdit();
 }

  return (
    <div
      className={`group flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:shadow-md ${
        todo.completed
          ? 'bg-gray-50 border-gray-200'
          : 'bg-white border-gray-200 hover:border-purple-300'
      }`}
    >
      {/* Tamamlama butonu */}
      <button
        onClick={() => onToggleComplete(todo.id)}
        className="flex-shrink-0"
      >
        {todo.completed ? (
          <CheckCircle2 
            className="text-green-500 hover:text-green-600 transition-colors" 
            size={28} 
          />
        ) : (
          <Circle 
            className="text-gray-300 hover:text-purple-500 transition-colors" 
            size={28} 
          />
        )}
      </button>

      {/* Todo metni veya düzenleme inputu */}
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 border-2 border-purple-500 rounded-lg focus:outline-none"
            autoFocus
          />
        ) : (
          <div>
            <p
              className={`text-lg ${
                todo.completed
                  ? 'line-through text-gray-400'
                  : 'text-gray-800'
              }`}
            >
              {todo.text}
            </p>
            <PriorityBadge priority={todo.priority} />
          </div>
        )}
      </div>

      {/* Aksiyon butonları */}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
            >
              <Check size={18} />
            </button>
            <button
              onClick={handleCancelEdit}
              className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem