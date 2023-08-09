import axios from "axios";
import { GET_BY_NAME, GET_VIDEOGAMES } from "./action-types";

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
