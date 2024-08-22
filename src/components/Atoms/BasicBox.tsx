import styled from '@emotion/styled';
import React from 'react';

interface BasicBoxProps {
    size: 'Xsmall' | 'small' | 'medium' | 'large';
}

const BoxSize = {
    Xsmall: '0.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
};

export const BasicBox = ({ size }: BasicBoxProps) => {
    const BoxStyle = styled.div`
        height: ${BoxSize[size]};
    `;

    return <BoxStyle></BoxStyle>;
};
