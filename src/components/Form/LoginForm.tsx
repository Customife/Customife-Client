import React from 'react';

import { Input } from './Input';

export const LoginForm = () => {
    return (
        <form method="post">
            <Input type="text" />
            <Input type="password" />
            <Input type="submit" />
        </form>
    );
};
