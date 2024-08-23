import { css } from '@emotion/react';
import React from 'react';

import { BasicBox, BasicTitle } from '../../../Atoms';
import { ScheduleOrTodoButtons } from '../../../Molecules';

export const EventAdd = () => {
    return (
        <div css={divStyle}>
            <BasicBox size="small" />
            <BasicTitle size="4">이벤트 추가</BasicTitle>
            <BasicBox size="medium" />
            <ScheduleOrTodoButtons />
            <BasicBox size="medium" />
        </div>
    );
};

const divStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
