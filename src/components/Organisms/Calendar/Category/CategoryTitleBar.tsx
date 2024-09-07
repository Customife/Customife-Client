import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import BACK_ICON from '../../../../assets/images/Icon/BACK.png';
import PLUS_ICON from '../../../../assets/images/Icon/plus.png';
import { BasicButton, BasicTitle } from '../../../Atoms';

export const CategoryTitleBar = () => {
    const navigate = useNavigate();

    const clickBack = () => {
        navigate(-1);
    };

    const clickPlus = () => {
        navigate('/category/add');
    };

    return (
        <div css={TitleBarStyle}>
            <BasicButton type="image" imageUrl={BACK_ICON} onClick={clickBack}></BasicButton>
            <BasicTitle size="3">카테고리 관리</BasicTitle>
            <BasicButton type="image" imageUrl={PLUS_ICON} onClick={clickPlus}></BasicButton>
        </div>
    );
};

const TitleBarStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;
