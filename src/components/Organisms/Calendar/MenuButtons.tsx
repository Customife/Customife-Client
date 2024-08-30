import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import MENU_URL from '../../../assets/images/Icon/menu.png';
import PLUS_URL from '../../../assets/images/Icon/plus.png';
import SEARCH_URL from '../../../assets/images/Icon/search.png';
import STACK_URL from '../../../assets/images/Icon/stack.png';
import { BasicButton } from '../../Atoms';

export const MenuButtons = () => {
    return (
        <StyledButtonDiv>
            <BasicButton type="image" imageUrl={PLUS_URL} buttonStyle={IconStyle} />
            <BasicButton type="image" imageUrl={SEARCH_URL} buttonStyle={IconStyle} />
            <BasicButton type="image" imageUrl={STACK_URL} buttonStyle={IconStyle} />
            <BasicButton type="image" imageUrl={MENU_URL} buttonStyle={IconStyle} />
        </StyledButtonDiv>
    );
};

const StyledButtonDiv = styled.div`
    display: flex;
    position: absolute;

    top: 1rem;
    right: 1%;
`;

const IconStyle = css`
    width: 17px;
`;
