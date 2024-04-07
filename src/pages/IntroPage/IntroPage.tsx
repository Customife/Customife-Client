import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Title } from '../../components';
import { PageStyle } from '../../styles';

export const IntroPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timeout = setTimeout(() => navigate('/login'), 3000);
        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <div css={PageStyle}>
            <Title name="Customife"></Title>
        </div>
    );
};
