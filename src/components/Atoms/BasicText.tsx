import { css } from '@emotion/react';
import React from 'react';

interface BasicTextProps {
    text: string;
    size: 'Xsmall' | 'small' | 'medium' | 'large';
}

const TextSizes = {
    Xsmall: '10px',
    small: '14px',
    medium: '16px',
    large: '18px',
};

export const BasicText = ({ text, size }: BasicTextProps) => {
    const TextSizeStyle = css`
        font-size: ${TextSizes[size]};
    `;

    return <p css={TextSizeStyle}>{text}</p>;
};
