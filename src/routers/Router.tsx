import App from 'App';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
    IntroPage,
    LoginPage,
    SignupPage,
    CalendarPage,
    CategoryPage,
    CategoryManagePage,
    CategoryAddPage,
    CategoryList,
    MilestonePage,
} from '../components/pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/main" element={<CalendarPage />} />
                {/* <Route path="/category" element={<CategoryPage />} />
                <Route path="/category/:categoryName" element={<CategoryManagePage />} />
                <Route path="/category/add" element={<CategoryAddPage />} /> */}
                <Route path="/category" element={<CategoryPage />}>
                    <Route path="" element={<CategoryList />} />
                    <Route path="add" element={<CategoryAddPage />} />
                </Route>
                <Route path="/milestone" element={<MilestonePage />} />
            </Routes>
        </BrowserRouter>
    );
};
