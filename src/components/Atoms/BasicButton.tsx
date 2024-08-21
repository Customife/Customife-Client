import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

interface BasicButtonProps {
    type: 'text' | 'image';
    imageUrl?: string;
    text: string;
    onClick?: () => void;
    style?: SerializedStyles;
}

export const BasicButton = ({ type, imageUrl, text, onClick, style }: BasicButtonProps) => {
    return (
        <button css={[BasicButtonStyle, style]} onClick={onClick}>
            {type === 'text' && text}
            {type === 'image' && <img src={imageUrl} />}
        </button>
    );
};

const BasicButtonStyle = css`
    background: none;
    border: none;
`;
