import { css } from '@emotion/react';
import React from 'react';

import { BasicTitle, SignupForm, LoginSignupButton } from '../..';
import { PageStyle, CenterComponent } from '../../../styles';

export const SignupPage = () => {
    return (
        <div css={PageStyle}>
            <BasicTitle size="2">Signup</BasicTitle>
            <div css={[CenterComponent, MarginStyle]}>
                <SignupForm />
            </div>
            <div css={[CenterComponent, MarginStyle]}>
                <LoginSignupButton name="Signup" />
            </div>
        </div>
    );
};

const MarginStyle = css`
    margin-top: 1rem;
`;
