import React from 'react';
import style from './Table.module.css';

import { NavBar } from '../NavBar/NavBar';
import axios from "axios";
import { useState, useEffect } from "react";

//*----------------------------------------------------
const TableDonation = (props) => {
    const [donations, setDonations] = useState([]);
    const [idUser, setIdUser] = useState('');
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        llenarTabla();
    }, []);

    const llenarTabla = async () => {
        try {
            setDonations([]);
            const response = await axios.get("http://localhost:3001/donations/");
            setDonations(response.data);

            //* calcula el total de los value
            //* acc = acomulado 
            //* 0 = valor inicial 
            const total = response.data.reduce((acc, donation) => acc + donation.value, 0);
            setTotalValue(total);
        } catch (error) {
            console.error("Error al encontrar donaciones:", error);
        }
    }

    const FuncionBuscarIdUser = async () => {
        try {
            setDonations([]);
            const response = await axios.get(`http://localhost:3001/donations/${idUser}`);
            setDonations(response.data);

            //* calcula el total de los value
            //* acc = acomulado 
            //* 0 = valor inicial 
            const total = response.data.reduce((acc, donation) => acc + donation.value, 0);
            setTotalValue(total);
        } catch (error) {
            console.error("Error al encontrar donaciones:", error);
        }
    }

    const onInputChange = (event) => {
        setIdUser(event.target.value); 
    }

    return (
        <div className={style.divDonation}>
            <h1>Tabla</h1>
                
            <input
                onChange={onInputChange}
                name="idUser"
                type="text"
                value={idUser}
                required
            /> 
            <button onClick={FuncionBuscarIdUser}>Buscar por id</button>
            <button onClick={llenarTabla}>Ver todo</button>

            <table>
                <thead>
                    <tr>
                        {/* th crea una celda de enabezado en una tabla */}
                        <th>Correo</th>
                        <th>Valor</th>
                        <th>idUser</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map((donation, index) => (
                        <tr key={index}>
                            {/* tr crea una fila en una tabla */}
                            {/* td crea una celda en una tabla */}
                            <td>{donation.email}</td>
                            <td>{donation.value}</td>
                            <td>{donation.idUser}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <h1>Total : {totalValue}</h1> */}
            {/* toFixed reducir decimales a solo 2 */}
            <h1>Total : ${totalValue.toFixed(2)}</h1>

        </div>
    );
};

export default TableDonation;