import { css } from '@emotion/react';
import React from 'react';

import { BasicBox, BasicTitle } from '../../../Atoms';
import { TodoAddInput } from '../../../Molecules';

export const TodoAdd = () => {
    return (
        <div css={divStyle}>
            <BasicBox size="small" />
            <BasicTitle size="4">투두 추가</BasicTitle>
            <BasicBox size="medium" />
            <TodoAddInput />
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
