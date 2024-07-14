import { css } from '@emotion/react';
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

    return (
        <div css={MainCalendarStyle}>
            <FullCalendar
                locale="kr"
                headerToolbar={{
                    left: 'title',
                    center: 'prev',
                    right: 'next',
                }}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={dateClick}
            />
        </div>
    );
};
