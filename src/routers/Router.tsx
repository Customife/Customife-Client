import App from 'App';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IntroPage, LoginPage, SignupPage, CalendarPage, CategoryPage, MilestonePage } from '../components/pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/main" element={<CalendarPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/milestone" element={<MilestonePage />} />
            </Routes>
        </BrowserRouter>
    );
};
