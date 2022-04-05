import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoStateContext } from '../TodoContext'

const TodoHeadBlock = styled.div`
    padding: 48px 24px 32px 32px;
    border-bottom: 1px solid #e9ecef;
    h1{
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`

function TodoHead() {
    const todos = useContext(TodoStateContext)
    const undoneTasks = todos.filter((todo) => !todo.done)

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day_n = today.getDay();
    const day = ['일', '월', '화', '수', '목', '금', '토']

    return (
        <TodoHeadBlock>
            <h1>{year}년 {month}월 {date}일</h1>
            <div className='day'>{day[day_n]}요일</div>
            <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;