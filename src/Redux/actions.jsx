// import axios from "axios";
// import {
//   GET_DOGS,
//   CREATE_DOG,
//   TEMPERAMENT,
//   FILTER_TEMPERAMENT,
//   FILTER_ORIGIN
// } from "./actions-types";

// export const fetchDogs = () => {
//   const endpoint = "http://localhost:3001/dogs";
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(endpoint);
//       console.log(data);
//       return dispatch({
//         type: GET_DOGS,
//         payload: data,
//       });
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
// };
// export const Temperaments = () => {
//   const endpoint = "http://localhost:3001/temperaments";
//   return async (dispatch) => {
//     try {
//       const { data } = await axios(endpoint);
//       console.log(data);
//       return dispatch({
//         type: TEMPERAMENT,
//         payload: data,
//       });
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
// };
// export const filterByTemperament = (selectedTemperament) => {
//   return {
//     type: FILTER_TEMPERAMENT,
//     payload: selectedTemperament,
//   };
// };

// export const originFilter = (origin) => {
//   return {
//     type: FILTER_ORIGIN,
//     payload: origin,
//   }
// }

// export const createDog = (dogData) => {
//   const endpoint = "http://localhost:3001/dogs";
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(endpoint, dogData);
//       console.log("El perro fue creado exitosamente");
//       return dispatch({
//         type: CREATE_DOG,
//         payload: await fetchDogs(),
//       });
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
// };
