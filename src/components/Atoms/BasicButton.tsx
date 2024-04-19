import { css } from '@emotion/react';
import React from 'react';

interface BasicButtonProps {
    type: 'text' | 'image';
    imageUrl?: string;
    text: string;
    onClick?: () => void;
}

export const BasicButton = ({ type, imageUrl, text, onClick }: BasicButtonProps) => {
    return (
        <button css={BasicButtonStyle} onClick={onClick}>
            {type === 'text' && text}
            {type === 'image' && <img src={imageUrl} />}
        </button>
    );
};

const BasicButtonStyle = css`
    background: none;
    border: none;
`;
