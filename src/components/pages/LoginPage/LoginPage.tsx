import { css } from '@emotion/react';
import React from 'react';

import { BasicTitle, LoginForm, TextDivider, LoginSignupButton, LoginSignupSocialButton } from '../../../components/';
import { CenterComponent, PageStyle } from '../../../styles';

export const LoginPage = () => {
    return (
        <div css={PageStyle}>
            <BasicTitle size="2" title="Login" />
            <div css={[CenterComponent, MarginStyle]}>
                <LoginForm />
            </div>
            <div css={[MarginStyle]}>
                <TextDivider text="또는" />
            </div>
            <div css={[CenterComponent, MarginStyle]}>
                <LoginSignupSocialButton />
            </div>
            <div css={[CenterComponent, MarginStyle]}>
                <LoginSignupButton name="Login" />
            </div>
        </div>
    );
};

const MarginStyle = css`
    margin-top: 1rem;
`;
