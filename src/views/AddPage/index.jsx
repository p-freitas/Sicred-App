import React from 'react';
import AddForm from '../../components/AddForm';
import { useNavigate } from 'react-router-dom';
import { ArrowSvg } from '../../helpers/iconsHelper';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchDragons } from '../../services/dragonsService';
import './styles.css';


const AddPage = () => {
    const navigate = useNavigate();
    // const store = useSelector((state) => state.dragon);
    // console.log(store);
    // const dispatch = useDispatch();

    // React.useEffect(() => {
    //     dispatch(searchDragons());
    //     console.log('asdfdsf');
    // }, [dispatch])

    // const dataa = store?.data?.map((data) => {
    //     return data;
    // });
    return (
        <div className='home-container'>
            <span className='back-button' onClick={() => navigate('/')}>
                <ArrowSvg />
                <h1>Voltar</h1>
            </span>

            <AddForm />
        </div>
    );
};

export default AddPage;
