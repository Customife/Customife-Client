import { css } from '@emotion/react';
import React from 'react';

import { DateProvider } from '../../../hooks/DateContextHook';
import { BasicTitle } from '../../Atoms';
import { MainCalendar } from '../../Organisms/Calendar/MainCalendar';
import { TodoBox, MilestoneBox } from '../../Organisms/ToolBox';

export const CalendarPage = () => {
    return (
        <div>
            <div css={StyledDiv}></div>
            <div css={divStyle}>
                <DateProvider>
                    <div>
                        <MainCalendar></MainCalendar>
                    </div>
                    <div css={marginStyle}>
                        <div css={marginStyle2}>
                            <BasicTitle size="3">Customife</BasicTitle>
                        </div>
                        <div css={marginStyle3}>
                            <TodoBox></TodoBox>
                        </div>
                        <MilestoneBox></MilestoneBox>
                    </div>
                </DateProvider>
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

    display: flex;
    flex-direction: column;
`;

const marginStyle2 = css`
    margin-bottom: 1.5em;

    display: flex;
    justify-content: flex-end;
`;

const marginStyle3 = css`
    margin-bottom: 1vh;
`;
