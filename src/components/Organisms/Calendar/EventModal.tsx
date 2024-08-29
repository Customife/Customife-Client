import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import ICON_CLOSE_URL from '../../../assets/images/Icon/icon_close.png';
import { useCalendarModalContext, useScheduleTodoContext } from '../../../hooks';
import { BasicButton } from '../../Atoms';

import { EventAdd } from '.';

interface EventModalProps {
    modalRef: React.ForwardedRef<HTMLDivElement>;
    modalOutSideClick: (e: any) => void;
}

export const EventModal = ({ modalRef, modalOutSideClick }: EventModalProps) => {
    const { setIsModalOpen } = useCalendarModalContext();
    const { scheduleOrTodo, setScheduleOrTodo } = useScheduleTodoContext();

    const closeModal = () => {
        setIsModalOpen(false);
        setScheduleOrTodo('');
    };

    return (
        <TopModalContainer ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
            <ModalBodyContainer>
                <BasicButton type="image" imageUrl={ICON_CLOSE_URL} onClick={closeModal} style={ButtonStyle} />
                <EventAdd />
            </ModalBodyContainer>
        </TopModalContainer>
    );
};

const ButtonStyle = css`
    position: absolute;
    top: 1rem;
    left: 90%;
`;

const TopModalContainer = styled.div`
    background: rgba(0, 0, 0, 0.3);
    z-index: 1500;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const ModalBodyContainer = styled.div`
    z-index: 2000;
    width: 40vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    background-color: white;
    border-radius: 10px;
`;
