import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";
import { getReportDetail } from "../../Redux/actions";
import Comments from "./Comments";
import logo from "../../assets/B&R.png";

const ReportDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reportDetail = useSelector((state) => state.reportDetail);
  const user = useSelector((state) => state.user);
  let comentarios = reportDetail?.Comments;
  useEffect(() => {
    dispatch(getReportDetail(id));
  }, [id, dispatch]);

  return (
    <div className={style.detailContainer}>
      <div>
        <a href="/home">
          <img src={logo} alt="Logo" className={style.logo} />
        </a>
      </div>
      {reportDetail ? (
        <div>
          <section className={style.product}>
            <div className={style.photocontainer}>
            <div className={style.divider}></div> {/* Línea divisoria */}
              <img
                className={style.imagen}
                src={reportDetail.image}
                alt={reportDetail.name}
              />
            </div>
            <div className={style.product__info}>
              <div className={style.description}>
                <div className={style.title}>
                  <h1>{reportDetail.name}</h1>
                </div>
                <br />
                <ul>
                  <p><strong>Fecha del suceso:</strong> {reportDetail.date}</p>
                  <p><strong>Locación:</strong> {reportDetail.location}</p>
                  <p><strong>Género:</strong> {reportDetail.gender}</p>
                  <p><strong>Edad:</strong> {reportDetail.age}</p>
                  <p><strong>Día de nacimiento:</strong> {reportDetail.birthday_date}</p>
                  <p><strong>País:</strong> {reportDetail.nationality}</p>
                  <p><strong>Etnia:</strong> {reportDetail.ethnicity}</p>
                  <p><strong>Estilo cabello:</strong> {reportDetail.hair_style}</p>
                  <p><strong>Color cabello:</strong> {reportDetail.hair_color}</p>
                  <p><strong>Color de ojos:</strong> {reportDetail.eyes_color}</p>
                  <p><strong>Altura:</strong> {reportDetail.height}</p>
                  <p><strong>Peso:</strong> {reportDetail.weight}</p>
                  <p><strong>Ropa:</strong> {reportDetail.clothes}</p>
                  <p><strong>Señas particulares:</strong> {reportDetail.particular_signs}</p>
                  <p><strong>Reporte policial:</strong> {reportDetail.court_order}</p>
                </ul>
              </div>
            </div>
          </section>
          <br />
          <div className={style.containerdatos}>
            <p>{`Description: ${reportDetail.description}`}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>LOADING...</h1>
        </div>
      )}

      {user && user.id ? (
        <div className={style.comentarios}>
          <Comments ReportId={id} />
        </div>
      ) : (
        <div
          style={{
            margin: "0.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            height: "120px",
            fontSize: "20px",
          }}
        >
          <button className={style.newbtn}>
            <Link to="/login" style={{ padding: "20px" }}>
              Iniciar Sesión para comentar
            </Link>
          </button>
        </div>
      )}

      {/* <hr /> */}
      {/* //!comentarios renderizados */}
      <div>
        {comentarios?.map((coment, index) => (
          <div key={index}>
            <img
              src={user.image}
              alt="userImage"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "5px",
              }}
            />
            <h4 htmlFor="usrname" style={{ color: "#6474459f" }}>
              {user.name}
            </h4>
            <label htmlFor="date">{coment?.createdAt?.split("T")[0]}</label>
            <span>{coment.comment}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          margin: "0.5rem",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <h4
          style={{
            backgroundColor: "#c5f6639f",
            color: "#6474459f",
            margin: "0.8rem",
            padding: "0.5rem",
            textAlign: "center",
            width: "150px",
            borderRadius: "20px",
            border: "2px groove black",
          }}
        >
          Comentarios
        </h4>
      </div>
    </div>
  );
};

export default ReportDetail;
