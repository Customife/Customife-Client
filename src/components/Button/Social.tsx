import styled from '@emotion/styled';
import React from 'react';

import Google from '../../assets/images/Social/Google.png';
import Kakao from '../../assets/images/Social/Kakao.png';
import Naver from '../../assets/images/Social/Naver.png';
import { BasicButtonStyle } from '../../styles/components/Button/BasicButtonStyle';

interface SocialProps {
    type: string;
}

export const Social = ({ type }: SocialProps) => {
    if (type === 'Naver') {
        return (
            <button css={BasicButtonStyle}>
                <StyledImg src={Naver} />
            </button>
        );
    }
    if (type === 'Google') {
        return (
            <button css={BasicButtonStyle}>
                <StyledImg src={Google} />
            </button>
        );
    }
    return (
        <button css={BasicButtonStyle}>
            <StyledImg src={Kakao} />
        </button>
    );
};

const StyledImg = styled.img`
    width: 3.5rem;
`;
