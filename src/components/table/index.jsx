import React, { useEffect, useState } from "react";
import 'moment/locale/pt-br';
import { EditSvg, DeleteSvg, DetailsSvg } from '../../helpers/iconsHelper';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { deleteDragon } from "../../services/dragonsService";

const Table = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const store = useSelector((state) => state.dragon);
    const [list, setList] = useState(data);
    const { isLoadingSearch } = store;

    useEffect(() => {
        setList(data);
    }, [data])
    

    const handleEditClick = (id) => {
        navigate(`/edit/${id}`)
    };

    const handleDetailsClick = (id) => {
        navigate(`/details/${id}`)
    };

    const handleDeleteClick = async (id, index) => {
        dispatch(await deleteDragon(id, navigate));
        const newList = [...list];
        if (index !== -1) {
            newList.splice(index, 1);
            setList(newList);
        }
    };

    const getDate = (date) => {
        var moment = require('moment-timezone');
        const data = moment(date);
        data.locale('pt');
        return data.tz('America/Sao_Paulo').format('DD-MM-YYYY, H:mm:ss');
    }

    return (
        <div className="table">
            <table id="dragons-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Data da criação</th>
                        <th></th>
                    </tr>
                </thead>
                {isLoadingSearch ? (<div className="lds-dual-ring"></div>) : (<tbody>
                    {list?.map((dragon, index) => (
                        <tr key={dragon.id}>
                            <td>{dragon.name}</td>
                            <td>{dragon.type}</td>
                            <td>{getDate(dragon.createdAt)}</td>
                            <td>
                                <span
                                    className="buttons"
                                    title="Editar"
                                    onClick={() => handleEditClick(dragon.id)}
                                >
                                    <EditSvg />
                                </span>
                                <span
                                    className="buttons"
                                    title="Detalhes"
                                    onClick={() => handleDetailsClick(dragon.id)}
                                >
                                    <DetailsSvg />
                                </span>
                                <span
                                    className="buttons"
                                    title="Deletar"
                                    onClick={() => { if (window.confirm('Tem certeza que quer deletar este dragão?')) handleDeleteClick(dragon.id, index) }}
                                >
                                    <DeleteSvg />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>)}
            </table>
            <ToastContainer />
        </div>
    );
}

export default Table;