import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredReport } from '../../Redux/actions';
import style from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.index);
  const [filters, setFilters] = useState({
    gender: '',
    age: '',
    location: '',
    page: index,
  });

  function handleChange(event) {
    let evento = event.target.name;
    let value = event.target.value;
    if (evento === 'gender') {
      setFilters({
        ...filters,
        [evento]: value,
      });
    } else if (evento === 'age') {
      setFilters({
        ...filters,
        [evento]: value,
      });
    } else {
      setFilters({
        ...filters,
        [evento]: value,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getFilteredReport(filters));
  }

  useEffect(() => {
    filters.page = index;
    dispatch(getFilteredReport(filters)); //toda la data de reports
  }, [index]);

  return (
    <div className={style.filterContainer}>
      <form
        className={style.formFilters}
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className={style.selectContainer}>
          <select name="gender" id="gender" onChange={handleChange}>
            <option value="">Seleccionar genero</option>
            <option value="Female">Femenino</option>
            <option value="Male">Masculino</option>
          </select>
        </div>

        <div className={style.selectContainer}>
          <select name="age" id="age" onChange={handleChange}>
            <option value="">Ordenar por edad</option>
            <option value="Youngest">Menor</option>
            <option value="Oldest">Mayor</option>
          </select>
        </div>

        <div className={style.inputContainer} onChange={handleChange}>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="FILTRAR POR LOCACIÓN"
          />
        </div>

        <button type="submit">APLICAR FILTROS</button>
      </form>
    </div>
  );
};

export default Filters;
