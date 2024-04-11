import { css } from '@emotion/react';
import React from 'react';

import { BasicInput } from '../..';

export const LoginForm = () => {
    return (
        <form method="post">
            <BasicInput type="email" name="email" placeholder="이메일" color="rgb(238, 238, 238)" />
            <BasicInput type="password" name="password" placeholder="비밀번호" color="rgb(238, 238, 238)" />
            <BasicInput type="submit" value="로그인" color="rgb(118, 171, 174)" />
        </form>
    );
};
