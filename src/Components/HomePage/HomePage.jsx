import React, { useEffect, useState } from "react";
import { getAllReports } from "../../Redux/actions";
import Cards  from "../Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBar/NavBar";
import style from "./HomePage.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";

const Home = () => {
  const dispatch = useDispatch();
  const allReports = useSelector((state) => state.allReports);

  useEffect(() => {
    dispatch(getAllReports()); //toda la data de reports
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className={style.title}>
        <h1>En cada búsqueda, encontramos</h1>
        <h2>la humanidad perdida</h2>
      </div>
      <SearchBar></SearchBar>
      <Filters/>
      <Cards className={style.container} allReports={allReports} />
    </>
  );
};

export default Home;
