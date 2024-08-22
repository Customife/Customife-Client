import { css } from '@emotion/react';
import React from 'react';

import { useDateContext } from '../../../hooks/DateContextHook';
import { BasicTitle } from '../../Atoms';

export const TodoBox = () => {
    const { selectedDate } = useDateContext();

    const makeDateformat = (date: String) => {
        const splitedDate = date.split('-');
        const year = splitedDate[0];
        const month = splitedDate[1];
        const day = splitedDate[2];
        return `${year}년 ${month}월 ${day}일`;
    };

    return (
        <div css={divStyle}>
            <BasicTitle size="4">{makeDateformat(selectedDate)}</BasicTitle>
        </div>
    );
};

const divStyle = css`
    border: 1px solid #a0a096;
    border-radius: 10px;

    display: flex;
    align-items: flex-start;
    padding-left: 1em;
`;
