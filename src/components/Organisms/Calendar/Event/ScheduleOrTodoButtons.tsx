import { css } from '@emotion/react';
import React from 'react';

import { BasicButton } from '../../../Atoms';

export const ScheduleOrTodoButtons = () => {
    return (
        <div>
            <BasicButton type={'text'} text={'스케쥴 추가'} style={buttonStyle}></BasicButton>
            <BasicButton type={'text'} text={'투두 추가'}></BasicButton>
        </div>
    );
};

const buttonStyle = css`
    background-color: 76ABAE;
    border: 1px;
`;
