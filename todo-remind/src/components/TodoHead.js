import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components'
import { TodoStateContext } from '../TodoContext';

const TodoHeadBlcok = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;
    h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
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
    const state = useContext(TodoStateContext);
    const undone = state.filter((todo) => todo.done == false).length

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    const day_convert = ['일', '월', '화', '수', '목', '금', '토']
    return (
        <TodoHeadBlcok>
            <h1>{year}년 {month}월 {date}일</h1>
            <div className='day'>{day_convert[day]}요일</div>
            <div className='tasks-left'>할 일 {undone}개 남음</div>
        </TodoHeadBlcok>
    );
}

export default TodoHead;