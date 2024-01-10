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
    {text: 'Salir en bicicleta', completed: true},
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => todo.completed === true).length;
    const totalTodos = todos.length;

    console.log('Los usuarios buscan ' + searchValue);

    return (
        <>
            <TodoCounter 
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

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