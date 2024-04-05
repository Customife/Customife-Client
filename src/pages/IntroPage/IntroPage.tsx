import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '../../components';

export const IntroPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timeout = setTimeout(() => navigate('/login'), 3000);
        return () => {
            clearTimeout(timeout);
        };
    });

    return <Logo name="Customife"></Logo>;
};
