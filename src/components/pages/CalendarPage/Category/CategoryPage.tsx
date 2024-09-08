import { css } from '@emotion/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { CategoryMilestonePageStyle } from '../../../../styles';
import { BasicBox } from '../../../Atoms';
import { CategoryBox } from '../../../Molecules';
import { CategoryTitleBar } from '../../../Organisms';

interface Category {
    name: string;
    colorCode: string;
}

export const CategoryPage = () => {
    return (
        <div css={DivBoxStyle}>
            {/* <div css={CategoryMilestonePageStyle}>{renderCategories()}</div> */}
            <Outlet />
        </div>
    );
};

const DivBoxStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
