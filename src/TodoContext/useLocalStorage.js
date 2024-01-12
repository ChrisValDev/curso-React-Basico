import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
        
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if(!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                };
        
                setLoading(false);
            } catch(error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    const saveItem = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems));
        setItem(newItems);
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
};

export { useLocalStorage };

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