import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { BasicTitle } from '../../components';
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
            <BasicTitle size="1" title="Customife" />
        </div>
    );
};
