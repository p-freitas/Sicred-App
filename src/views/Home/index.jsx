import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../components/tablee';
import { searchDragons } from '../../services/dragonsService';


const Home = () => {
    const store = useSelector((state) => state.dragon);
    console.log(store);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(searchDragons());
        console.log('asdfdsf');
    }, [dispatch])

    const dataa = store?.data?.map((data) => {
        return data;
    });
    return (
        <div>
            <h1>Home Page</h1>
            <Table data={dataa} />
        </div>
    );
};

export default Home;
