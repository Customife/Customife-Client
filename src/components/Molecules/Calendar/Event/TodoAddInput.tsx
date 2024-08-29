import { css } from '@emotion/react';
import React, { useState } from 'react';

import { useStartDateContext } from '../../../../hooks';
import { LoginSignupButtonStyle } from '../../../../styles';
import { BasicComboBox, BasicInput, BasicText, BasicButton } from '../../../Atoms';
import { CalendarDatePicker } from '../DatePicker/CalendarDatePicker';

export const TodoAddInput = () => {
    const { startDate, setStartDate } = useStartDateContext();

    const [content, setContent] = useState('');

    const testList = [
        { value: 'value1', content: 'content1' },
        { value: 'value2', content: 'content2' },
        { value: 'value3', content: 'content3' },
    ];

    const addTodo = () => {
        console.log('Click Add Todo');
    };

    return (
        <div css={DivStyle2}>
            <div css={DivStyle}>
                <BasicText size="medium">내용</BasicText>
                <div css={DivStyle3}>
                    <BasicInput type="text" placeholder="내용 입력" style={InputStyle}></BasicInput>
                </div>
            </div>
            <div css={DivStyle}>
                <BasicText size="medium">날짜</BasicText>
                <div css={[DivStyle3, DatePickerDivStyle]}>
                    <CalendarDatePicker
                        selectedDate={startDate}
                        setSelectedDate={setStartDate}
                        style={DatePickerWidthStyle}
                    />
                </div>
            </div>
            <div css={DivStyle}>
                <BasicText size="medium">카테고리</BasicText>
                <div css={DivStyle3}>
                    <BasicComboBox name="category" hidden="카테고리 선택" list={testList} style={SelectStyle} />
                </div>
            </div>
            <div css={DivStyle}>
                <BasicText size="medium">마일스톤</BasicText>
                <div css={DivStyle3}>
                    <BasicComboBox name="milestone" hidden="마일스톤 선택" list={testList} style={SelectStyle} />
                </div>
            </div>
            <div>
                <BasicButton type="text" text="추가하기" onClick={addTodo} style={LoginSignupButtonStyle}></BasicButton>
            </div>
        </div>
    );
};

const DivStyle = css`
    display: flex;
`;

const DivStyle2 = css`
    width: 80%;
`;

const DivStyle3 = css`
    width: 90%;
    margin-left: 1rem;
    margin-bottom: 1rem;
`;

const InputStyle = css`
    width: 100%;
    height: 1.5rem;
    border-width: 0 0 1px;
    &:focus-visible {
        outline: 0;
    }
`;

const DashStyle = css`
    margin: 0 0.5rem 0 0.5rem;
`;

const DatePickerDivStyle = css`
    display: flex;
    justify-content: space-between;
`;

const DatePickerWidthStyle = css`
    width: 100%;
`;

const SelectStyle = css`
    width: 100%;
    height: 1.5rem;

    border-radius: 5px;

    &: focus-visible {
        outline: 0;
    }
`;
