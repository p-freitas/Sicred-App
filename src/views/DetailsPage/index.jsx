import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDragon, getDragon } from '../../services/dragonsService';
import { ArrowSvg } from '../../helpers/iconsHelper';
import './styles.css';

const DetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { dragon } = useSelector((state) => state.dragon);

    useEffect(() => {
        if (id) dispatch(getDragon(id));
    }, [dispatch, id])

    const getDate = (date) => {
        var moment = require('moment-timezone');
        const data = moment(date);
        data.locale('pt');
        return data.tz('America/Sao_Paulo').format('DD-MM-YYYY, H:mm:ss');
    }

    const handleDeleteClick = async (id) => {
        dispatch(await deleteDragon(id, navigate));
    };

    return (
        <div className='details-page-container'>
            <span className='back-button' onClick={() => navigate('/')}>
                <ArrowSvg />
                <h1>Voltar</h1>
            </span>
            <div className='details-container'>
                <h2>Detalhes</h2>
                <p>ID: {dragon.id}</p>
                <p>Nome: {dragon.name}</p>
                <p>Tipo: {dragon.type}</p>
                <p>Data da criação: {getDate(dragon.createdAt)}</p>
            </div>
            <div className='buttons-container'>
                <button className='edit-button' onClick={() => navigate(`/Edit/${id}`)}>Editar</button>
                <button className='delete-button' onClick={() => { if (window.confirm('Tem certeza que quer deletar este dragão?')) handleDeleteClick(dragon.id) }}>Deletar</button>
            </div>
        </div>
    );
}

export default DetailsPage;