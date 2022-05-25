import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { postDragon } from '../../services/dragonsService';
import { ToastContainer } from 'react-toastify';
import './styles.css';


const AddForm = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.login);

    return (
        <div className='add-container'>
            <div className='add-form-container'>
                <h1>Olá!</h1>
                <Formik
                    initialValues={{ name: '', type: '' }}
                    onSubmit={(values, actions) => {
                        var moment = require('moment-timezone');

                        const data = {
                            ...values,
                            createdAt: moment().format(),
                        }
                        console.log(data);

                        dispatch(postDragon(data));
                    }}
                >
                    {() => (
                        <Form>
                            <Field type="input" name="name" placeholder="Nome" />
                            <Field type="input" name="type" placeholder="Tipo" />
                            <button type="submit" className='submit-button'>Adicionar</button>
                            <ToastContainer />
                        </Form>

                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddForm;