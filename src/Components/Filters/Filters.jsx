import  { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilteredReport } from "../../Redux/actions";
import style from './Filters.module.css';  

const Filters = () => {
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        gender: "",
        age: "",
        location: ""
    });
    
    function handleChange(event) {
        let evento = event.target.name;
        let value =  event.target.value;
        if (evento === "gender") {
            setFilters({
                ...filters,
                [evento]: value,
            })
        } else if(evento === "age") {
            setFilters({
                ...filters,
                [evento]: value,
            })
        } else {
            setFilters({
                ...filters,
                [evento]: value
            })
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(getFilteredReport(filters));
    }

    return (
        <div className={style.filterContainer}>

            <form className={style.formFilters} onSubmit={(event) => handleSubmit(event)}>

                <div className={style.selectContainer}>
                    <select name="gender" id="gender" onChange={handleChange}>
                        <option value="">Select a gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
                

                <div className={style.selectContainer}>
                    <select name="age" id="age" onChange={handleChange}>
                        <option value="">Order by age</option>
                        <option value="Youngest">Youngest</option>
                        <option value="Oldest">Oldest</option>
                    </select>
                </div>
                

                <div className={style.inputContainer} onChange={handleChange}>
                    <input type="text" name="location" id="location" placeholder="FILTER BY LOCATION"/>
                </div>

                <button type="submit">APLICAR FILTROS</button>
            </form>

        </div>
    )


};

export default Filters;