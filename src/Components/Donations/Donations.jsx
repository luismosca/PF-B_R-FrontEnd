import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import style from './Donations.module.css';
import logo from '../../assets/B&R.png';
import { NavBar } from '../NavBar/NavBar';
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { useSelector } from 'react-redux';
//*----------------------------------------------------

const notificacion = ()=>{
  Swal.fire({
    // position: 'top-end',
    icon: 'success',
    title: 'GRACIAS POR SU DONACION',
    showConfirmButton: false,
    timer: 3000
  })
} 

const Donations = (props) => {
  const user = useSelector(state => state.user);

  const email = user.email

  const dataEmail = {
    "userEmail":email
  }

  const [dataDonation, setDataDonation] = useState("")

  return (
    <div className={style.divDonation}>
      {/* {console.log("soy user",email)} */}
      {console.log("http://localhost:3001/donations/sendEmail", dataEmail)}
      <div>
        <NavBar />
      </div>

      <div>
        <a href="/home">
          <img src={logo} alt="Logo" className={style.logo} />
        </a>
      </div>

      <div className={style.donationContainer}>
        <div className={style.donationItem}>
          <h1 className={style.h1Donation}>Una taza de cafe ($5)</h1>

          <div className={style.imgContainer}>
            <img
              src="https://img.freepik.com/vector-premium/expresion-cafe-dos-tazas-dibujos-animados_24877-17515.jpg"
              className={style.imgDonation}
              alt="Cafe"
            />
          </div>

          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: props.invoice,
                    amount: {
                      value: props.totalValue,
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const order = await actions.order?.capture();
              setDataDonation(order)
              if (order) {
                notificacion()
                //dataregistro
                // {"userEmail": "hadavidg@gmail.com"}
                //* order.payer.email_address
                // console.log("http://localhost:3001/donations/sendEmail",  dataEmail);
                  axios
                    .post("http://localhost:3001/donations/sendEmail", dataEmail )                   
                
              }
              axios.post("http://localhost:3001/donations",
              {
                "idUser": user.id ? user.id :"Anonimo",
                "email": user.email ? user.email : order.payer.email_address,
                "value": order.purchase_units[0].amount.value                
              })
              // console.log('Valor', order.purchase_units[0].amount.value);
              // order.purchase_units.amount.value
            }}
          />
        </div>

        <div className={style.donationItem}>
          <h1 className={style.h1Donation}>Dona un almuerzo ($10)</h1>

          <div className={style.imgContainer}>
            <img
              src="https://img.freepik.com/vector-premium/almuerzo-fresco-delicioso_24877-3193.jpg?w=2000"
              className={style.imgDonation}
              alt="Cafe"
            />
          </div>

          <PayPalButtons
            // creamos el pedido con los datos que le pasamos
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: props.invoice,
                    amount: {
                      value: '10',
                    },
                  },
                ],
              });
            }}
            //capturamos la info de la transaccio
            onApprove={async (data, actions) => {
              const order = await actions.order?.capture();
              setDataDonation(order)
              if (order) {
                
                notificacion()
                //dataregistro
                //* order.payer.email_address
                
                  axios
                    .post("http://localhost:3001/donations/sendEmail", dataEmail)                   
                
              }
              axios.post("http://localhost:3001/donations",
              {
                "idUser": user.id ? user.id :"Anonimo",
                "email": user.email ? user.email : order.payer.email_address,
                "value": order.purchase_units[0].amount.value                
              })
              // console.log('Donacions', dataDonation, 'Donacions' ,order);
            }}
          />
        </div>
      </div>
      {/* {console.log("estado Donacion",dataDonation)} */}
    </div>
  );
};

export default Donations;
