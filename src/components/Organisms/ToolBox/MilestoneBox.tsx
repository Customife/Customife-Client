import { css } from '@emotion/react';
import React from 'react';

export const MilestoneBox = () => {
    return (
        <div>
            <div css={StyledDiv}></div>
        </div>
    );
};

const StyledDiv = css`
    width: 18vw;
    height: 42vh;
    border: 1px solid #a0a096;
    border-radius: 10px;
`;
