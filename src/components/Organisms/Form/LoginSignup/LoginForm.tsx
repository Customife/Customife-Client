import { css } from '@emotion/react';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BasicButton, BasicInput } from '../../..';

export const LoginForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const changeUserEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value);
    }, []);

    const changeUserPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value);
    }, []);

    const navigate = useNavigate();

    const login = async () => {
        const request = {
            userEmail: userEmail,
            userPassword: userPassword,
        };

        await axios
            .post('http://localhost:8080/user/login', request)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userEmail', response.data.userEmail);
                navigate('/main');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <form method="post">
                <BasicInput
                    type="email"
                    name="email"
                    placeholder="이메일"
                    onChange={changeUserEmail}
                    color="rgb(238, 238, 238)"
                />
                <BasicInput
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    onChange={changeUserPassword}
                    color="rgb(238, 238, 238)"
                />
            </form>
            <BasicButton type="text" text="로그인" onClick={login} />
        </div>
    );
};
