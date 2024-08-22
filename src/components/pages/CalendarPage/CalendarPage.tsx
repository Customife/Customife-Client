import { css } from '@emotion/react';
import React, { useState } from 'react';

import { CalendarModalProvider } from '../../../hooks/CalendarModalContextHook';
import { DateProvider } from '../../../hooks/DateContextHook';
import { BasicTitle } from '../../Atoms';
import { MainCalendar } from '../../Organisms/Calendar/MainCalendar';
import { TodoBox } from '../../Organisms/ToolBox';

export const CalendarPage = () => {
    return (
        <div>
            <CalendarModalProvider>
                <div css={StyledDiv}></div>
                <div css={divStyle}>
                    <DateProvider>
                        <MainCalendar></MainCalendar>
                        <div css={marginStyle}>
                            <div css={marginStyle2}>
                                <BasicTitle size="3">Customife</BasicTitle>
                            </div>
                            <TodoBox></TodoBox>
                        </div>
                    </DateProvider>
                </div>
            </CalendarModalProvider>
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

    width: 20vw;
    height: auto;
`;

const marginStyle2 = css`
    margin-bottom: 1.5em;

    display: flex;
    justify-content: flex-end;
`;
