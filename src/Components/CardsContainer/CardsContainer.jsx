import { Link } from 'react-router-dom';
import style from './CardsContainer.module.css';

const CardContainer = ({
  id,
  name,
  description,
  image,
  date,
  location,
  age,
}) => {
  const img = image
    ? image
    : 'https://this-person-does-not-exist.com/img/avatar-gen4a0cc4d9a2581818a703a23e62600295.jpg';
  return (
    <div className={style.contenedor}>
      <Link to={`/detail/${id}`} className={style.link}>
        <h2>{name}</h2>
      </Link>
      <Link to={`/detail/${id}`}>
        <img src={image} alt="" className={style.image} />
      </Link>
      <Link to={`/detail/${id}`} className={style.link}>
        <h2>Fecha: {date}</h2>
      </Link>
      <h3>Edad: {age}</h3>
      <h3 className={style.temperament}>Locación: {location}</h3>
      <h5>Resumen de los hechos: {description}</h5>
    </div>
  );
};

export default CardContainer;
