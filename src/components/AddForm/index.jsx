import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { postDragon, putDragon } from '../../services/dragonsService';
import { ToastContainer } from 'react-toastify';
import './styles.css';
import { clearDragon } from '../../store/dragons/dragonsAction';


const AddForm = ({ dragon, id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearDragon());
    }, [dispatch])

    const schema = Yup.object().shape(
        {
            name: Yup.string().required('Campo obrigatório'),
            type: Yup.string().required('Campo obrigatório'),
        },
        [],
    );

    return (
        <div className='add-container'>
            <div className='add-form-container'>
                <h2>{id ? 'Editar dragão' : 'Cadastre um novo dragão'}</h2>
                <Formik
                    initialValues={dragon}
                    enableReinitialize
                    validationSchema={schema}
                    onSubmit={async (values, { resetForm }) => {
                        if (id) {
                            dispatch(putDragon({ values, id }));
                        } else {
                            var moment = require('moment-timezone');
                            const data = {
                                ...values,
                                createdAt: moment().format(),
                            };
                            dispatch(await postDragon(data, resetForm));
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className='field-container'>
                                <Field type="input" name="name" placeholder="Nome" />
                                {errors.name && touched.name ? (
                                    <div className='field-error'>{errors.name}</div>
                                ) : null}
                            </div>
                            <div className='field-container'>
                                <Field type="input" name="type" placeholder="Tipo" />
                                {errors.type && touched.type ? (
                                    <div className='field-error'>{errors.type}</div>
                                ) : null}
                            </div>
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