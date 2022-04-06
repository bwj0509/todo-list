import React from 'react';
import { useRef } from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '빨래하기',
        done: true
    },
    {
        id: 2,
        text: '청소하기',
        done: true
    },
    {
        id: 3,
        text: '공부하기',
        done: false
    },
    {
        id: 4,
        text: '택배보내기',
        done: false
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
    console.log(state)
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