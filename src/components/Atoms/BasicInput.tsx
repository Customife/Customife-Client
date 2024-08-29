import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import { InputStyle } from '../../styles';

interface BasicInputProps {
    type: string;
    name?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    style?: SerializedStyles;
}

export const BasicInput = ({ type, name, placeholder, value, onChange, style }: BasicInputProps) => {
    return (
        <div>
            <input
                css={style}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                spellCheck={false}
            />
        </div>
    );
};
