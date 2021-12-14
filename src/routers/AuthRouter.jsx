import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>

                    <Route path="/login" element={<LoginPage />} />

                    <Route path="/register" element={<RegisterPage />} />

                    <Route path="/*" element={<Navigate replace to="/auth/login" />} />

                </Routes>
            </div>
        </div>
    )
}
