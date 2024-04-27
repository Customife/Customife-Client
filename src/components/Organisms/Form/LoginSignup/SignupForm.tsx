import React, { useCallback, useEffect, useState } from 'react';

import { BasicInput } from '../../..';

const Colors = {
    gray: 'rgb(238, 238, 238)',
    green: 'rgb(118, 171, 174)',
};

export const SignupForm = () => {
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [isPasswordCheck, setIsPasswordCheck] = useState(false);

    const [passwordErrMessage, setPasswordErrMessage] = useState('');

    const handlePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);
    }, []);

    const validatePasswordCheck = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
    }, []);

    useEffect(() => {
        if (password === passwordCheck) {
            setIsPasswordCheck(true);
            setPasswordErrMessage('');
        } else {
            setIsPasswordCheck(false);
            setPasswordErrMessage('비밀번호가 다릅니다.');
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
            <BasicInput
                type="password"
                name="password_check"
                onChange={validatePasswordCheck}
                placeholder="비밀번호 확인"
                color={Colors.gray}
            />
            <p>{!isPasswordCheck && passwordErrMessage}</p>
            <BasicInput type="submit" value="회원가입" color={Colors.green} />
        </form>
    );
};
