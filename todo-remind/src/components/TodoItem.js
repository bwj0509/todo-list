import React, { useContext } from 'react';
import styled, { css } from 'styled-components'
import { MdDone, MdDelete } from 'react-icons/md'
import { TodoDispatchContext } from '../TodoContext';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color:#ff6b6b;
    }
    display: none;
`
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover{
        ${Remove}{
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.done &&
        css`
        border: 1px solid #38d9a9;
        color : #38d9a9;
    `
    }
`
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props =>
        props.done &&
        css`
        color:#ced4da;
    `
    }
`


function TodoItem({ id, done, text, fullDate }) {
    const dispatch = useContext(TodoDispatchContext);
    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id
        })
    }
    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id
        })
    }

    const showDay = (e) => {
        const fullDates = new Date(fullDate)
        const year = fullDates.getFullYear();
        const month = fullDates.getMonth() + 1;
        const date = fullDates.getDate();
        const hour = fullDates.getHours();
        const minute = fullDates.getMinutes();
        const second = fullDates.getSeconds();
        alert(`작성날짜는 ${year}년 ${month}월 ${date}일 ${hour}:${minute}:${second} 입니다.`)
    }
    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
            <Text done={done} onClick={showDay}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    )
}

export default React.memo(TodoItem)
//Wed Apr 06 2022 21:17:55 GMT+0900 (한국 표준시)