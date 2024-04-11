import { css } from '@emotion/react';
import React from 'react';

import { InputStyle } from '../../styles';

interface BasicInputProps {
    type: string;
    name?: string;
    placeholder?: string;
    value?: string;
    color: string;
}

export const BasicInput = ({ type, name, placeholder, value, color }: BasicInputProps) => {
    const InputColorStyle = css`
        background-color: ${color};
    `;

    return (
        <div>
            <input
                css={[InputStyle, InputColorStyle]}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};
