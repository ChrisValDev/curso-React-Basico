import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    makeTodo,
    deleteTodo,
}) {
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
                {loading && <p>Estamos cargando</p>}
                {error && <p>Hubo un error inesperado</p>}
                {(!loading && searchedTodos.length == 0) && <p>Crea tu primer TODOList!</p>}
                

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

export { AppUI };