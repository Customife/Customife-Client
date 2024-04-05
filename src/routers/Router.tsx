import App from 'App';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IntroPage, LoginPage } from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};
