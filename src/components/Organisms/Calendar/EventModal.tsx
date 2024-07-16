import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { BasicTitle } from '../../Atoms';

export const EventModal = () => {
    return (
        <TopModalContainer>
            <ModalBodyContainer>
                <BasicTitle size="4">이벤트 추가</BasicTitle>
            </ModalBodyContainer>
        </TopModalContainer>
    );
};

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
    height: 250px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    background-color: white;
    border-radius: 10px;
`;
