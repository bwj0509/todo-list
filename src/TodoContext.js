import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: '리액트 공부하기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
]


function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter((todo) => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();
//context를 두개를 만들어서 state, dispatch를 따로 관리하므로 랜더링되는 것을 줄일 수 있다.

export function TodoProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialTodos);
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




// 아래 방법을 이용해서 커스텀HOOK을 만들어 줄 수 있다.

// export function useTodoState() {
//     const context = useContext(TodoStateContext);
//     if (!context) {
//         throw new Error('cannot find TodoProvider') // 오류 핸들링
//     }
//     return useContext(TodoStateContext)
// }

// export function useTodoDispatch() {
//     const context = useContext(TodoDispatchContext);
//     if (!context) {
//         throw new Error('cannot find TodoProvider')
//     }
//     return useContext(TodoDispatchContext)
// }

// export function useTodoNextId() {
//     const context = useContext(TodoNextIdContext);
//     if (!context) {
//         throw new Error('cannot find TodoProvider')
//     }
//     return useContext(TodoNextIdContext);
// }