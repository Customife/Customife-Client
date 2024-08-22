import { css } from '@emotion/react';
import React from 'react';

import { BasicBox, BasicButton } from '../../../Atoms';

export const ScheduleOrTodoButtons = () => {
    return (
        <div css={divStyle}>
            <BasicButton type={'text'} text={'스케쥴 추가'} style={buttonStyle}></BasicButton>
            <BasicBox size="Xsmall" />
            <BasicButton type={'text'} text={'투두 추가'} style={buttonStyle}></BasicButton>
        </div>
    );
};

const divStyle = css`
    width: 70%;
    // margin-top: 1rem;
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
