import { DayCellContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import React, { useRef } from 'react';

import { EventModal } from './EventModal';
import { useCalendarModalContext, ScheduleTodoContextProvider, useScheduleTodoContext } from '../../../hooks';
import { useDateContext } from '../../../hooks/DateContextHook';
import { MainCalendarStyle } from '../../../styles';

export const MainCalendar = () => {
    const { setSelectedDate } = useDateContext();
    const { isModalOpen, setIsModalOpen } = useCalendarModalContext();
    const { setScheduleOrTodo } = useScheduleTodoContext();
    const modalRef = useRef<HTMLDivElement>(null);

    const dateClick = (info: DateClickArg) => {
        const date = new Date(info.dateStr);
        // setSelectedDate(info.dateStr);
        setSelectedDate(date);
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
        setIsModalOpen(true);
    };

    const modalOutSideClick = (e: any) => {
        if (modalRef.current === e.target) {
            setIsModalOpen(false);
            setScheduleOrTodo('');
        }
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
                    // select={addEvent}
                />
            </div>
            {isModalOpen && <EventModal modalRef={modalRef} modalOutSideClick={modalOutSideClick} />}
        </div>
    );
};
