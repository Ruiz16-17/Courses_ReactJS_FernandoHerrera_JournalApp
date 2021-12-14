import { getAuth, onAuthStateChanged } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { login } from '../actions/auth'
import { JournalPage } from '../components/journal/JournalPage'
import { AuthRouter } from './AuthRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {

        const auth = new getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoggedIn(true);
            } else {
                setisLoggedIn(false);
            }

            setChecking(false);
        })

    }, [dispatch, setChecking, setisLoggedIn]);

    if (checking) {
        return (
            <h2>Wait...</h2>
        )
    }

    return (
        <BrowserRouter>
            <div>
                <Routes>

                    <Route path="/" element=
                        {
                            <PrivateRouter isLoggedIn={isLoggedIn}>
                                <JournalPage />
                            </PrivateRouter>
                        }

                    />

                    <Route path="/auth/*" element=
                        {
                            <PublicRouter isLoggedIn={isLoggedIn}>
                                <AuthRouter />
                            </PublicRouter>
                        }
                    />

                    <Route path="/*" element={<Navigate replace to="/auth/login" />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
