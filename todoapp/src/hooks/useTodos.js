import { useState, useEffect } from 'react';

export function useTodos(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos)
    }, []);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    // Yeni todo ekleme
    const addTodo = (text, priority) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: priority,
            createdAt: new Date().toISOString()
        };

        setTodos([newTodo, ...todos])
    }


    // Todo silme
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    // Todo tamamlama durumunu değiştirme
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed } : todo
        ))
    }

    // Todo düzenleme
    const editTodo = (id, newText) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, text: newText} : todo
        ))
    }

    return {todos, addTodo, deleteTodo, toggleComplete, editTodo}
}