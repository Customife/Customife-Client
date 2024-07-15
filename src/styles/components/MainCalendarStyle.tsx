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

    .fc-button-primary:hover {
        background-color: transparent;
        border: none;
        color: black;
    }

    .fc .fc-button-primary:not(:disabled):active {
        background-color: transparent !important;
        border: none;
        color: black;
    }

    .fc .fc-button-primary:focus {
        box-shadow: none !important;
    }

    .fc-button {
        padding: 0;
    }

    .fc-theme-standard th {
        border-top: 1px solid #a0a096;
        border-left: 1px solid #a0a096;
        border-right: 1px solid #a0a096;

        border-radius: 10px 10px 0 0;
    }

    .fc-theme-standard td {
        border: 1px solid #a0a096;
    }

    .fc-day-sat a {
        color: blue;
    }

    .fc-day-sun a {
        color: red;
    }
`;
