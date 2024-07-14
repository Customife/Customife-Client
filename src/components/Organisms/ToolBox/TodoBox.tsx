import { css } from '@emotion/react';
import React from 'react';

import { useDateContext } from '../../../hooks/DateContextHook';
import { BasicTitle } from '../../Atoms';

export const TodoBox = () => {
    const { selectedDate } = useDateContext();

    return (
        <div css={divStyle}>
            {/* <div>{selectedDate}</div> */}
            <BasicTitle size="3">{selectedDate}</BasicTitle>
        </div>
    );
};

const divStyle = css`
    width: 18vw;
    height: 42vh;
    border: 1px solid #a0a096;
    border-radius: 10px;
`;
