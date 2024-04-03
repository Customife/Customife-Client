import { Global } from '@emotion/react';
import React from 'react';

import { IntroPage } from './pages';
import { GlobalStyle } from './styles';

const App = () => {
    return (
        <div className="container">
            <Global styles={GlobalStyle} />
            <IntroPage />
        </div>
    );
};

export default App;
