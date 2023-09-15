import React from 'react';
import Card from '../Cards/Cards';
import { useSelector} from 'react-redux';

const Home = () => {

    const allReports = useSelector (state => state.allReports);

    return (
        <div className={style.cardContainer}>
            {allReports.map(report => (
                <Card
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
    );
};

export default Home;


    
