import { css } from '@emotion/react';
import React from 'react';

interface BasicTextProps {
    size: 'Xsmall' | 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

const TextSizes = {
    Xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
};

export const BasicText = ({ size, children }: BasicTextProps) => {
    const TextSizeStyle = css`
        font-size: ${TextSizes[size]};
    `;

    return <p css={TextSizeStyle}>{children}</p>;
};
