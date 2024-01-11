import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

// Esto comentado se ingresa en consola a LocalStorage para el ejemplo
// const defaultTodos = [
//     {text: 'Hacer comida semanal', completed: true},
//     {text: 'Tomar curso de introduccion a React.js', completed: false},
//     {text: 'Llorar con los amigos', completed: false},
//     {text: 'Leer un libro completo', completed: false},
//     {text: 'Salir en bicicleta', completed: true},
// ];

// const stringifiedTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', stringifiedTodos);

function App() {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => todo.completed === true).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();

        return todoText.includes(searchText);
    });

    const makeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };
    
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

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
                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => makeTodo(todo.text)}   
                        onDelete={() => deleteTodo(todo.text)}   
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
};

export default App;