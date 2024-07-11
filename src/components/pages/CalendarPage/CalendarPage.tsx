import { css } from '@emotion/react';
import React from 'react';

import { BasicTitle } from '../../Atoms';
import { MainCalendar } from '../../Organisms/Calendar/MainCalendar';
import { TodoBox, MilestoneBox } from '../../Organisms/ToolBox';

export const CalendarPage = () => {
    return (
        <div>
            <div css={StyledDiv}></div>
            <div css={divStyle}>
                <div>
                    <div css={marginStyle2}>
                        <BasicTitle size="3">2024년 03월</BasicTitle>
                    </div>
                    <MainCalendar></MainCalendar>
                </div>
                <div css={marginStyle}>
                    <div css={marginStyle2}>
                        <BasicTitle size="3">Customife</BasicTitle>
                    </div>
                    <div css={marginStyle2}>
                        <TodoBox></TodoBox>
                    </div>
                    <MilestoneBox></MilestoneBox>
                </div>
            </div>
        </div>
    );
};

const divStyle = css`
    display: flex;
`;

const StyledDiv = css`
    margin-top: 5vh;
`;

const marginStyle = css`
    margin-left: 0.5vw;
`;

const marginStyle2 = css`
    margin-bottom: 1vh;
`;
