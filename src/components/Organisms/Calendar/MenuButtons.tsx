import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import { StackDropdown } from './MenuButtons/StackDropdown';
import MENU_URL from '../../../assets/images/Icon/menu.png';
import PLUS_URL from '../../../assets/images/Icon/plus.png';
import SEARCH_URL from '../../../assets/images/Icon/search.png';
import STACK_URL from '../../../assets/images/Icon/stack.png';
import { BasicButton, BasicComboBox } from '../../Atoms';

export const MenuButtons = () => {
    const [isStackOpen, setIsStackOpen] = useState(false);

    const stackItems = ['카테고리 관리', '마일스톤 관리'];

    const clickStack = () => {
        console.log('클릭 스택');
        setIsStackOpen(!isStackOpen);
        console.log(isStackOpen);
    };

    return (
        <div>
            <StyledButtonDiv>
                <BasicButton type="image" imageUrl={PLUS_URL} buttonStyle={IconStyle} />
                <BasicButton type="image" imageUrl={SEARCH_URL} buttonStyle={IconStyle} />
                <BasicButton type="image" imageUrl={STACK_URL} onClick={clickStack} buttonStyle={IconStyle} />
                <BasicButton type="image" imageUrl={MENU_URL} buttonStyle={IconStyle} />
                {isStackOpen && <StackDropdown style={DropDownStyle} />}
            </StyledButtonDiv>
        </div>
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

const DropDownStyle = css`
    position: absolute;
    top: 100%;
    z-index: 999;

    border: 1px solid;
    border-radius: 10px;
    background-color: white;

    overflow: hidden;
`;
