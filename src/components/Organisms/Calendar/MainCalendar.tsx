import { DayCellContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import React from 'react';

import { EventModal } from './EventModal';
import { useCalendarModalContext } from '../../../hooks/CalendarModalContextHook';
import { useDateContext } from '../../../hooks/DateContextHook';
import { MainCalendarStyle } from '../../../styles';

export const MainCalendar = () => {
    const { setSelectedDate } = useDateContext();
    const { isModalOpen, setIsModalOpen } = useCalendarModalContext();

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

    const addEvent = () => {
        openModal();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
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
                    editable={true}
                    selectable={true}
                    dateClick={dateClick}
                    select={addEvent}
                />
            </div>
            {isModalOpen && <EventModal />}
        </div>
    );
};
