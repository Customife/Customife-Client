import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { DateSelectArg, DayCellContentArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import React, { useRef } from 'react';

import { EventModal } from './EventModal';
import MENU_URL from '../../../assets/images/Icon/menu.png';
import PLUS_URL from '../../../assets/images/Icon/plus.png';
import SEARCH_URL from '../../../assets/images/Icon/search.png';
import STACK_URL from '../../../assets/images/Icon/stack.png';
import {
    useCalendarModalContext,
    useScheduleTodoContext,
    useDateContext,
    useStartDateContext,
    useEndDateContext,
} from '../../../hooks';
import { MainCalendarStyle } from '../../../styles';
import { BasicButton } from '../../Atoms';

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
                <StyledButtonDiv>
                    <BasicButton type="image" imageUrl={PLUS_URL} buttonStyle={IconStyle} />
                    <BasicButton type="image" imageUrl={SEARCH_URL} buttonStyle={IconStyle} />
                    <BasicButton type="image" imageUrl={STACK_URL} buttonStyle={IconStyle} />
                    <BasicButton type="image" imageUrl={MENU_URL} buttonStyle={IconStyle} />
                </StyledButtonDiv>
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

const StyledButtonDiv = styled.div`
    display: flex;
    position: absolute;

    top: 1rem;
    right: 1%;
`;

const IconStyle = css`
    width: 17px;
`;
