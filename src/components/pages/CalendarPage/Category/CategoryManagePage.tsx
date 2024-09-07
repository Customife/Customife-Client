import { css } from '@emotion/react';
import React from 'react';

import { CategoryMilestonePageStyle } from '../../../../styles';
import { BasicBox } from '../../../Atoms';
import { CategoryTitleBar } from '../../../Organisms';

export const CategoryManagePage = () => {
    return (
        <div css={DivBoxStyle}>
            <CategoryTitleBar />
            <BasicBox size={'small'} />
            <div css={CategoryMilestonePageStyle}>PackageManagePage</div>
        </div>
    );
};

const DivBoxStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
