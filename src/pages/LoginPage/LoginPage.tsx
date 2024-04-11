import { css } from '@emotion/react';
import React from 'react';

import { LoginForm, Title, BasicText, BasicDivider, Social, TextButton, TextDivider } from '../../components';
import { CenterComponent, PageStyle } from '../../styles';

export const LoginPage = () => {
    return (
        <div css={PageStyle}>
            <Title name="Login" />
            <div css={[CenterComponent, StyledDiv]}>
                <LoginForm />
            </div>
            <div css={StyledDiv}>
                <TextDivider text={'또는'} />
            </div>
            <div css={[CenterComponent, StyledDiv]}>
                <Social type="Kakao" />
                <Social type="Naver" />
                <Social type="Google" />
            </div>
            <div css={StyledDiv}>
                <div>
                    <TextButton text="아이디/비밀번호 찾기"></TextButton>
                </div>
                <div css={StyledText}>
                    <BasicText size="small" text="아직 회원이 아니신가요?"></BasicText>
                    <TextButton text="회원가입"></TextButton>
                </div>
            </div>
        </div>
    );
};

const StyledDiv = css`
    margin-top: 1rem;
`;

const StyledText = css`
    float: left;
`;
