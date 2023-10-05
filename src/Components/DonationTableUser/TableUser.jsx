import React from 'react';
import style from './TableUser.module.css';

import { NavBar } from '../NavBar/NavBar';
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

//*----------------------------------------------------
const TableUser = (props) => {
    const user = useSelector(state => state.user);
    const [donations, setDonations] = useState([]);
    const [idUser, setIdUser] = useState('');
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        FuncionBuscarIdUser();
    }, []);

    

    // https://br-service.onrender.com/donations/${idUser}
    const FuncionBuscarIdUser = async () => {
        try {
            setDonations([]);
            const response = await axios.get(`https://br-service.onrender.com/donations/${user.id}`);
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
        <div className={style.divTableUser}>
            {/* toFixed reducir decimales a solo 2 */}
                <h1>Total : ${totalValue.toFixed(2)}</h1>            
            
            <table>
                <thead>
                    <tr>
                        {/* th crea una celda de enabezado en una tabla */}
                        <th>Correo</th>
                        <th>Producto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map((donation, index) => (
                        <tr key={index}>
                            {/* tr crea una fila en una tabla */}
                            {/* td crea una celda en una tabla */}
                            <td>{donation.email}</td>
                            {donation.value > 5 ? <td>{"Almuerzo"}</td> : <td>{"Cafe"}</td>}
                            <td>{donation.value}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <h1>Total : {totalValue}</h1> */}
            {/* toFixed reducir decimales a solo 2 */}
            {/* <h1>Total : ${totalValue.toFixed(2)}</h1> */}
            

        </div>
    );
};

export default TableUser;