import { css } from '@emotion/react';

export const DatePickerStyle = css`
    input {
        width: 100%;
        height: 1.5rem;
        border-width: 0 0 1px 0;
        text-align: center;

        &:focus-visible {
            outline-width: 0;
        }
    }

    .react-datepicker-wrapper {
        width: 100%;
    }
`;
