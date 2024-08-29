import { css } from '@emotion/react';
import React from 'react';

import { useScheduleTodoContext } from '../../../../hooks';
import { BasicBox, BasicTitle } from '../../../Atoms';
import { ScheduleAddInput, ScheduleOrTodoButtons, TodoAddInput } from '../../../Molecules';

export const EventAdd = () => {
    const { scheduleOrTodo } = useScheduleTodoContext();

    return (
        <div css={DivStyle}>
            <BasicBox size="small" />
            {scheduleOrTodo == '' && <BasicTitle size="4">이벤트 추가</BasicTitle>}
            {scheduleOrTodo == 'todo' && <BasicTitle size="4">투두 추가</BasicTitle>}
            {scheduleOrTodo == 'schedule' && <BasicTitle size="4">스케쥴 추가</BasicTitle>}
            <BasicBox size="medium" />
            {scheduleOrTodo == '' && <ScheduleOrTodoButtons />}
            {scheduleOrTodo == 'todo' && <TodoAddInput />}
            {scheduleOrTodo == 'schedule' && <ScheduleAddInput />}
            <BasicBox size="medium" />
        </div>
    );
};

const DivStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
