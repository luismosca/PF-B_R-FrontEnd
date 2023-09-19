import React from "react";
import style from "./Cards.module.css";
import CardsContainer from "../CardsContainer/CardsContainer";

function Cards(props) {
  const reports = props.allReports;
  return (
    <div className={style.cards}>
      {reports.map(
        ({
          id,
          name,
          image,          
          age,         
          nationality,          
          date,
          location,
          description
        }) => {
          return (
            <CardsContainer
              key={id}
              id={id}
              name={name}
              image={image}
              age={age}              
              nationality={nationality}              
              date={date}
              location={location}
              description={description}
            />
          );
        }
      )}
    </div>
  );
}

export default Cards;
