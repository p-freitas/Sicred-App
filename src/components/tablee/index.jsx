import React, { useState, Fragment } from "react";

const handleEditClick = (id) => {
    console.log('edit');
    console.log(id);
};

const handleDeleteClick = (contactId) => {
    console.log('delete');
};

const Table = ({ data }) => {
    console.log(data);
    return (
    <div>
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
                        <td>{dragon.createdAt}</td>
                        <td>
                            <button
                                type="button"
                                onClick={(event) => handleEditClick(dragon.id)}
                            >
                                Edit
                            </button>
                            <button type="button" onClick={() => handleDeleteClick(dragon.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Table;