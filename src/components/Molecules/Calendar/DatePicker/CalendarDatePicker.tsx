import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useDateContext } from '../../../../hooks';

export const CalendarDatePicker = () => {
    const { selectedDate, setSelectedDate } = useDateContext();

    return <DatePicker dateFormat="yyyy년 MM월 dd일" selected={new Date(selectedDate)}></DatePicker>;
};
