import axios from "axios";
import {
  GET_BY_NAME,
  GET_VIDEOGAMES,
  GET_BY_ID,
  FETCH_GENRES,
  GENRES_FILTER,
  ADD_VIDEOGAME,
  ORIGIN_FILTER,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
} from "./action-types";

export const getVideogames = () => {
  const endpoint = "http://localhost:3001/videogames";

  return async (dispatch) => {
    const { data } = await axios(endpoint);

    return dispatch({
      type: GET_VIDEOGAMES,
      payload: data,
    });
  };
};
export const getById = (id) => {
  const endpoint = `http://localhost:3001/videogames/${id}`;

  return async (dispatch) => {
    const { data } = await axios(endpoint);

    return dispatch({
      type: GET_BY_ID,
      payload: data,
    });
  };
};

export const getByName = (name) => {
  const endpoint = `http://localhost:3001/videogames/name?name=${name}`;

  return async (dispatch) => {
    const { data } = await axios(endpoint);
    // console.log(data);
    return dispatch({
      type: GET_BY_NAME,
      payload: data,
    });
  };
};

export const addVideogame = (videogame) => {
  const endpoint = "http://localhost:3001/videogames";

  return async (dispatch) => {
    const { data } = await axios.post(endpoint);
    // console.log(data);
    return dispatch({
      type: ADD_VIDEOGAME,
      payload: data,
    });
  };
};

//FILTROS
export const fetchGenres = () => {
  const endpoint = "http://localhost:3001/genres";

  return async (dispatch) => {
    const { data } = await axios(endpoint);
    dispatch({
      type: FETCH_GENRES,
      payload: data,
    });
  };
};

export const genresFilter = (selectedGenre) => {
  return {
    type: GENRES_FILTER,
    payload: selectedGenre,
  };
};

export const originFilter = (origin) => {
  return {
    type: ORIGIN_FILTER,
    payload: origin,
  };
};

//ORDENADORES
export const orderByName = (order) => {
  return {
    type: ORDER_BY_NAME,
    payload: order,
  };
};
export const orderByRating = (order) => {
  return {
    type: ORDER_BY_RATING,
    payload: order,
  };
};
