import { css } from '@emotion/react';

export const MainCalendarStyle = css`
    width: 60vw;

    .fc-toolbar {
        justify-content: normal;
    }

    .fc-toolbar-title {
        font-size: 1.5em;
    }

    .fc-button-primary {
        background-color: transparent;
        border: none;
        color: black;
    }

    .fc-day-sat a {
        color: blue;
    }

    .fc-day-sun a {
        color: red;
    }
`;
