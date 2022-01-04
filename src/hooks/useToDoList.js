import { useReducer } from 'react';
import CryptoES from 'crypto-es';

const inicialState = []

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item]; //retorna um array q é a concatenação atual do array (state) com o novo q está chegando
        case 'CHECK':
            return state.map(item => {
                if (item.id === action.id) {
                    return { ...item, check: !item.check };
                } else {
                    return item;
                }
            })
        case 'DEL':
            return state.filter(item => {
                return item.id !== action.id;
            })
        default:
            return state;
    }
};


const useToDoList = () => {
    const [state, dispatch] = useReducer(reducer, inicialState);

    const add = (title) => {
        dispatch({
            type: 'ADD',
            item: {
                id: CryptoES.SHA256(title).toString(),
                title: title,
                check: false,
            },
        });
    };

    const check = (id) => {
        dispatch({
            type: 'CHECK',
            id: id
        });
    };

    const remove = (id) => {
        dispatch({
            type: 'DEL',
            id: id
        });
    };

    return [state, add, check, remove];

}

export default useToDoList; 