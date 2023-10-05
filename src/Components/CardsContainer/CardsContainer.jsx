import { Link } from "react-router-dom";
import style from "./CardsContainer.module.css";

const CardContainer = ({ id, name, description, image, date, location, age }) => {
  const img = image ? image : "https://this-person-does-not-exist.com/img/avatar-gen4a0cc4d9a2581818a703a23e62600295.jpg"
  return (
    <>
    <div className={style.contenedor}>
      <div className={style.midcontenedor}>
        <Link to={`/detail/${id}`} className={style.name}>
          <h2>{name}</h2>
        </Link>
        <Link to={`/detail/${id}`}>
          <img src={image} alt="" className={style.image}/>
        </Link>      
      </div>
        <h3 className={style.date}>{date}</h3>
        <h3 className={style.edad}>Edad : {age}</h3>
        <br/>
        <h3 className={style.location}>Ubicación : {location}</h3>
        <br/>
        <h5 className={style.resumen}>Resumen de los hechos :</h5>
        <h5 className={style.resumen}>{description}</h5>
    </div>
    </>
  );
};

export default CardContainer;