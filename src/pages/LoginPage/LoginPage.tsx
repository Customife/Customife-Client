import React from 'react';

import { LoginForm, Title } from '../../components';
import { PageStyle } from '../../styles';

export const LoginPage = () => {
    return (
        <div css={PageStyle}>
            <Title name="Login" />
            <LoginForm />
        </div>
    );
};
