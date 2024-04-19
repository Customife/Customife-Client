import { css } from '@emotion/react';
import React from 'react';

import { BasicTitle, LoginForm, TextDivider, LoginSignupButton, LoginSignupSocialButton, BasicButton } from '../..';
import { CenterComponent, PageStyle } from '../../../styles';

export const LoginPage = () => {
    return (
        <div css={PageStyle}>
            <BasicTitle size="2">Login</BasicTitle>
            <div css={[CenterComponent, MarginStyle]}>
                <LoginForm />
            </div>
            <div css={[MarginStyle]}>
                <TextDivider text="또는" />
            </div>
            <div css={[CenterComponent, MarginStyle]}>
                <LoginSignupSocialButton />
            </div>
            <div css={[CenterComponent, MarginStyle, FlexDirectionColumn]}>
                <BasicButton type="text" text="아이디/비밀번호 찾기"></BasicButton>
                <LoginSignupButton name="Login" />
            </div>
        </div>
    );
};

const MarginStyle = css`
    margin-top: 1rem;
`;

const FlexDirectionColumn = css`
    flex-direction: column;
`;
