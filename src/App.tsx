import { Global } from '@emotion/react';
import React from 'react';

import { GlobalStyle } from './styles';

const App = () => {
    return (
        <div className="container">
            <Global styles={GlobalStyle} />
        </div>
    );
};

export default App;
