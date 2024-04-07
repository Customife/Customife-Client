import React from 'react';

interface InputProps {
    type: String;
}

export const Input = ({ type }: InputProps) => {
    if (type === 'password') {
        return (
            <div>
                <input type="password" name="password" placeholder="비밀번호"></input>
            </div>
        );
    }
    if (type === 'submit') {
        return (
            <div>
                <input type="submit" value="로그인"></input>
            </div>
        );
    }
    return (
        <div>
            <input type="text" name="username" placeholder="이메일"></input>
        </div>
    );
};
