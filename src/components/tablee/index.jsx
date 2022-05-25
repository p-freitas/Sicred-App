import React from "react";
import 'moment/locale/pt-br';
import { EditSvg, DeleteSvg } from '../../helpers/iconsHelper';
import './styles.css';

const handleEditClick = (id) => {
    console.log('edit');
    console.log(id);
};

const handleDeleteClick = (id) => {
    console.log('delete');
    console.log(id);
};

const Table = ({ data }) => {
    console.log(data);

    const getDate = (date) => {
        var moment = require('moment-timezone');
        const data = moment(date);
        data.locale('pt');
        return data.tz('America/Sao_Paulo').format('DD-MM-YYYY, H:mm:ss');
    }
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Data da criação</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dragon) => (
                        <tr>
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
                                    title="Deletar"
                                    onClick={() => handleDeleteClick(dragon.id)}
                                >
                                    <DeleteSvg />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;