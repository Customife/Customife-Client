import { css } from '@emotion/react';
import React from 'react';

interface BasicDividerProps {
    width: string;
}

export const BasicDivider = ({ width }: BasicDividerProps) => {
    const DividerWidth = css`
        width: ${width};
    `;
    return <hr css={DividerWidth} />;
};
