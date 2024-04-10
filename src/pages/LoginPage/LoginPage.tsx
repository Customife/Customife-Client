import styled from '@emotion/styled';
import React from 'react';

import { LoginForm, Title, BasicDivider, Social } from '../../components';
import { CenterComponent, PageStyle } from '../../styles';

export const LoginPage = () => {
    return (
        <div css={PageStyle}>
            <Title name="Login" />
            <StyledDiv css={CenterComponent}>
                <LoginForm />
            </StyledDiv>
            <StyledDiv>
                <BasicDivider title={'또는'} />
            </StyledDiv>
            <StyledDiv css={CenterComponent}>
                <Social type="Kakao" />
                <Social type="Naver" />
                <Social type="Google" />
            </StyledDiv>
        </div>
    );
};

const StyledDiv = styled.div`
    margin-top: 1rem;
`;
