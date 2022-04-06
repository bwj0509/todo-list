import React from 'react';
import { useRef } from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '빨래하기',
        done: true,
        fullDate: 'Wed Apr 05 2022 21:12:54 GMT+0900 (한국 표준시)'

    },
    {
        id: 2,
        text: '청소하기',
        done: true,
        fullDate: 'Wed Apr 05 2022 21:12:54 GMT+0900 (한국 표준시)'
    },
    {
        id: 3,
        text: '공부하기',
        done: false,
        fullDate: 'Wed Apr 05 2022 21:12:54 GMT+0900 (한국 표준시)'
    },
    {
        id: 4,
        text: '택배보내기',
        done: false,
        fullDate: 'Wed Apr 05 2022 21:12:54 GMT+0900 (한국 표준시)'
    }
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo)
        case 'TOGGLE':
            console.log('토글작동')
            return state.map((todo) => todo.id == action.id ? { ...todo, done: !todo.done } : todo)
        case 'REMOVE':
            return state.filter((todo) => action.id !== todo.id)
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();


function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export default TodoProvider;