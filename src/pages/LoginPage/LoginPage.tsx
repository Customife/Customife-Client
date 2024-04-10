import styled from '@emotion/styled';
import React from 'react';

import { LoginForm, Title } from '../../components';
import { PageStyle } from '../../styles';

export const LoginPage = () => {
    return (
        <div css={PageStyle}>
            <Title name="Login" />
            <StyledDiv>
                <LoginForm />
            </StyledDiv>
        </div>
    );
};

const StyledDiv = styled.div`
    margin-top: 1rem;
`;
