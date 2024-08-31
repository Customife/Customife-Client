import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface StackDropdownProps {
    style?: SerializedStyles;
}

export const StackDropdown = ({ style }: StackDropdownProps) => {
    const navigate = useNavigate();

    const clickCategory = () => {
        navigate('/category');
    };

    const clickMilestone = () => {
        navigate('/milestone');
    };

    return (
        <div css={style}>
            <StyledList onClick={clickCategory}>카테고리 관리</StyledList>
            <StyledList onClick={clickMilestone}>마일스톤 관리</StyledList>
        </div>
    );
};

const StyledList = styled.li`
    list-style: none;
    padding: 0.5rem;

    &: hover {
        background-color: #c3c3c3;
    }
`;
