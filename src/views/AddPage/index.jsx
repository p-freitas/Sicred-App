import React, { useEffect } from 'react';
import AddForm from '../../components/AddForm';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowSvg } from '../../helpers/iconsHelper';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDragon } from '../../services/dragonsService';


const AddPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const store = useSelector((state) => state.dragon);

    useEffect(() => {
        if (id) dispatch(getDragon(id));
    }, [dispatch, id])

    return (
        <div className='add-page-container'>
            <span className='back-button' onClick={() => navigate(-1)}>
                <ArrowSvg />
                <h1>Voltar</h1>
            </span>
            <AddForm dragon={store.dragon} id={id} />
        </div>
    );
};

export default AddPage;
