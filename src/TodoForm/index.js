import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTextTarea, setNewTextTarea] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTextTarea);
        setOpenModal(false);
    };
    
    const onChange = (event) => {
        setNewTextTarea(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe una nueva tarea</label>
            <textarea 
                placeholder='Despertarme a las 8 de la manana el martes'
                value={newTextTarea}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    className='TodoForm-button TodoForm-button--'
                >Agregar</button>
            </div>
        </form>
    );
};

export { TodoForm };