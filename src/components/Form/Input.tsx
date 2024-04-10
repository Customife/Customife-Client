import { css } from '@emotion/react';
import React from 'react';

import { InputStyle } from '../../styles/';

interface InputProps {
    type: string;
}

export const Input = ({ type }: InputProps) => {
    const inputType = { placeholder: '이메일' };

    if (type === 'password') {
        inputType.placeholder = '비밀번호';
    }
    if (type === 'submit') {
        inputType.placeholder = '로그인';
        return (
            <div>
                <input css={[InputStyle, SubmitColor]} type={type} value={inputType.placeholder} />
            </div>
        );
    }

    return (
        <div>
            <input css={[InputStyle, InputColor]} type={type} name={type} placeholder={inputType.placeholder} />
        </div>
    );
};

const SubmitColor = css`
    background-color: rgb(118, 171, 174);
`;

const InputColor = css`
    background-color: rgb(238, 238, 238);
`;
