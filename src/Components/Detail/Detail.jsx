import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";
import { getReportDetail } from "../../Redux/actions";

const ReportDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reportDetail = useSelector((state) => state.reportDetail);

  // const isHorizontalImage =
  //   reportDetail &&
  //   reportDetail.imagen &&
  //   reportDetail.imagen.width > reportDetail.imagen.height;

  useEffect(() => {
    dispatch(getReportDetail(id));
  }, [id, dispatch]);

  return (
    <div className={style.contenedor}>
      {Object.keys(reportDetail).length ? (
        <div className={style.detail}>
          <Link to="/home">
            <button className={style.button}>Go Back to Home</button>
          </Link>
          <h1>{reportDetail.name}</h1>
          <p>{`Nombre: ${reportDetail.name}`}</p>
          <img
            className={style.image}
            src={reportDetail.image}
            alt={reportDetail.name}
          />
          <p>{`Edad: ${reportDetail.age}`}</p>
          <p>{`Género: ${reportDetail.gender}`}</p>
          <p>{`Edad: ${reportDetail.status}`}</p>
          <p>{`Día de nacimiento: ${reportDetail.birthday_date}`}</p>
          <p>{`País: ${reportDetail.nationality}`}</p>
          <p>{`Etnia: ${reportDetail.ethnicity}`}</p>
          <p>{`Estilo cabello: ${reportDetail.hair_style}`}</p>
          <p>{`Color cabello: ${reportDetail.hair_color}`}</p>
          <p>{`Color de ojos: ${reportDetail.eyes_color}`}</p>
          <p>{`Altura: ${reportDetail.height}`}</p>
          <p>{`Peso: ${reportDetail.weight}`}</p>
          <p>{`Ropa: ${reportDetail.clothes}`}</p>
          <p>{`Señas particulares: ${reportDetail.particular_signs}`}</p>
          <p>{`Date: ${reportDetail.date}`}</p>
          <p>{`Location: ${reportDetail.location}`}</p>
          <p>{`Reporte policial: ${reportDetail.court_order}`}</p>
          <p>{`Description: ${reportDetail.description}`}</p>
        </div>
      ) : (
        <div>          
          <h1>LOADING...</h1>
        </div>
      )}
    </div>
  );
};

export default ReportDetail;
