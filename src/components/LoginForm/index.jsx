import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin, searchLogin } from '../../services/loginService';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import './styles.css';
import { useLocation, useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.login);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const addUser = pathname === '/AddUser';

    useEffect(() => {
        if (localStorage.getItem('authenticated') != null) {
            window.location.reload();
        }
    }, [store]);

    const schema = Yup.object().shape(
        {
            user: Yup.string().required('Campo obrigatório'),
            password: Yup.string().required('Campo obrigatório'),
        },
        [],
    );

    return (
        <div className='login-container'>
            <div className='gradient-container'>
                <div className='login-form-container'>
                    <h1>{addUser ? 'Registre-se aqui!' : "Olá!"}</h1>
                    <Formik
                        initialValues={{ user: '', password: '' }}
                        validationSchema={schema}
                        onSubmit={async (values) => {
                            addUser ? dispatch(await postLogin(values, navigate)) : dispatch(searchLogin(values));
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className='field-container'>
                                    <Field type="input" name="user" placeholder="Digite seu usuário" />
                                    {errors.user && touched.user ? (
                                        <div className='field-error'>{errors.user}</div>
                                    ) : null}
                                </div>
                                <div className='field-container'>
                                    <Field type="password" name="password" placeholder="Digite sua senha" />
                                    {errors.password && touched.password ? (
                                        <div className='field-error'>{errors.password}</div>
                                    ) : null}
                                </div>
                                <span className='add-user-span' onClick={() => { addUser ? navigate('/') : navigate('/AddUser') }}><p>{addUser ? 'Já é cadastrado?' : "Cadastre-se aqui"}</p></span>
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