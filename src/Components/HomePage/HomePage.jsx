import React from 'react';
import { Cards }  from '../Cards/Cards';
import { useSelector} from 'react-redux';
import { NavBar } from '../NavBar/NavBar';
import style from './HomePage.module.css'
import { SearchBar } from '../SearchBar/SearchBar';


const Home = () => {

    const allReports = useSelector (state => state.allReports);

    return (
        <> 
        <NavBar />
        <div className={style.title}>
        <h1>En cada búsqueda, encontramos</h1>
        <h2>la humanidad perdida</h2>
      </div>
        <SearchBar></SearchBar>
        <div className={style.cardContainer}>
            {allReports?.map(report => (
                <Cards
                key={report.id}
                id={report.id}
                name={report.name}
                image={report.image}
                description={report.description}
                status={report.status}
                date={report.date}
                location={report.location}
                />
                ))}  
        </div>
                 </>
    );
};

export { Home };


    
