import { css } from '@emotion/react';
import React from 'react';

import { BasicInput, BasicText } from '../../../Atoms';
import { CalendarDatePicker } from '../DatePicker/CalendarDatePicker';

export const ScheduleAddInput = () => {
    return (
        <div css={DivStyle2}>
            <div css={DivStyle}>
                <BasicText size="medium">내용</BasicText>
                <div css={DivStyle3}>
                    <BasicInput type="text" placeholder="내용 입력" style={InputStyle}></BasicInput>
                </div>
            </div>
            <div css={DivStyle}>
                <BasicText size="medium">날짜</BasicText>
                <div css={DivStyle3}>
                    <CalendarDatePicker />
                </div>
            </div>
        </div>
    );
};

const DivStyle = css`
    display: flex;
`;

const DivStyle2 = css`
    width: 80%;
`;

const DivStyle3 = css`
    width: 90%;
    margin-left: 1rem;
    margin-bottom: 1rem;
`;

const InputStyle = css`
    width: 100%;
    border-width: 0 0 1px;
    &:focus-visible {
        outline: 0;
    }
`;
