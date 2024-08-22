import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { ScheduleOrTodoButtons } from './Event/ScheduleOrTodoButtons';
import { BasicTitle } from '../../Atoms';
import { BasicBox } from '../../Atoms/BasicBox';

interface EventModalProps {
    modalRef: React.ForwardedRef<HTMLDivElement>;
    modalOutSideClick: (e: any) => void;
}

export const EventModal = ({ modalRef, modalOutSideClick }: EventModalProps) => {
    return (
        <TopModalContainer ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
            <ModalBodyContainer>
                <div css={divStyle}>
                    <BasicBox size="small" />
                    <BasicTitle size="4">이벤트 추가</BasicTitle>
                    <BasicBox size="medium" />
                    <ScheduleOrTodoButtons />
                    <BasicBox size="medium" />
                </div>
            </ModalBodyContainer>
        </TopModalContainer>
    );
};

const divStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
    width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    background-color: white;
    border-radius: 10px;
`;
