import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerStyle } from '../../../../styles';

export const CalendarDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    // const { selectedDate, setSelectedDate } = useDateContext();

    return (
        <div css={DatePickerStyle}>
            <DatePicker
                dateFormat="yyyy년 MM월 dd일"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
            ></DatePicker>
        </div>
    );
};
