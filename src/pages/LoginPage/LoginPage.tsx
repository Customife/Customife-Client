import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { LoginForm, Title, BasicText, BasicDivider, Social, TextButton } from '../../components';
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
            <StyledDiv>
                <div>
                    <TextButton text="아이디/비밀번호 찾기"></TextButton>
                </div>
                <div>
                    <BasicText text="아직 회원이 아니신가요?"></BasicText>
                    <TextButton text="회원가입"></TextButton>
                </div>
            </StyledDiv>
        </div>
    );
};

const StyledDiv = styled.div`
    margin-top: 1rem;
`;
