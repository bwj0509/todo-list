import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components'
import { TodoStateContext } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

function TodoList() {

    const state = useContext(TodoStateContext)

    return (
        <TodoListBlock>
            {state.map((todo) =>
                <TodoItem done={todo.done} text={todo.text} id={todo.id} key={todo.id} fullDate={todo.fullDate}></TodoItem>
            )}
        </TodoListBlock>
    )
}

export default TodoList;