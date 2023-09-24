import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

// import axios from "axios";
import style from './Donations.module.css';
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import logo from '../../assets/B&R.png';
import { NavBar } from '../NavBar/NavBar';

//*----------------------------------------------------

const Donations = (props) => {
  return (
    <div className={style.divDonation}>
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
              console.log('order', order);
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
              console.log('order', order);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Donations;
