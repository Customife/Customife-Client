import React from 'react';

interface BasicTextProps {
    text: string;
}

export const BasicText = ({ text }: BasicTextProps) => {
    return <p>{text}</p>;
};
