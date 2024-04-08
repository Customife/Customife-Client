import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import theme from 'styles/theme';

import { Router } from './routers/Router';
import { GlobalStyle } from './styles';

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
