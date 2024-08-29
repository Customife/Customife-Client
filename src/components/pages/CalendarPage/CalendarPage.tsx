import { css } from '@emotion/react';
import React from 'react';

import {
    CalendarModalProvider,
    DateProvider,
    EndDateProvider,
    ScheduleTodoContextProvider,
    StartDateProvider,
} from '../../../hooks';
import { BasicTitle } from '../../Atoms';
import { MainCalendar } from '../../Organisms/Calendar/MainCalendar';
import { TodoBox } from '../../Organisms/ToolBox';

export const CalendarPage = () => {
    return (
        <div>
            <CalendarModalProvider>
                <ScheduleTodoContextProvider>
                    <div css={StyledDiv}></div>
                    <div css={divStyle}>
                        <DateProvider>
                            <StartDateProvider>
                                <EndDateProvider>
                                    <MainCalendar></MainCalendar>
                                </EndDateProvider>
                            </StartDateProvider>
                            <div css={marginStyle}>
                                <div css={marginStyle2}>
                                    <BasicTitle size="3">Customife</BasicTitle>
                                </div>
                                <TodoBox></TodoBox>
                            </div>
                        </DateProvider>
                    </div>
                </ScheduleTodoContextProvider>
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
