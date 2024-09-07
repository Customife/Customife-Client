import { css } from '@emotion/react';
import React from 'react';

import { CategoryTitleBar } from '../../..//Organisms';
import { CategoryMilestonePageStyle } from '../../../../styles';
import { BasicBox } from '../../../Atoms';

export const CategoryAddPage = () => {
    return (
        <div css={DivBoxStyle}>
            <CategoryTitleBar />
            <BasicBox size={'small'} />
            <div css={CategoryMilestonePageStyle}>CategoryAddPage</div>
        </div>
    );
};

const DivBoxStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
