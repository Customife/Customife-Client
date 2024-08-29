import { css } from '@emotion/react';
import React, { useContext } from 'react';

import { BasicBox, BasicTitle } from '../../../Atoms';
import { ScheduleAddInput } from '../../../Molecules';

export const ScheduleAdd = () => {
    return (
        <div css={divStyle}>
            <BasicBox size="small" />
            <BasicTitle size="4">스케쥴 추가</BasicTitle>
            <BasicBox size="medium" />
            <ScheduleAddInput />
            <BasicBox size="medium" />
        </div>
    );
};

const divStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
