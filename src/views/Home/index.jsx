import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/tablee';
import { searchDragons } from '../../services/dragonsService';
import './styles.css';


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useSelector((state) => state.dragon);
    console.log(store);

    React.useEffect(() => {
        dispatch(searchDragons());
        console.log('asdfdsf');
    }, [dispatch])

    const dataa = store?.data?.map((data) => {
        return data;
    });
    return (
        <div className='home-container'>
            <h1>Home Page</h1>
            <button className='add-button' onClick={() => navigate('/Add')}>Adicionar novo dragão</button>
            <Table data={dataa} />
        </div>
    );
};

export default Home;
