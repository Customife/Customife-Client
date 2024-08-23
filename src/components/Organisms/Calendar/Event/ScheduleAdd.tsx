import { css } from '@emotion/react';
import React, { useContext } from 'react';

import { BasicBox, BasicTitle } from '../../../Atoms';

export const ScheduleAdd = () => {
    return (
        <div>
            <BasicBox size="small" />
            <BasicTitle size="4">스케쥴 추가</BasicTitle>
            <BasicBox size="medium" />
        </div>
    );
};

const divStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
