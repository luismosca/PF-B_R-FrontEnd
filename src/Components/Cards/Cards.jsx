import React from "react";
import { Link } from "react-router-dom";

function Cards ({ id, name, description, image, court_order, status, date, location}) {
    return (
        <div className={style.card}>
        <h3 className={style.h3}>{name}</h3>
        <Link to={`/detail/${id}`}>
           <img className={style.image} src={image} alt={`${name} Image`} />
        </Link>
        <h4 className={style.h4}>Description.: {description}</h4>
        <h4 className={style.h4}>Status.: {status}</h4>
        <h4 className={style.h4}>Date.: {date}</h4>
        <h4 className={style.h4}>Location: {location}</h4>
     </div>
    )
}

export { Cards } ;