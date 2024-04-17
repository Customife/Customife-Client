import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';

import { Router } from './routers/Router';
import { GlobalStyle } from './styles';
import theme from './styles/theme';

const App = () => {
    return (
        <div className="container">
            <ThemeProvider theme={theme}>
                <Global styles={GlobalStyle} />
                <Router />
            </ThemeProvider>
        </div>
    );
};

export default App;
