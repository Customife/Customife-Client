import { css } from '@emotion/react';
import React from 'react';

export const MilestoneBox = () => {
    return (
        <div>
            <div css={divStyle}></div>
        </div>
    );
};

const divStyle = css`
    border: 1px solid #a0a096;
    border-radius: 10px;

    display: flex;
    align-items: flex-start;

    width: 100%;
`;
