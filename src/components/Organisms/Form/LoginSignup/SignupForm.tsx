import { css } from '@emotion/react';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BasicButton, BasicInput } from '../../..';
import { LoginSignupButtonStyle } from '../../../../styles';

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
    const [userEmail, setUserEmail] = useState('');
    const [userNickName, setUserNickName] = useState('');
    const [userPassword, setUserPassword] = useState('');
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
            setUserPassword(value);

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
        [userPassword],
    );

    const validatePasswordCheck = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
    }, []);

    const changeUserEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value);
    }, []);

    const changeUserNickName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setUserNickName(event.target.value);
    }, []);

    useEffect(() => {
        if (userPassword === passwordCheck) {
            setIsPasswordCheck(true);
            setPasswordCheckErr('');
        } else {
            setIsPasswordCheck(false);
            setPasswordCheckErr(Messages.passwordCheckErr);
        }

        if (userPassword.length === 0 || passwordCheck.length === 0) {
            setIsPasswordCheck(false);
            setPasswordCheckErr('');
        }
    }, [passwordCheck]);

    const navigate = useNavigate();

    const signup = async () => {
        const request = {
            userEmail: userEmail,
            userPassword: userPassword,
            userNickName: userNickName,
        };

        await axios
            .post('http://localhost:8080/user/signup', request)
            .then((response) => {
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <form method="post" style={{ width: 'min-content' }}>
                <BasicInput
                    type="email"
                    name="email"
                    placeholder="이메일"
                    onChange={changeUserEmail}
                    style={ButtonStyle}
                />
                <BasicInput
                    type="text"
                    name="nickname"
                    placeholder="닉네임"
                    onChange={changeUserNickName}
                    style={ButtonStyle}
                />
                <BasicInput
                    type="password"
                    name="password"
                    onChange={handlePassword}
                    placeholder="비밀번호"
                    style={ButtonStyle}
                />
                <p css={textStyle(isPasswordLength)}>{Messages.passwordLength}</p>
                <p css={textStyle(isPasswordCharacter)}>{Messages.passwordCharacter}</p>
                <BasicInput
                    type="password"
                    name="password_check"
                    onChange={validatePasswordCheck}
                    placeholder="비밀번호 확인"
                    style={ButtonStyle}
                />
                <p css={textStyle(isPasswordCheck)}>{passwordCheckErr}</p>
            </form>
            <BasicButton type="text" text="회원가입" onClick={signup} style={LoginSignupButtonStyle} />
        </div>
    );
};

const textStyle = (props: boolean) => css`
    font-size: small;
    font-weight: bold;

    color: ${props ? 'rgb(19, 102, 27)' : 'rgb(219, 61, 39)'};
`;

const ButtonStyle = css`
    background-color: rgb(238, 238, 238);

    width: 60vw;
    height: 8ex;
    margin-top: 0.3rem;
    padding-left: 0.5rem;
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.5);
    border-style: solid;
    border-width: 1px;
    font-weight: 700;
`;
