import { css, Global } from '@emotion/react';
import { DayCellContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import React, { useState } from 'react';

import { useDateContext } from '../../../hooks/DateContextHook';
import { MainCalendarStyle } from '../../../styles';

export const MainCalendar = () => {
    const { setSelectedDate } = useDateContext();

    const dateClick = (info: DateClickArg) => {
        setSelectedDate(info.dateStr);
    };

    const dayCellContent = (info: DayCellContentArg) => {
        const dateText = info.dayNumberText.replace('일', '');
        return (
            <div>
                <span>{dateText}</span>
            </div>
        );
    };

    return (
        <div css={MainCalendarStyle}>
            <FullCalendar
                locale="ko"
                headerToolbar={{
                    left: 'title',
                    center: 'prev',
                    right: 'next',
                }}
                dayCellContent={dayCellContent}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                dateClick={dateClick}
            />
        </div>
    );
};
