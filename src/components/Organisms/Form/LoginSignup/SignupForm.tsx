import React from 'react';

import { BasicInput } from '../../..';

const Colors = {
    gray: 'rgb(238, 238, 238)',
    green: 'rgb(118, 171, 174)',
};

export const SignupForm = () => {
    return (
        <form method="post">
            <BasicInput type="email" name="email" placeholder="이메일" color={Colors.gray} />
            <BasicInput type="text" name="nickname" placeholder="닉네임" color={Colors.gray} />
            <BasicInput type="password" name="password" placeholder="비밀번호" color={Colors.gray} />
            <BasicInput type="password" name="password_check" placeholder="비밀번호 확인" color={Colors.gray} />
            <BasicInput type="submit" value="회원가입" color={Colors.green} />
        </form>
    );
};
