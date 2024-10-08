import { css } from '@emotion/react';
import React from 'react';

import { useScheduleTodoContext } from '../../../../hooks';
import { BasicBox, BasicButton } from '../../../Atoms';

export const ScheduleOrTodoButtons = () => {
    const { setScheduleOrTodo } = useScheduleTodoContext();

    const addSchedule = () => {
        setScheduleOrTodo('schedule');
    };

    const addTodo = () => {
        setScheduleOrTodo('todo');
    };

    return (
        <div css={divStyle}>
            <BasicButton type={'text'} text={'스케쥴 추가'} style={buttonStyle} onClick={addSchedule}></BasicButton>
            <BasicBox size="Xsmall" />
            <BasicButton type={'text'} text={'투두 추가'} style={buttonStyle} onClick={addTodo}></BasicButton>
        </div>
    );
};

const divStyle = css`
    width: 70%;
`;

const buttonStyle = css`
    width: 100%;
    height: 8ex;

    font-weight: bold;
    font-size: 1rm;

    background-color: #76abae;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
`;
