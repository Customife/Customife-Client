import { css } from '@emotion/react';
import React from 'react';

interface BasicButtonProps {
    type: 'text' | 'image';
    imageUrl?: string;
    text: string;
}

export const BasicButton = ({ type, imageUrl, text }: BasicButtonProps) => {
    return (
        <button css={BasicButtonStyle}>
            {type === 'text' && text}
            {type === 'image' && <img src={imageUrl} />}
        </button>
    );
};

const BasicButtonStyle = css`
    background: none;
    border: none;
`;
