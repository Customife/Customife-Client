import { css } from '@emotion/react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../styles/components/MainCalendar.css';

export const MainCalendar = () => {
    const [value, setValue] = useState(new Date());

    const onChange = () => {
        setValue(value);
    };

    return (
        <div>
            <Calendar locale="en" onChange={onChange} value={value}></Calendar>
        </div>
    );
};
