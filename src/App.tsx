import { Global } from '@emotion/react';
import React from 'react';

import { Router } from './routers/Router';
import { GlobalStyle } from './styles';

const App = () => {
    return (
        <div className="container">
            <Global styles={GlobalStyle} />
            <Router />
        </div>
    );
};

export default App;
