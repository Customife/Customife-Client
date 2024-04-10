import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { CenterComponent } from '../../styles/';

interface BasicDividerProps {
    title: string;
}

export const BasicDivider = ({ title }: BasicDividerProps) => {
    return (
        <div css={CenterComponent}>
            <StyledHr />
            <StyledP>{title}</StyledP>
            <StyledHr />
        </div>
    );
};

const StyledHr = styled.hr`
    width: 35%;
`;

const StyledP = styled.p`
    margin: 1rem;
    font-size: x-small;
`;
