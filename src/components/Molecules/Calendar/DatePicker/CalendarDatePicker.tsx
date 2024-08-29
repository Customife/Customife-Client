import { SerializedStyles } from '@emotion/react';
import { ko } from 'date-fns/locale';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerStyle } from '../../../../styles';

interface CalendarDatePickerProps {
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
    style?: SerializedStyles;
}

export const CalendarDatePicker = ({ selectedDate, setSelectedDate, style }: CalendarDatePickerProps) => {
    const changeDate = (date: Date | null) => {
        if (date !== null) {
            setSelectedDate(date);
        }
    };

    return (
        <div css={[DatePickerStyle, style]}>
            <DatePicker
                locale={ko}
                shouldCloseOnSelect
                dateFormat="yyyy년 MM월 dd일"
                selected={selectedDate}
                onChange={(date) => changeDate(date)}
            ></DatePicker>
        </div>
    );
};
