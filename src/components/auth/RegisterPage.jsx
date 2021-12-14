import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeErrorAction, setErrorAction } from '../../actions/ui';
import { startregisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const { loading, messageError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Ruiz',
        email: 'ruiz@gmail.com',
        password: '123456',
        confirmPassword: '123456'
    });

    const { name, email, confirmPassword, password } = formValues;

    const handleRegistrer = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            dispatch(startregisterWithEmailPasswordName(email, password, name));
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setErrorAction('The field name is required'));
            return false;
        }
        if (!validator.isEmail(email)) {
            dispatch(setErrorAction('The email is not valid'));
            return false;
        }
        if (password.lenght < 5) {
            dispatch(setErrorAction('The password is too short. Should be at least 5 characters long'));
            return false;
        }
        if (password !== confirmPassword) {
            dispatch(setErrorAction('The password are different'));
            return false;
        }

        dispatch(removeErrorAction());

        return true;
    }

    return (
        <>
            <h3
                className="auth__title"
            >
                RegisterPage
            </h3>
            <form onSubmit={handleRegistrer}>


                {
                    messageError &&

                    (
                        <div className="auth__alert-error">
                            {messageError}
                        </div>
                    )
                }

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    className="auth__input"
                    value={confirmPassword}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    disabled={loading}
                >
                    Register
                </button>


                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already Register?
                </Link>
            </form>
        </>
    )
}
