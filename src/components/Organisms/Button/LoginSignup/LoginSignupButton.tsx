import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BasicButton, BasicText } from '../../../Atoms';

interface LoginSignupButtonProps {
    name: 'Login' | 'Signup';
    text?: string;
    buttonText?: string;
    buttonUrl?: '/login' | '/signup';
}

const LoginButton: LoginSignupButtonProps = {
    name: 'Login',
    text: '아직 회원이 아니신가요?',
    buttonText: '회원가입',
    buttonUrl: '/signup',
};

const SignupButton: LoginSignupButtonProps = {
    name: 'Signup',
    text: '이미 계정이 있으신가요?',
    buttonText: '로그인',
    buttonUrl: '/login',
};

export const LoginSignupButton = ({ name }: LoginSignupButtonProps) => {
    let Button: LoginSignupButtonProps = LoginButton;
    if (name === 'Signup') {
        Button = SignupButton;
    }

    const navigate = useNavigate();
    const handleButton = () => {
        navigate(Button.buttonUrl as string);
    };

    return (
        <div>
            <div css={DivStyle}>
                <BasicText size="small">{Button.text}</BasicText>
                <BasicButton type="text" text={Button.buttonText as string} onClick={handleButton}></BasicButton>
            </div>
        </div>
    );
};

const DivStyle = css`
    display: flex;
    align-items: center;
`;
