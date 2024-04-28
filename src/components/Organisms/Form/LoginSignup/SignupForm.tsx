import { css } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react';

import { BasicInput } from '../../..';

const Colors = {
    gray: 'rgb(238, 238, 238)',
    green: 'rgb(118, 171, 174)',
};

const Messages = {
    passwordLength: '비밀번호는 8자리 이상이어야 합니다.',
    passwordCharacter: '비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.',
    passwordCheckErr: '비밀번호가 다릅니다.',
};

export const SignupForm = () => {
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [isPasswordLength, setIsPasswordLength] = useState(false);
    const [isPasswordCharacter, setIsPasswordCharacter] = useState(false);
    const [isPasswordCheck, setIsPasswordCheck] = useState(false);

    const [passwordCheckErr, setPasswordCheckErr] = useState('');

    const handlePassword = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            const lengthRegex = /^.{8,}$/;
            const characterRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
            setPassword(value);

            if (!lengthRegex.test(value)) {
                setIsPasswordLength(false);
            } else {
                setIsPasswordLength(true);
            }

            if (!characterRegex.test(value)) {
                setIsPasswordCharacter(false);
            } else {
                setIsPasswordCharacter(true);
            }
        },
        [password],
    );

    const validatePasswordCheck = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
    }, []);

    useEffect(() => {
        if (password === passwordCheck) {
            setIsPasswordCheck(true);
            setPasswordCheckErr('');
        } else {
            setIsPasswordCheck(false);
            setPasswordCheckErr(Messages.passwordCheckErr);
        }

        if (password.length === 0 || passwordCheck.length === 0) {
            setIsPasswordCheck(false);
            setPasswordCheckErr('');
        }
    }, [passwordCheck]);

    return (
        <form method="post" style={{ width: 'min-content' }}>
            <BasicInput type="email" name="email" placeholder="이메일" color={Colors.gray} />
            <BasicInput type="text" name="nickname" placeholder="닉네임" color={Colors.gray} />
            <BasicInput
                type="password"
                name="password"
                onChange={handlePassword}
                placeholder="비밀번호"
                color={Colors.gray}
            />
            <p css={textStyle(isPasswordLength)}>{Messages.passwordLength}</p>
            <p css={textStyle(isPasswordCharacter)}>{Messages.passwordCharacter}</p>
            <BasicInput
                type="password"
                name="password_check"
                onChange={validatePasswordCheck}
                placeholder="비밀번호 확인"
                color={Colors.gray}
            />
            <p css={textStyle(isPasswordCheck)}>{passwordCheckErr}</p>
            <BasicInput type="submit" value="회원가입" color={Colors.green} />
        </form>
    );
};

const textStyle = (props: boolean) => css`
    font-size: small;
    font-weight: bold;

    color: ${props ? 'rgb(19, 102, 27)' : 'rgb(219, 61, 39)'};
`;
