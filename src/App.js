import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
    {text: 'Hacer comida semanal', completed: true},
    {text: 'Tomar curso de introduccion a React.js', completed: false},
    {text: 'Llorar con los amigos', completed: false},
    {text: 'Leer un libro completo', completed: false},
];

function App() {
    return (
        <>
            <TodoCounter completed={16} total={25} />
            <TodoSearch />

            <TodoList>
                {defaultTodos.map(todo => (
                    <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}    
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;