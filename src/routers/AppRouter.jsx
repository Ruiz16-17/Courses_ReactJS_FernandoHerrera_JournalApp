import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { JournalPage } from '../components/journal/JournalPage'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>

                    <Route path="/" element={<JournalPage />} />

                    <Route path="/auth/*" element={<AuthRouter />} />

                    <Route path="/*" element={<Navigate replace to="/auth/login" />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
