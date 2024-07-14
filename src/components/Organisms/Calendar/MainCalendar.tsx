import { css } from '@emotion/react';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

export const MainCalendar = () => {
    const [value, setValue] = useState(new Date());

    const onChange = () => {
        setValue(value);
    };

    return <div></div>;
};
