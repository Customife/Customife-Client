import React from 'react';

import { BasicButtonStyle } from '../../styles/components/Button/BasicButtonStyle';

interface TextButtonProps {
    text: string;
}

export const TextButton = ({ text }: TextButtonProps) => {
    return <button css={BasicButtonStyle}>{text}</button>;
};
