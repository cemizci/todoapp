import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PrioritySelect from "./PrioritySelect"

const TodoForm = ({ onAddTodo }) => {

  const [inputValue,setInputValue] = useState("");
  const [priority, setPriority] = useState('orta');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim() === '') return;

    onAddTodo(inputValue, priority);
    setInputValue('');
    setPriority('orta')
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(e);
    }
  };

  return (
     <div className="mb-8">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Yeni bir görev ekle..."
            className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-lg"
          />
          
          <PrioritySelect
            value={priority}
            onChange={setPriority}
          />
          
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
            Ekle
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoForm