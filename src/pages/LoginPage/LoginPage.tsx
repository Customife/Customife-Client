import styled from '@emotion/styled';
import React from 'react';

import { LoginForm, Title, BasicDivider } from '../../components';
import { PageStyle } from '../../styles';

export const LoginPage = () => {
    return (
        <div css={PageStyle}>
            <Title name="Login" />
            <StyledDiv>
                <LoginForm />
            </StyledDiv>
            <StyledDiv>
                <BasicDivider title={'또는'} />
            </StyledDiv>
        </div>
    );
};

const StyledDiv = styled.div`
    margin-top: 1rem;
`;
