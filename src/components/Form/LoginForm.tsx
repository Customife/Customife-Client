import { css } from '@emotion/react';
import React from 'react';

import { Input } from './Input';

export const LoginForm = () => {
    return (
        <form method="post">
            <Input type="email" />
            <Input type="password" />
            <Input type="submit" />
        </form>
    );
};
