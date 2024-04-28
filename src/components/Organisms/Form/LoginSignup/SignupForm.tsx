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
        } else {
            setIsPasswordCheck(false);
        }
    }, [passwordCheck]);

    return (
        <form method="post">
            <BasicInput type="email" name="email" placeholder="이메일" color={Colors.gray} />
            <BasicInput type="text" name="nickname" placeholder="닉네임" color={Colors.gray} />
            <BasicInput
                type="password"
                name="password"
                onChange={handlePassword}
                placeholder="비밀번호"
                color={Colors.gray}
            />
            <p css={isPasswordLength ? SuccessStyle : FailedStyle}>{Messages.passwordLength}</p>
            <p css={isPasswordCharacter ? SuccessStyle : FailedStyle}>{Messages.passwordCharacter}</p>
            <BasicInput
                type="password"
                name="password_check"
                onChange={validatePasswordCheck}
                placeholder="비밀번호 확인"
                color={Colors.gray}
            />
            <p css={isPasswordCheck ? SuccessStyle : FailedStyle}>{Messages.passwordCheckErr}</p>
            <BasicInput type="submit" value="회원가입" color={Colors.green} />
        </form>
    );
};

const SuccessStyle = css`
    color: #13661b;
`;

const FailedStyle = css`
    color: #db3d27;
`;
