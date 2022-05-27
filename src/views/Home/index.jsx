import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/table';
import api from '../../config/http/api';
import { endLoadingSearch, startLoadingSearch } from '../../store/dragons/dragonsAction';
import './styles.css';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [list, setList] = useState();

    useEffect(() => {
        dispatch(startLoadingSearch());
        api
            .get('/dragon', {})
            .then(({ data: payload }) => {
                setList(payload)
                dispatch(endLoadingSearch());
            })
            .catch(() => {
                dispatch(endLoadingSearch());
            });
    }, [dispatch]);

    const sortedList = list?.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })

    return (
        <div className='home-container'>
            <button className='add-button' onClick={() => navigate('/Add')}>Adicionar novo dragão</button>
            <Table data={sortedList} />
        </div>
    );
};

export default Home;
