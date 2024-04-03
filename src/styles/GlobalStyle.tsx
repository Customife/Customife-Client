import { css } from '@emotion/react';

export const GlobalStyle = css`
    * {
        margin: 0px;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
    }

    .container {
        display: flex;
        justify-content: center;
        width: 600px;
        min-height: 100vh;
    }
`;
