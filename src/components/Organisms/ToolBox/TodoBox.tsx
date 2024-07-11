import { css } from '@emotion/react';
import React from 'react';

export const TodoBox = () => {
    return (
        <div>
            <div css={divStyle}></div>
        </div>
    );
};

const divStyle = css`
    width: 18vw;
    height: 42vh;
    border: 1px solid #a0a096;
    border-radius: 10px;
`;
