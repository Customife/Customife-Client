import { DateSelectArg, DayCellContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import React, { useRef } from 'react';

import { EventModal } from './EventModal';
import { MenuButtons } from './MenuButtons';
import {
    useCalendarModalContext,
    useScheduleTodoContext,
    useDateContext,
    useStartDateContext,
    useEndDateContext,
} from '../../../hooks';
import { MainCalendarStyle } from '../../../styles';

export const MainCalendar = () => {
    const { setSelectedDate } = useDateContext();
    const { isModalOpen, setIsModalOpen } = useCalendarModalContext();
    const { setScheduleOrTodo } = useScheduleTodoContext();
    const { setStartDate } = useStartDateContext();
    const { setEndDate } = useEndDateContext();

    const modalRef = useRef<HTMLDivElement>(null);

    const dayCellContent = (info: DayCellContentArg) => {
        const dateText = info.dayNumberText.replace('일', '');
        return (
            <div>
                <span>{dateText}</span>
            </div>
        );
    };

    const addEvent = (info: DateSelectArg) => {
        setIsModalOpen(true);
        setStartDate(info.start);
        setEndDate(info.end);
    };

    const modalOutSideClick = (e: any) => {
        if (modalRef.current === e.target) {
            setIsModalOpen(false);
            setScheduleOrTodo('');
        }
    };

    const dayClick = (date: Date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <div css={MainCalendarStyle}>
                <MenuButtons />
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
                    select={addEvent}
                    navLinks={true}
                    navLinkDayClick={dayClick}
                    // drop={dateDrop}  // allows things to be dropped on the calendar
                />
            </div>
            {isModalOpen && <EventModal modalRef={modalRef} modalOutSideClick={modalOutSideClick} />}
        </div>
    );
};
