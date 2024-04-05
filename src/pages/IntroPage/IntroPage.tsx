import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Title } from '../../components';

export const IntroPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timeout = setTimeout(() => navigate('/login'), 3000);
        return () => {
            clearTimeout(timeout);
        };
    });

    return <Title name="Customife"></Title>;
};
