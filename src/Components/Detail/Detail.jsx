import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import style from './Detail.module.css';
import { getReportDetail } from '../../Redux/actions';
import Comments from './Comments';
import logo from '../../assets/B&R.png';

const ReportDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reportDetail = useSelector((state) => state.reportDetail);
  const user = useSelector((state) => state.user);
  let comentarios = reportDetail?.Comments;
  // let usuario = reportDetail.Users[0].name_surName

  // console.log(usuario);
  // const isHorizontalImage =
  //   reportDetail &&
  //   reportDetail.imagen &&
  //   reportDetail.imagen.width > reportDetail.imagen.height;

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
        <div className={style.detail}>
          {/* <Link to="/home">
            <button className={style.button}>Go Back to Home</button>
          </Link> */}
          <h1>{reportDetail.name}</h1>
          {/* <p>{`Nombre: ${reportDetail.name}`}</p> */}
          <img
            className={style.image}
            src={reportDetail.image}
            alt={reportDetail.name}
          />

          <div className={style.containerP}>
            <p className={style.pDetail}>
              {reportDetail.name} de {reportDetail.age} años se identifica con
              un genero {reportDetail.gender}, con una personalidad encantadora
              y un sentido del humor contagioso. Tiene cabello{' '}
              {reportDetail.hair_style}, con un hermoso color{' '}
              {reportDetail.hair_color} que brilla bajo el sol. Sus ojos son de
              un {reportDetail.eyes_color} profundo, que contrasta
              maravillosamente con su cabello. Mide {reportDetail.height} metros
              de altura y pesa alrededor de {reportDetail.weight} kilogramos.
              {/* {reportDetail.name} nació el {reportDetail.birthday_date} , y fue visto por ultima vez en {reportDetail.location}. Su etnia es principalmente {reportDetail.ethnicity}. Al momento de su desaparicion usaba {reportDetail.clothes}.

            

            Una característica distintiva de {reportDetail.name} es {reportDetail.particular_signs}. {reportDetail.name} es una persona amable y compasiva que siempre está dispuesta a ayudar a los demás porfavor si saben algo informennos.          */}
            </p>

            <p className={style.pDetail}>
              {reportDetail.name} nació el {reportDetail.birthday_date}, su
              nacionalidad es de {reportDetail.nationality}, y fue visto por
              ultima vez en {reportDetail.location}. Su etnia es principalmente{' '}
              {reportDetail.ethnicity}. Al momento de su desaparicion usaba{' '}
              {reportDetail.clothes}.
            </p>

            <p className={style.pDetail}>
              Una característica distintiva de {reportDetail.name} es{' '}
              {reportDetail.particular_signs}. {reportDetail.name} es una
              persona amable y compasiva que siempre está dispuesta a ayudar a
              los demás porfavor si saben algo informennos.
            </p>

            {/* <p>{`Edad: ${reportDetail.age}`}</p>
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
            <p>{`Location: ${reportDetail.location}`}</p>  */}

            <br />
            <div className={style.containerdatos}>
              <p
                className={style.pDetail}
              >{`Reporte policial: ${reportDetail.court_order}`}</p>
              <p
                className={style.pDetail}
              >{`Description: ${reportDetail.description}`}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>LOADING...</h1>
        </div>
      )}

      {/* <br /> */}

      {user && user.id ? (
        <div className={style.comentarios}>
          <Comments ReportId={id} />
        </div>
      ) : (
        <div
          style={{
            margin: '0.5rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            backgroundColor: '#c5f6639f',
            height: '120px',
            fontSize: '20px',
          }}
        >
          <div>Inicia session para comentar en el reporte</div>
          <button className={style.commentButton}>
            <Link to="/login" style={{ padding: '20px' }}>
              Iniciar Sesión
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
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '5px',
              }}
            />
            <h4 htmlFor="usrname" style={{ color: '#6474459f' }}>
              {user.name}
            </h4>
            <label htmlFor="date">{coment.createdAt.split('T')[0]}</label>
            <span>{coment.comment}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          margin: '0.5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            backgroundColor: '#c5f6639f',
            width: '150px',
            color: 'black',
            borderRadius: '50px',
            border: '1px groove black',
          }}
        >
          Comentarios:
        </h3>
      </div>
    </div>
  );
};

export default ReportDetail;
