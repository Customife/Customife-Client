import { css } from '@emotion/react';

export const DatePickerStyle = css`
    width: 45%;

    input {
        width: 100%;
        height: 1.5rem;
        border-width: 0 0 1px 0;
        &:focus-visible {
            outline-width: 0;
        }
    }

    .react-datepicker-wrapper {
        width: 100%;
    }
`;
