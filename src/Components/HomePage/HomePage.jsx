import { useEffect, } from "react";
import { getAllReports, setIndex } from "../../Redux/actions";
import Cards from "../Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBar/NavBar";
import style from "./HomePage.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
//icons
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

const Home = () => {
  const dispatch = useDispatch();
  const allReports = useSelector((state) => state.allReports);
  let index = useSelector((state) => state.index);
  const total = useSelector((state) => state.totalReports);
  const limit = Math.ceil(total / 4)
  const nextLimit = limit // limit + 1
  // Funciones de paginado//////
  const increment = () => {
    if (index < nextLimit) { // Si no contara desde la pagina 1 sería index < limit - 1
      dispatch(setIndex(index + 1));
    } else {
    dispatch(setIndex(limit - limit + 1));
    }
  };

  const decrement = () => {
    if (index < 2) {
      dispatch(setIndex(limit))
    } else {
      dispatch(setIndex(index - 1));
    }
  };
  console.log(index, limit);
///////////////////////////////
  // useEffect(() => {

  //   dispatch(getAllReports(index)); //toda la data de reports

  // }, [index]);
  // guardar el index en el redux
  return (
    <>
      <NavBar />
      <div className={style.title}>
        <h1>En cada búsqueda, encontramos</h1>
        <h2>la humanidad perdida</h2>
      </div>
      <SearchBar></SearchBar>
      <Filters page={index} />
      <Cards className={style.container} allReports={allReports} />
      <div className={style.previous_container}>
        <button  type="button" name="prev" id="prev" onClick={decrement}>{"<="}</button>
      </div>
      <div className={style.next_container}>
        <button type="button" name="next" id="next" onClick={increment}>{"=>"}</button>
      </div>
      <div>
      <a href="https://wa.me/51976183901" target="_blank" title="Contáctanos en WhatsApp">
        <img src="https://www.tuquesabesdeesto.com/wp-content/uploads/2015/04/whatsapp-logo-297x300.png" alt="WhatsApp"/>
      </a>
      </div>       
    </>
  );
};

export default Home;
