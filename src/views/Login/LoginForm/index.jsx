import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { searchLogin } from '../../../services/loginService';
import { ToastContainer } from 'react-toastify';
import './index.css';


const LoginForm = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.login);

    useEffect(() => {
        if (localStorage.getItem('authenticated') != null) {
            window.location.reload();
        }
    }, [store]);

    return (
        <div className='login-container'>
            <div className='gradient-container'>
                <div className='login-form-container'>
                    <h1>Olá!</h1>
                    <Formik
                        initialValues={{ user: '', password: '' }}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            dispatch(searchLogin(values));
                        }}
                    >
                        {() => (
                            <Form>
                                <Field type="input" name="user" placeholder="Digite seu usuário" />
                                <Field type="password" name="password" placeholder="Digite sua senha" />
                                <button type="submit" className='submit-button'>Submit</button>
                                <ToastContainer />
                            </Form>

                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;